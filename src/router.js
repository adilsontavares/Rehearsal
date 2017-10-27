import React, { Component } from 'react'
import Navbar from './screens/container/navbar'
import RegisterBand from './screens/band/register'

class Index extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <RegisterBand />
            </div>
        )
    }
}

export default Index