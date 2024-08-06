import ReactDOM from 'react-dom';
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Profile from './components/profile/profile';
import Users from './components/Users/Users.js';
import Products from './components/Products/Products.js';
import Signin from './components/Signin/Signin.js';
import Home from './components/Home/Home.js';
import PageNotFound from './components/Page-not found/PageNotFound.js';

import { BrowserRouter,Routes,Route, Router } from 'react-router-dom';

// import { BrowserRouter } from 'react-router-dom';

// ReactDOM {
//     <Router>
//         <App/>
//     </Router>
// }
// document.getElementById(Route);

import App from './App';
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById("root"));