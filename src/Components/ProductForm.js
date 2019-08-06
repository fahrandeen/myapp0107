import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveProduct } from '../reducers/product'


class ProductForm extends Component {
    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.saveProduct(evt.target.productName.value, evt.target.price.value, evt.target.uom.value, evt.target.dateCreated.value)
        
    }

    handleInputChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="col-sm-6 sm-3">
                        <label>Product Name</label>
                        <input type="text"
                            name="productName"
                            className="form-control"
                            onChange={this.props.handleInputChange}
                            value={this.props.productName} />
                    </div>
                    <div className="col-sm-2 sm-2">
                        <label>Price</label>
                        <input type="text"
                            name="price"
                            className="form-control"
                            value={this.props.price}
                            onChange={this.props.handleInputChange} />
                    </div>
                    <div className="col-sm-2 sm-2">
                        <label>UOM</label>
                        <input type="text"
                            name="uom"
                            className="form-control"
                            onChange={this.props.handleInputChange}
                            value={this.props.uom} />
                    </div>
                    <div className="col-sm-2 sm-2">
                        <label>Date</label>
                        <input type="date"
                            name="dateCreated"
                            className="form-control"
                            onChange={this.props.handleInputChange}
                            value={this.props.dateCreated}
                        />
                    </div>
                </div>
                <button className="btn btn-primary"
                    type="submit">Submit form</button>
            </form>
        )
    }
}




export default connect(
    (state) => ({ products: state.product.handleInputChange }),
    { saveProduct }
)(ProductForm)