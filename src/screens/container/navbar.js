import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {

    tab = ''

    render() {
        return (
            <nav className="navbar" role="navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/studios">
                        <img src="/navbar-logo.png" />
                    </Link>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/studios">
                            Estúdios
                        </Link>
                        <Link className="navbar-item" to="/check-time">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a className="button is-primary">
                                        Verificar horários
                                    </a>
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar