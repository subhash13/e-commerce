import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Products = () => {
    let [productsData, setProducts] = useState([]);
    let navigate = useNavigate()
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('https://dummyjson.com/products')
            let data = await response.json()
            setProducts(data.products)
        }
        fetchData()
    }, [])
    let viewProduct = (id) => {
        navigate(`/products/${id}`)
    }
    return (
        <div className="products mt-4">
            <h1 className="text-center">Products Page</h1>
            <hr />
            <div className="product mt-5">
                {productsData.map(data => (
                    <div className="d-flex border my-3">
                        <div className="img">
                            <img style={{ cursor: "pointer" }} onClick={() => viewProduct(data.id)} width="300px" src={data.thumbnail} alt="" />
                        </div>
                        <div className="p-5">
                            <h3 style={{ cursor: "pointer" }} onClick={() => viewProduct(data.id)}>{data.brand} {data.title}</h3>
                            <p>rating : {data.rating} ⭐</p>
                            <p className="text-danger">-{data.discountPercentage}% <span className="text-dark fs-3 px-3"> ₹ {Math.round(data.price - data.price * (data.discountPercentage) / 100) * 80}</span></p>
                            <p className="text-secondary fs-6">MRP : <span className="text-secondary text-decoration-line-through fs-6">{data.price * 80}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;