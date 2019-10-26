import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, HashRouter, useHistory} from 'react-router-dom'

import App from './components/app/app'

ReactDOM.render((
    <BrowserRouter >
        <App/>
    </BrowserRouter>
), document.querySelector('#root'))
