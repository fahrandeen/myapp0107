const baseUrl = 'http://5d479f42992ea9001444c91f.mockapi.io/products'
// const baseUrl = 'http://localhost:8080/products'
//REACT_APP_BASE_URL=https://fahrandeen.github.io/myapp0107/products
//"homepage": "https://fahrandeen.github.io/myapp0107",
  


export const getProducts = () => {
    return fetch(baseUrl)
    .then(res => res.json())
}

export const createProduct = (productName, price, uom, dateCreated) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({productName: productName, price: price, uom: uom, dateCreated: dateCreated,isActive: false})
    })
    .then(res => res.json())
}

export const updateProduct = (product) => {
    return fetch(`${baseUrl}/${product.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    .then(res => res.json())
}

export const destroyProduct = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}

