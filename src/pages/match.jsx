import { useEffect, useState } from 'react'
import './match.css'
import SingleCard from '../component/SingleCard'

const cardImages = [

  {"src": "/image/bird.png", matched:false},
  {"src": "/image/cow.png" , matched:false},
  {"src": "/image/frog.png" , matched:false},
  {"src": "/image/lion.png" , matched:false},
  {"src": "/image/elephant.png" , matched:false},
  {"src": "/image/kangaroo.png" , matched:false}
]

const Match =() => {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] =useState(null)

const shuffleCards = () =>{

  const shuffleCards = [...cardImages, ...cardImages]
  .sort(() => Math.random() -0.5)
  .map((card) => ({ ...card, id: Math.random() }))

  setCards(shuffleCards)
  setTurns(0)

}


const handleChoice = (card) =>{
choiceOne ? setChoiceTwo(card): setChoiceOne(card)
}
let win;
function allAreTrue(cards) {
 
  return ( cards.matched === true);
 
}

turns===0 ? win =false :  win = cards.every(allAreTrue) 


useEffect(() => {
  if(choiceOne && choiceTwo){
    if(choiceOne.src === choiceTwo.src){
      setCards(prevCards => {
        return prevCards.map(card =>{
          if(card.src === choiceOne.src){
            return {...card, matched:true }
          } else{
            return card
          }
        })
      })
      resetTurn()
    } else{
      setTimeout(() => resetTurn(), 500)
    }
  }
}, [choiceOne, choiceTwo])


const resetTurn = () =>{
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns + 1)
}
let failPoint = 10;

  return(
    <div className="match">
      <h1> yee</h1>
      <div className='side'>
  <h3>Moves</h3>
  <h4>{failPoint-turns}</h4>
  <button
  className='NewGame'
   onClick={shuffleCards}>New Game</button>
  <div className="btn-group-vertical diff" role="group" aria-label="Vertical button group">
  <button type="button " className="btn btn-primary  easy">Easy</button>
  <button type="button " className="btn btn-primary medium">Medium</button>
  <button type="button " className="btn btn-primary hard">hard</button>
</div>
</div>
    <div className="card-grid">
      {cards.map(card => (
        <SingleCard 
        win={win}
        turns={turns}
        key={card.id} 
        card={card}
        handleChoice={handleChoice}
        flipped={card === choiceOne || card === choiceTwo || card.matched}
        />
      ))}
    </div>

    </div>
  )
}

export default Match