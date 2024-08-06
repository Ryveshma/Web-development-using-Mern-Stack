import React from 'react';
import "./Nav.css";
import {Link} from 'react-router-dom';
function Nav(){
    return (
        <div className='navbarcontainer'>
            <div className='title'>
                <h2>E-Kart</h2>
            </div>
            <div className='menus'>
                {/* <Link to='/'>Home</Link> */}
                {/* <Link to='/login'>Login</Link> */}
                <Link to='/profile'>Profile</Link>
                <Link to='/users'>Users</Link>
                <Link to='/products'>Products</Link> 
                <Link to='/cart'>Cart</Link>
                <Link to='/signin'>SignIn</Link>
                <Link to='/signup'>SignUp</Link>
                <button className='btn btn-outline-danger'>LogOut</button>
            </div>
        </div>
    );
}
export default Nav;