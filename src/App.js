// import ReactDom from "react-dom";
import './App.css';
import Profile from "./components/profile/profile.js";
import Nav from "./components/Nav/Nav.js";
import Products from "./components/Products/Products.js";
import Users from './components/Users/Users.js';
import Home from './components/Home/Home.js';
import Login from './components/Login/Login.js';
import Signin from "./components/Signin/Signin.js";
import Signup from "./components/Signup/Signup.js";
import {Route,Routes} from 'react-router-dom';
import PageNotFound from './components/Page-not found/PageNotFound.js';
import ProductDetails from "./components/Products/ProductDetails.js";
function App() {
  return (
    <div>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/login" element={<Login />}/>  */}
      <Route path="/profile" element={<Profile />}/>
      <Route path="/users" element={<Users />}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/productdetails/:id" element={<ProductDetails />}/>
      <Route path="*" element={<PageNotFound />}/>
      </Routes>
      </div>
  );
}
export default App;