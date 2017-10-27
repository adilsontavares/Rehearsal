import React, { Component } from 'react'

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar" role="navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src="/navbar-logo.png" />
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Estúdios
                        </a>
                        <a className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a className="button is-primary">
                                        Verificar horários
                                    </a>
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar