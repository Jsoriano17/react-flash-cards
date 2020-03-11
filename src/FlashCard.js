import React from 'react'

export default class FlashCard extends React.Component {
    render() {
        return(
            <div className='box'>
                {this.props.name}
                <br/>
                {this.props.answer}
                <br/>
                <button onClick={ () => this.props.toggle(this.props.id)}>flip</button>
                <button onClick={ () => this.props.delete(this.props.id)}>Delete</button>
            </div>
        )
    }
}


