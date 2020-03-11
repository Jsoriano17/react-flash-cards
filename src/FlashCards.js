import React from 'react'
import FlashCard from './FlashCard'

const FlashCards = (props) => (

    props.flashCards.map(flashCard => (
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