import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

import 'bulma/css/bulma.css'
import './styles/main.css'

ReactDOM.render(
<BrowserRouter>
    <Router />
</BrowserRouter>,
document.getElementById('root'));

registerServiceWorker();
