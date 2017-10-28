import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class StudioList extends Component {

    state = {
        studios: [
            {
                name: 'Estúdio Pimpão',
                interval: [8, 15],
                weekdays: [1, 2, 3, 4, 5]
            },
            {
                name: 'Vina no Pão',
                interval: [9, 18],
                weekdays: [1, 2, 3, 4, 5, 6]
            }
        ]
    }

    intervalDescription(studio) {
        return ""
    }

    render() {
        return (
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Estúdios</h1>
                        <h2 className="subtitle">Disponíveis em Curitiba e região metropoitana.</h2>
                        {
                            this.state.studios.map((studio, index) => (
                                <div className="field" key={index}>
                                    <div className="card">
                                        <div className="card-header">
                                            <h2 className="card-header-title">{studio.name}</h2>
                                        </div>
                                        <div className="card-content">
                                            <h2 className="subtitle">
                                                Atendimento das {studio.interval[0].toTime()} até {studio.interval[1].toTime()}</h2>
                                            <div className="tags">
                                                {
                                                    studio.weekdays.map((weekday) => (
                                                        <span className="tag is-info" key={weekday}>
                                                            {weekday.toWeekdayShort()}
                                                        </span>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <Link className="button is-primary" to="/studios/new">
                            Cadastrar novo estúdio
                        </Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default StudioList