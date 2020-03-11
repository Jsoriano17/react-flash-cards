import React from 'react'
import FlashCard from './FlashCard'

const FlashCards = (props) => (

    props.flashCards.map(flashCard => (
        //doesnt let me add if statement?? plan on only hiding answer later when 'flip' is clicked 
        //add toggle here if (showCard === true) {<FlashCard} else {null}
        <FlashCard key={`flashCard-${flashCard.id}`}
        delete = {props.deleteFlashCard}
        name={flashCard.name}
        answer={flashCard.answer}
        id={flashCard.id}
        toggle = {props.toggleCard}
        />
    ))
)

export default FlashCards