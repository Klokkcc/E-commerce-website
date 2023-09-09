import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Card.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToFav, removeFav } from '../../redux/cartReducer';

const Card = ({item,item2}) => {

const dispatch=useDispatch()
let check=false;
  let src1;
  let src2;
  let price;
  let title;
  let id;
  let img1;
  let img2;
 
  const[check2,setCheck2]=useState(false)
  if(item2){
    src1='http://localhost:1337'+item2.img;
    price=item2.price;
    title=item2.title
    id=item2.id;
    src2='http://localhost:1337'+item2.img2;
    img1=item2.img1;
    img2=item2.img2;
  }else{
     src1='http://localhost:1337'+item.attributes.img.data.attributes.url;
    src2='http://localhost:1337'+item.attributes.img2.data.attributes.url;
     price=item.attributes.price;
     title=item.attributes.title;
     id=item.id;
     img1=item.attributes.img.data.attributes.url;
     img2=item.attributes.img2.data.attributes.url;
  }
  const ulu=useSelector(state=>state.cart.fav);
  for(let i=0;i<ulu.length;i++){
    if(ulu[i].id==id){
      check=true;
    }
  }
  useEffect(()=>{
    if(check===true){
      setCheck2(true);
    }else{
      setCheck2(false);
    }
  },[check])
  for(let i=0;i<ulu.length;i++){
    if(ulu[i].id==id){
      check=true;
    }
  }
  return (
    <div  id='linkcard'>
        <div className='card'>
            <Link to={`/product/${id}`} className='image'>
                <img src={src1} alt='' className='mainImg' onMouseMove={(e)=>e.target.src=src2} onMouseLeave={(e)=>e.target.src=src1}/>
                
            </Link>
            <h2>{title}</h2>
            <div className='prices'>
                <span>${price}</span>
                {
        check2 ? 
      <FavoriteIcon id='favicon1' onClick={()=>{
        dispatch(removeFav(id))
        check=false;
       
  }
        
      }/>
   :<FavoriteBorderIcon id='favicon1' onClick={()=>dispatch(addToFav({
              id:id,
              title:title,
              
              img:img1,
              price:price,
              img2:img2,
        }))}/>

   
      }
            </div>
            
        </div>
    
    </div>
  )
}

export default Card
