import React, { useState } from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
const Navbar = () => {
  const[open,setOpen]=useState(false);
  const products=useSelector((state)=>state.cart.products)
  return (
   <div className='container-fluid' id='navbar'>
      <div id='wrapper'>
        <div id='left'>
         
          <div id='item '>
            <Link to='/products/2' id='link'>MEN</Link>
            
          </div>
          <div id='item'>
            <Link to='/products/1' id='link'>WOMEN</Link>
            
          </div>
          <div id='item'>
            <Link id='link' to='/products/3'>BULK</Link>
            
          </div>
        </div>
        <div id="center">
          <Link id='link'>DYWSHOP</Link>
        </div>
        <div id='right'>
          <div id='item'>
            <Link to='/' id='link'>Homepage</Link>
            
          </div>
          <div id='item'>
            <Link to='/about' id='link'>About</Link>
            
          </div>
          <div id='item'>
            <Link to='/contact' id='link'>Contact</Link>
            
          </div>
        <div className='icons'>

         
         <Link to='/favourite' id='fav'> <FavoriteBorderIcon /></Link>
        
          
          <div id='carticon' onClick={()=>setOpen(!open)}>
          <ShoppingCartIcon />
            <span id='quanity'>{products.length}</span>
          </div>
        </div>
      
        </div>



      </div>
{open && <Cart/>}
   </div>
  )
}

export default Navbar
