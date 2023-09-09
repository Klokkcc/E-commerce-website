import React, { useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Slide.css';
const Slide = () => {
  const data=[
    "imgs/pexels-mart-production-7679863.jpg",
    'imgs/pexels-sam-lion-5709665.jpg',
    'imgs/pexels-the-th-179909.jpg'


  ]
  const[slide,setSlide]=useState(0);

  
  
  useEffect(()=>{
   document.getElementsByClassName('container1')[0].style.transform=`translateX(-${slide*100}vw)`;
  },[slide])
     setInterval(() => {
      if(slide===2){
        setSlide(0)
     }else{
        setSlide(slide+1)
      }
    }, 8000);
    
  

  return (
    <div className='container-fluid' id='slider'>
    <div className='container1' >
      <img src={data[0]} className='baner' alt=""/>
      <img src={data[1]} className='baner' alt=""/>
      <img src={data[2]} className='baner' alt=""/>

    </div>
     
    </div>
  )
}

export default Slide
