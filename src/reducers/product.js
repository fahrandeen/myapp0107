import { getProducts, createProduct, updateProduct, destroyProduct } from '../lib/productServices'
import { showMessage } from './messages'

const initState = {
    products: []
}

export const PRODUCT_ADD = 'PRODUCT_ADD'
export const PRODUCT_LOAD = 'PRODUCT_LOAD'
export const PRODUCT_REPLACE = 'PRODUCT_REPLACE'
export const PRODUCT_REMOVE = 'PRODUCT_REMOVE'

export const loadProducts = (products) => ({ type: PRODUCT_LOAD, payload: products })
export const addProduct = (product) => ({ type: PRODUCT_ADD, payload: product })
export const replaceProduct = (product) => ({ type: PRODUCT_REPLACE, payload: product })
export const removeProduct = (id) => ({ type: PRODUCT_REMOVE, payload: id })

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(showMessage('Loading Products...'))
        getProducts()
            .then(products => dispatch(loadProducts(products)))
    }
}

export const saveProduct = (productName, price, uom, dateCreated) => {
    return (dispatch) => {
        dispatch(showMessage('Saving Product'))
        createProduct(productName, price, uom, dateCreated)
            .then(res => dispatch(addProduct(res)))
    }
}

export const toggleProduct = (id) => {
    return (dispatch, getState) => {
        dispatch(showMessage('Saving product update'))
        const { products } = getState().product
        const product = products.find(t => t.id === id)
        const toggled = { ...product, isActive: !product.isActive }
        updateProduct(toggled)
            .then(res => dispatch(replaceProduct(res)))
    }
}

export const deleteProduct = (id) => {
    // console.log(id)
    return (dispatch) => {
        dispatch(showMessage('Product Deleting'))
        destroyProduct(id)
            .then(() => dispatch(removeProduct(id)))
    }
}



export const getVisibleProducts = (products, filter) => {
    switch (filter) {
        case 'active':
            return products.filter(t => !t.isActive)
        case 'completed':
            return products.filter(t => t.isActive)
        default:
            return products
    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case PRODUCT_ADD:
            return { ...state, products: state.products.concat(action.payload) }
        case 'CURRENT_UPDATE':
            return { ...state, productName: action.payload }
        case PRODUCT_LOAD:
            return { ...state, products: action.payload }
        case PRODUCT_REPLACE:
            return {...state, products: state.products
                .map(t => t.id === action.payload.id ? action.payload : t)
            }
        case PRODUCT_REMOVE:
            return { ...state, products: state.products
                .filter(t => t.id !== action.payload) }
        default:
            return state
    }
}