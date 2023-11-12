import { useEffect, useState } from 'react'
import './match.css'
import SingleCard from './components/SingleCard'

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

console.log(cards)

const resetTurn = () =>{
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns + 1)
}

  return(
    <div className="match">
      <h1> yee</h1>
      <button onClick={shuffleCards}>New Game</button>
    <div className="card-grid">
      {cards.map(card => (
        <SingleCard 
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