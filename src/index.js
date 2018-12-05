import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './style.css'

import App from './App'
import reducers from './reducers/index'
import * as serviceWorker from './serviceWorker'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'))

serviceWorker.unregister()