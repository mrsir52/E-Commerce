import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/docs/css/mdb.min.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { Provider } from 'react-redux'
import Store from './store'

const Wrapped = (
    <Provider store={Store}>
        <App />
    </Provider>
)



ReactDOM.render(Wrapped, document.getElementById('root'))
registerServiceWorker()
