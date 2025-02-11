import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./AboutUs";
import Cart from "./Cart";
import ContactUs from "./ContactUs";
import Home from "./Home";
import Orders from "./Orders";
import NonVegItems from "./NonVegItems";
import VegItems from "./VegItems";
import MilkProducts from "./MilkProducts";
import LeafyVeg from "./LeafyVeg";
import Fruits from "./Fruits";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
         DeliciousWorld...😋 
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  <i className="fa-solid fa-house"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nonVegItems">
                  <i className="fas fa-drumstick-bite"></i> Non-Veg Items
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/vegItems">
                  <i className="fas fa-carrot"></i> Veg Items
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/milkProducts">
                <i class="fas fa-glass-whiskey"></i>
                Milk Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leafyVeg">
                <i class="fas fa-leaf"></i>
                Leafy Veg
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fruits">
                <i class="fas fa-apple-alt"></i>
                  Fruits
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">
                <i class="fas fa-receipt"></i>
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutUs">
                  <i className="fa-solid fa-address-card"></i> About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactUs">
                  <i className="fa-regular fa-address-book"></i> Contact Us
                </Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link position-relative" to="/cart">
                <i class="fas fa-shopping-cart"></i>Cart
                  {totalItems > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <i className="fa-solid fa-user"></i> Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Adjust content to avoid overlap due to fixed navbar */}
      <div className="pt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nonVegItems" element={<NonVegItems />} />
          <Route path="/vegItems" element={<VegItems />} />
          <Route path="/milkProducts" element={<MilkProducts />} />
          <Route path="/leafyVeg" element={<LeafyVeg />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
