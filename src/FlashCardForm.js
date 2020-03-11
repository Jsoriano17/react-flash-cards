import React from 'react'
export default class FlashCardForm extends React.Component {
    state = {
        name: '',
        answer: ''
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addFlashCard(this.state)
        this.setState({
            name:'',
            answer: ''
        })
    }
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    render () {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                label='Name' 
                name='name' 
                placeholder='flash card title' 
                onChange={this.handleChange}/>
                <br/>
                <input 
                label='Answer' 
                name='answer' 
                placeholder='flash card answer'  
                onChange={this.handleChange}/>
                <br/>
                <button>Submit</button>
            </form>
        )
    }
}