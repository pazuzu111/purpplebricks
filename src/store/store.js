import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import reducer from '../reducers/reducers'


//create redux store
export default function configureStore() {
    return createStore(applyMiddleware(thunk))
}