import {  useState } from 'react';
import './SingleCard.css'
import styled, {keyframes} from "styled-components";
import { useWindowSize } from "@uidotdev/usehooks";
import Confetti from 'react-confetti'
export default function SingleCard({win,turns, card, handleChoice, flipped, disabled }) {


const [clicked,setclicked]=useState("")

let failPoint = 10;

const { width, height } = useWindowSize()


    const handleClick = () =>{  
      if(turns<failPoint){
        if(!disabled){ 
        handleChoice(card )
        setclicked("clicked");
        }
      }
        setTimeout(() => {
            setclicked("none");
         }, 1000);
    }
clearTimeout(handleClick);

  
function refreshPage() {
  window.location.reload(false);
}


  return (
  <>
     <Confetti
      width={width}
      height={height}
     run={win}
      numberOfPieces={400}
      confettiSource={{x: 0, y: 100, w: width, h:600}}
    />

{win===true ? <div className='failed'>
  <button onClick={refreshPage}>Click to reload!</button>
</div>:null}

    {turns >=failPoint && win !=true ?
      <div className='failed'>
        <h1>Sorry, You have run out of moves</h1>
       <img  className="front" src="/image/sad.png" alt="failed" />
       <div>
      <button onClick={refreshPage}>Click to reload!</button>
    </div>
       </div>: null
  }
    <div className="scard">
    <div className={flipped ? "flipped" : "" }>
    <Move  slide={clicked}>
  <img  className="front" src={card.src} alt="card front" />
  <div className='fullCards'>
  <img className="back" 
  src="/image/nada.svg" 
  onClick={handleClick} 
  alt="card back" />
  
  </div>
  </Move>
    </div>
  </div>
  </>
  )
}
const flip =keyframes`
  from{
    transform: rotateY(180deg);
  }
  to{
    transform: rotateY(0deg); 
  }`

 const Move =styled.div`
 animation-name: ${(props) =>{if(props.slide === "clicked") { return flip} }  };
animation-duration: 0.5s;
`