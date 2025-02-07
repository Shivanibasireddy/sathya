import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import Cart from "./Cart";
import ContactUs from "./ContactUs";
import Home from "./Home";
import Orders from "./Orders";
import "./App.css";
import NonVegItems from "./NonVegItems";
import VegItems from "./VegItems";
import MilkProducts from "./MilkProducts";
import { useSelector } from "react-redux";
import LeafyVeg from "./LeafyVeg";
import Fruits from "./Fruits";
import Login from "./Login";

function App(){
  const cart=useSelector(state=>state.cart);
  const totalItems= cart.reduce((sum,item)=>sum+item.quantity,0);
  return(
  <>
  <BrowserRouter>
  <Link to='/home' className="myclass">Home</Link>
  <Link to='/orders' className="myclass">Orders</Link>
  <Link to='/cart' className="myclass">Cart<span>{totalItems}</span></Link>
  <Link to='/aboutUs' className="myclass">AboutUs</Link>
  <Link to='/contactUs' className="myclass">ContactUs</Link>
  <Link to='/nonVegItems' className="myclass">NonVegItems</Link>
  <Link to='/vegItems' className="myclass">VegItems</Link>
  <Link to='/milkProducts' className="myclass">MilkProducts</Link>
  <Link to='/leafyVeg' className="myclass">LeafyVeg</Link>
  <Link to='/fruits' className="myclass">Fruits</Link>
  <Link to='/login' className="myclass">Login</Link>



  <Routes>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/orders" element={<Orders/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/aboutUs" element={<AboutUs/>}></Route>
    <Route path="/contactUs" element={<ContactUs/>}></Route>
    <Route path="/nonVegItems" element={<NonVegItems/>}></Route>
    <Route path="/vegItems" element={<VegItems/>}></Route>
    <Route path="/milkProducts" element={<MilkProducts/>}></Route>
    <Route path="/leafyVeg" element={<LeafyVeg/>}></Route>
    <Route path="/fruits" element={<Fruits/>}></Route>
    <Route path="/login" element={<Login/>}></Route>



  </Routes>
  </BrowserRouter>
  </>
  )
}
export default App;