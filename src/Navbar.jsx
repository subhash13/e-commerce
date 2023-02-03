import { Link } from "react-router-dom";

const Navbar = (props) => {
    let cart = props.cart
    return ( 
        <div className="navbar px-5 navbar-dark bg-dark navbar-expand justify-content-between ">
           <div className="container">
           <div className="logo">
                <h1 className="text-light">E-Commerce</h1>
            </div>
            <div className="links">
                <ul className="navbar-nav">
                    <li className="nav-item mx-3"><Link to='/' className="nav-link">Home</Link></li>
                    <li className="nav-item mx-3"><Link to='/products' className="nav-link">Products</Link></li>
                    <li className="nav-item mx-3"><Link to='/about' className="nav-link">About</Link></li>
                    <li className="nav-item mx-3"><Link to='/contact' className="nav-link">Contact Us</Link></li>
                    <li className="nav-item mx-3"><Link to='/cart' className="nav-link">Cart <sup className="bg-primary text-light px-1 rounded-3">{cart.length}</sup></Link></li>
                </ul>
            </div>
           </div>
        </div>
     );
}
 
export default Navbar;