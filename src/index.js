import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store, history} from './store'

import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
<Provider store={store}  >
    <App history={history} />
</Provider>
, document.getElementById('app-container'));


serviceWorker.unregister();
