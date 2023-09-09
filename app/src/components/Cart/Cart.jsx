import React, { useState } from 'react'
import './Cart.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux';
import { remove, resertCart } from '../../redux/cartReducer';

const Cart = () => {
  let price=0
   const products=useSelector(state=>state.cart.products)
   for(let i=0;i<products.length;i++){
    console.log(products[i])
      price=price+products[i].price*products[i].quantity;
   }
  const dispatch=useDispatch();
  return (
    <div className='cart' >
      <h1 className='tit1'>Products in your cart</h1>
      {products?.map(item=>
        <div className='stuff' key={item.id}>
        <img className='simg' src={'http://localhost:1337'+item.img} alt=''/>
        <div className='details'>
        <h1 className='tit2'>
            {item.title}
        </h1>
        <p className='descy'>
            {item.desc?.substring(0,100)}
        </p>
        </div>
        <div className='price1'>{item.quantity}x${item.price}</div>
        <DeleteOutlineIcon className='delete' onClick={()=>dispatch(remove(item.id))}/>
        </div>
      )}
      <div className='total'>
        <span>SUBTOTAL</span>
        <span>${price}</span>
      </div>
      <button className='check'>PROCEED TO CHECKOUT</button>
      <span className='reset' onClick={()=>dispatch(resertCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart
