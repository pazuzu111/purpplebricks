import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/reducers'


//create redux store
export default function configureStore() {
    return createStore(reducers, applyMiddleware(thunk))
}