import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Card/Card';
import './Fav.css'
const Fav = () => {
    const products=useSelector(state=>state.cart.fav);
    
  return (
    <div className='fav'>
      {products.map(item=>{
        return(<Card item2={item} key={item.id}/>)
      })

      }
    </div>
  )
}

export default Fav
