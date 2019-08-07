import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProducts, toggleProduct, deleteProduct, getVisibleProducts } from '../reducers/product'




class ProductList extends Component {

    componentDidMount() {
        setInterval(() => {
            console.log('auto loading')
            this.props.fetchProducts()
        }, 10000);
         
    }

    updateProductDetails = (id) =>{
        console.log(id)
    }

    render() {
        return (
            <div className="table-responsive-sm">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">UoM</th>
                            <th scope="col">Created Date</th>
                            <th scope="col">Item Status</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product => (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.productName}</td>
                                <td>{product.price}</td>
                                <td>{product.uom}</td>
                                <td>{product.dateCreated}</td>
                                <td><input type="checkbox"
                                    onChange={() => this.props.toggleProduct(product.id)}
                                    checked={product.isActive} />
                                </td>
                                <td>
                                    <span className="delete-item">
                                        <button onClick={() => this.props.deleteProduct(product.id)}>X</button>
                                    </span>
                                </td>
                                <td>
                                    <span className="delete-item">
                                        <button onClick={()=>this.updateProductDetails(product.id)}>Update</button>
                                    </span>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        )
    }
}


export default connect(
    (state, ownProps) => ({ products: getVisibleProducts(state.product.products, ownProps.filter) }),
    { fetchProducts, toggleProduct, deleteProduct}
)(ProductList)