import {PRODUCT_ADD, PRODUCT_LOAD, PRODUCT_REPLACE, PRODUCT_REMOVE} from './product'

const MESSAGE_SHOW = 'MESSAGE_SHOW'

export const showMessage = (msg) => ({type:MESSAGE_SHOW, payload:msg})

export default function(state='', action){
    switch (action.type) {
        case MESSAGE_SHOW:
            return action.payload
        case PRODUCT_ADD:
        case PRODUCT_LOAD:
        case PRODUCT_REPLACE:
        case PRODUCT_REMOVE:            
            return ''
        default:
            return state
    }
}