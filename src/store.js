import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'

import rootSaga from './sagas/index'
import rootReducer from './reducers/index'
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware()

// const middleWare = [sagaMiddleware]

const composeEnhancers = (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const enhancer = composeEnhancers (
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
)

export const store = createStore(
    rootReducer(history),
    enhancer
)

sagaMiddleware.run(rootSaga)
