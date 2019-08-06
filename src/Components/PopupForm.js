import React from 'react'

const PopupForm = (id) => {
    console.log(id)
    return (
        <form>
            <div className="form-row">
                <div className="col-sm-6 sm-3">
                    <label>Product Name</label>
                    <input type="text"
                        name="productName"
                        className="form-control"
                        // value={props.productName}
                         />
                </div>
                <div className="col-sm-2 sm-2">
                    <label>Price</label>
                    <input type="text"
                        name="price"
                        className="form-control"
                        // value={props.price} 
                        />
                </div>
                <div className="col-sm-2 sm-2">
                    <label>UOM</label>
                    <input type="text"
                        name="uom"
                        className="form-control"
                        // value={props.uom} 
                        />
                </div>
                <div className="col-sm-2 sm-2">
                    <label>Date</label>
                    <input type="date"
                        name="dateCreated"
                        className="form-control"
                        // value={props.dateCreated}
                    />
                </div>
            </div>
            <button className="btn btn-primary"
                type="submit">Update</button>
        </form>
    )

}

export default PopupForm