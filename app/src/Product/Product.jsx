import React, { useEffect, useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Product.css'
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,addToFav,removeFav } from '../redux/cartReducer';
const Product = () => {
  const id=useParams().id;
  const[sletectedImg,setSelectedImg]=useState(0);
  const {data,loading,error}=useFetch(`/products/${id}?populate=*`)
  const[quantity,setQuantity]=useState(1);
  const images=['http://localhost:1337'+data?.attributes?.img?.data?.attributes?.url,'http://localhost:1337'+data?.attributes?.img2?.data?.attributes?.url]
  const ulu=useSelector(state=>state.cart.fav);
  const maksim=useSelector(state=>state.cart.products);

  const[check2,setCheck2]=useState(false);
  const[check4,setCheck4]=useState(false);
  const[er,setEr]=useState('none');
 
  let check=false;
  let check3=false;
 const erstyle={
  display:er,
 }
 

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
  const dispatch=useDispatch();
  console.log(check);
  console.log(ulu.length)
  return (
 <div className='product1'>
 {loading ? 'loading':
 <>
 <div className='left1'>
    <div className='simages'>
      <img src={'http://localhost:1337'+data?.attributes?.img?.data?.attributes?.url} alt='' onClick={e=>setSelectedImg(0)} id='nimg'/>
      <img src={'http://localhost:1337'+data?.attributes?.img2?.data?.attributes?.url} alt='' onClick={e=>setSelectedImg(1)} id='nimg'/>
    </div>
    <div className='smainImg'>
      <img src={images[sletectedImg]} alt="" id='nimg2'/>
    </div>
  </div>
  <div className='rigth1'>
    <h1>{data?.attributes?.title}</h1>
    <span id='cena'>{data?.attributes?.price}$</span>
    <p className='opis'>
     {data?.attributes?.desc}

    </p>
    <div className='ilosc'>
      <button className='cbtn' onClick={()=>setQuantity((prev)=>(prev===1 ? 1:prev-1))}>-</button>
{quantity}
<button className='cbtn' onClick={()=>{
  if(quantity+1>data.attributes.quantity){
    setQuantity(data.attributes.quantity)
  }else{
    setQuantity((prev)=>prev+1)
    }
  }
  }
  >+</button>
    </div>
    <button className='add' onClick={async ()=>{
       for(let i=0;i<maksim?.length;i++){
    if(maksim[i]?.id===data?.id&&maksim[i].quantity+quantity>data?.attributes.quantity){
     
     check3 =true
    }
  }
      if(check3===false){
      dispatch(addToCart({
      id:data?.id,
      title:data?.attributes?.title,
      desc:data?.attributes?.desc,
      img:data?.attributes?.img?.data?.attributes?.url,
      price:data?.attributes?.price,
      quantity
    }))}else{
        setEr('flex');
    }}}>
      <AddShoppingCartIcon/> ADD TO CART
    </button>
    <span className='er' style={erstyle}>You can't add more of this product. We don't have it in such a big quantity.</span>
    <div className='ilink'>
      <div className='helper'>
      {
        check2 ? 
      <FavoriteIcon onClick={()=>{
        dispatch(removeFav(data.id))
        check=false;
       
  }
        
      }/>
        :
        <FavoriteBorderIcon onClick={()=>dispatch(addToFav({
              id:data?.id,
              title:data?.attributes?.title,
              desc:data?.attributes?.desc,
              img:data?.attributes?.img?.data?.attributes?.url,
              price:data?.attributes?.price,
              img2:data?.attributes?.img2?.data?.attributes?.url,
        }))}/>
      }
        ADD TO FAVOURITE LIST
      </div>
      
    </div>
  </div>
 </>
 
 
 
 
 }
  
 </div>
  )
}

export default Product
