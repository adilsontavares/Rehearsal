import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';

import 'bulma/css/bulma.css'
import './styles/main.css'

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
