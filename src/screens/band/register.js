import React, { Component } from 'react'
import InputMask from 'react-input-mask'

class RegisterBand extends Component {

    state = {
        members: []
    }

    componentDidMount() {
        this.addMember()
    }

    addMember() {

        let member = {
            name: ''
        }

        this.setState({
            members: [
                ...this.state.members,
                member
            ]
        })
    }

    removeMember(member) {
        this.setState({
            members: this.state.members.filter(x => x != member)
        })
    }

    render() {
        return (
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Verificar horários</h1>
                        <h2 className="subtitle">Cadastre sua galera para ver os melhores estúdios para vocês.</h2>
                        <label className="label">Membros da banda</label>
                        {
                            this.state.members.map((x, index) => (
                                <div className="field">
                                    <div className="card">
                                        <div className="card-header">
                                            <h2 className="card-header-title">
                                                <input className="input" type="text" placeholder="Nome do membro" />
                                                <button className="button is-danger" onClick={() => this.removeMember(x)} disabled={this.state.members.length <= 1}>
                                                    Remover
                                                </button>
                                            </h2>
                                        </div>
                                        <div className="card-content">
                                            <div className="field">
                                                <div className="control">
                                                    <InputMask className="input" type="text" mask="99:99" placeholder="Início" />
                                                </div>
                                            </div>
                                            <div className="field">
                                                <div className="control">
                                                    <InputMask className="input" type="text" mask="99:99" placeholder="Fim" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="field">
                            <button className="button" onClick={() => this.addMember()}>
                                Adicionar membro
                            </button>
                        </div>
                        <button className="button is-success">
                            Continuar
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}

export default RegisterBand