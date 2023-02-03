import { useState, useEffect } from "react";
const Cart = (props) => {
    let cart = props.cart
    let setCart = props.setCart

    let [total, setTotal] = useState([])
    // let remove = (id) =>{
    //     cart.filter(x=>setCart(x.id !== id))
    // }

    useEffect(() => {
        setTotal(cart.reduce((sum, curr) => sum + curr.price, 0))
    }, [])
    return (
        <div className="cart">
            {(cart.length === 0) ? (<h1 className="text-center mt-4">cart is empty</h1>) :
                (<h4 className="text-center mt-4">Total items : {cart.length}</h4>)
            }
            <br />

            <div className="items d-flex justify-content-evenly">
            <div className="card px-5 mb-5" >
                <p className="fs-2 my-4">Shopping cart</p>
                <hr className="m-3" />
                {cart.map((product) => (
                    <div className="cartProduct d-flex  justify-content-evenly my-4  ">
                        <img src={product.thumbnail} alt="" height="200" width="300" />
                        <div className="card-info d-flex flex-column">
                            <div className="card-body p-0">
                                <h4>{product.title}</h4>
                                <h5>{product.description}</h5>
                                <p className="text-dark fs-3"> ₹ {Math.round(product.price - product.price * (product.discountPercentage) / 100) * 80}</p>
                                <p className="text-success">In stock</p>
                            </div>
                            <div className="">
                                <button className="btn btn-outline-danger">Remove</button>
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}
                <hr />
                <div className="totalPrice text-end" >
                    <p className="fs-5">Subtotal ({cart.length} items) : ₹ {total*80} </p>
                </div>
            </div>
            <div className="card h-50 p-4">
                <p className="text-success fs-6">Your order is eligible for FREE Delivery.</p>
                <p className="fs-6">Subtotal ({cart.length} items) : <span className="fw-bold">₹ {total*80}</span> </p>
                <button className="btn btn-warning">Proceed to Buy</button>
            </div>
            </div>
        </div>
    );
}

export default Cart;