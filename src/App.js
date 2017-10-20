import React, { Component } from 'react'
import Counter from './components/Counter'
import './styles/main.css'

class App extends Component {

    render() {
        return <Counter initialCount={10} />
    }
}

export default App;
