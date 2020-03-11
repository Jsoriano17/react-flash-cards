import React, { Component } from 'react';
import './App.css';
import FlashCards from './FlashCards';
import FlashCardForm from './FlashCardForm';

export default class App extends Component {
  state = {
    flashCards: [
      { id: 1, name: 'flash card 1', answer: 'answer to flash card 1', showCard: true },
      { id: 2, name: 'flash card 2', answer: 'answer to flash card 2', showCard: false }
    ]
  }
  addFlashCard = (flashCard) => {
    var newFlashCard = { ...flashCard, id: Math.floor(Math.random() * 1000000), showCard: false }
    this.setState({
      flashCards: [newFlashCard, ...this.state.flashCards]
    })
  }
  deleteFlashCard = (id) => {
    const newFlashCards = this.state.flashCards.filter(flashCard => flashCard.id !== id)
    this.setState({
      flashCards: newFlashCards
    })
  }
  toggleCard = (id) => {
    console.log(id)
    const index = this.state.flashCards.findIndex(flashCard => flashCard.id === id)
    console.log(this.state.flashCards[index].showCard)
    // this.setState({
    //  flashCards: this.state.flashCards[index].showCard === false
    // })
  }
  render() {
    return (
      <>
        <FlashCardForm addFlashCard={this.addFlashCard} />
        <FlashCards flashCards={this.state.flashCards} deleteFlashCard={this.deleteFlashCard} toggleCard={this.toggleCard} />
      </>
    );
  }
}

