import React, { Component } from 'react'

class Counter extends Component {

    state = {
        count: 0
    }

    constructor(props) {
        super(props)
        
        this.state = {
            count: props.initialCount || 0 
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.increment()}>+</button>
                <button onClick={() => this.decrement()}>-</button>
            </div>
        )
    }
}

export default Counter