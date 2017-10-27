import React, { Component } from 'react'
import InputMask from 'react-input-mask'

class RegisterStudio extends Component {

    state = {
        weekdays: [
            { 
                title: "DOM",
                checked: false
            },
            { 
                title: "SEG",
                checked: true
            },
            { 
                title: "TER",
                checked: true
            },
            { 
                title: "QUA",
                checked: true
            },
            { 
                title: "QUI",
                checked: true
            },
            { 
                title: "SEX",
                checked: true
            },
            { 
                title: "SAB",
                checked: false
            }
        ]
    }


    render() {
        return (
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Cadastrar estúdio</h1>
                        <h2 className="subtitle">Você está a um passo para dar visibilidade ao seu estúdio.</h2>
                        <div className="field">
                            <label className="label">Nome do estúdio</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Nome do estúdio" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Horário de funcionamento</label>
                            <div className="control">
                                <InputMask className="input" type="text" mask="99:99" placeholder="Abertura" />
                            </div>
                            <div className="control">
                                <InputMask className="input" type="text" mask="99:99" placeholder="Fechamento" />
                            </div>
                        </div>
                        <table className="table">
                            <thead>
                                { this.state.weekdays.map(x => <th>{x.title}</th>) }
                            </thead>
                            <tbody>
                                { 
                                    this.state.weekdays.map(x => (
                                        <td className="has-text-centered">
                                            <label className="checkbox">
                                                <input type="checkbox" defaultChecked={x.checked} onChange={x.checked = !x.checked} />
                                            </label>
                                        </td>
                                    ))
                                }
                            </tbody>
                        </table>
                        <button className="button is-success">
                            Cadastrar
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}

export default RegisterStudio