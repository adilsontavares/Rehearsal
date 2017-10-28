import React, { Component } from 'react'
import Navbar from './screens/container/navbar'
import RegisterBand from './screens/band/register'
import RegisterStudio from './screens/studio/register'
import ListStudios from './screens/studio/list'

import { Router, Route, Switch } from 'react-router'

export default () => (
    <main>
        <Navbar />
        <Switch>
            <Route path="/studios/new" component={RegisterStudio} />
            <Route path="/studios" component={ListStudios} />
            <Route path="/check-time" component={RegisterBand} />
        </Switch>
    </main>
)