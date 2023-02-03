import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = (props) => {
    let cart = props.cart
    let setCart = props.setCart
    let [product, setProduct] = useState([])
    let params = useParams()
    console.log(cart);
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`https://dummyjson.com/products/${params.id}`)
            let data = await response.json()
            setProduct(data)
        }
        fetchData()
    }, [])
    return (
        <div className="singleProduct mt-5">
            <div className="product d-flex align-items-center">
                <div className="img">
                    <img src={product.thumbnail} alt="" />
                </div>
                <div className="details mx-5">
                    <h3>{product.title}</h3>
                    <p>{product.rating} ⭐</p>
                    <hr />
                    <p className="text-danger">-{product.discountPercentage}% <span className="text-dark fs-3 px-3"> ₹ {Math.round(product.price - product.price * (product.discountPercentage) / 100) * 80}</span></p>
                    <p className="text-secondary fs-6">MRP : <span className="text-secondary text-decoration-line-through fs-6">{product.price * 80}</span></p>
                    <hr />
                    <p className="fs-3">{product.description}</p>
                    <p className="fs-5 text-danger">In stock : {product.stock}</p>
                    <hr />
                    <div className="options">
                        <button className="mx-2 btn btn-warning" onClick={() => setCart([...cart,product])}>Add to Cart</button>
                        <button className="mx-2 btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="images">

            </div>
        </div>
    );
}

export default SingleProduct;