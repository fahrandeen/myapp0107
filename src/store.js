import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import productReducer from './reducers/product'
import messageReducer from './reducers/messages'

const reducer = combineReducers({
    product:productReducer,
    message:messageReducer 
})

export default createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)