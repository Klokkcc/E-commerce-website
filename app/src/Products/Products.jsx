import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../components/List/List'
import useFetch from '../hooks/useFetch'
import './Products.css'
import { TwoThumbInputRange } from "react-two-thumb-input-range"
import Slider from 'react-slider';
import ReactSlider from 'react-slider'
import CheckIcon from '@mui/icons-material/Check';
const Products = () => {
  const param=useParams()

  const id=parseInt(param.id)
  const[maxPrice,setMaxPrice]=useState(1000);
  const[maxPrice2,setMaxPrice2]=useState(1000);
  const[minPrice,setMinPrice]=useState(0);
  const[sort,setSort]=useState('asc'); 
  const[selectedSub,setSelectedSub]=useState([]);
  const {data,loading,error}=useFetch(`/sub-categories?[filters][categories][id][$eq]=${id}`)
  
  const change=(e)=>{
    const value=e.target.value;
    const checked=e.target.checked;
    setSelectedSub(checked 
      ? [...selectedSub,value]
      : selectedSub.filter((item)=>item!==value)

    )
  }
  const[style2,setStyle2]=useState({ width:'200px',})
 
    
  const [value, setValue] = useState([0, 10000])

  React.useEffect(()=>{
    if(window.innerWidth<600){
        
      setStyle2({width:'75px'})
   
  
   
 }
 else{
   setStyle2({width:'200px'})

}
    function handleResize() {
      if(window.innerWidth<600){
        
          setStyle2({width:'75px'})
       
     
       
     }
     else{
       setStyle2({width:'200px'})
    
}

    
    
   }
   window.addEventListener('resize', handleResize)
  },[])
  
 
 

  const onValueChange = (values) => {
    setValue(values)
  }
 const labelStyle={
  backgroundColor: "black",
 }
 
  
  return (
    <div className='products'>
    <div className='left'>
    <div className='filterItem'>

     <h2>Product Categories</h2>
     {data?.map(item=>(

      <div className='inputItem'>
        <input className='checkb' type='checkbox' id={item.id} value={item.id} onChange={change}/>
        <label className='chdesc' htmlFor={item.id}>{item.attributes.title}</label>
      </div>

     ))}
      
  

    </div>
    <div className='filterItem'>

      <h2>Filter by price</h2>
    
      <div className='inputItem1'>
        <div className='range'>


        <TwoThumbInputRange onChange={onValueChange} values={value} min={0} max={10000} 
          thumbColor="rgba(0,0,0,1)"
          trackColor="rgba(0,0,0,1)"
          railColor="rgba(255,255,255,1)"
          labelStyle={labelStyle}
          id='slider'
          inputStyle={style2}
        />
   
        </div>
        <div className='settings'>

        </div>
  

       
        <CheckIcon id='pricebnt' onClick={(e)=>{
        setMaxPrice2(value[1])
        setMinPrice(value[0])
        }}/>
      </div>
    </div>
    <div className='filterItem'>
      <h2>Sort by</h2>
      <div className='inputItem'>
        <input type="radio" id='acs' value='asc' name="price" onChange={e=>setSort("asc")}/>
        <label htmlFor='asc' className='sortdesc'>Price (Lowest first)</label>
      </div>
      <div className='inputItem'>
        <input type="radio" id='desc' value='desc' name="price" onChange={e=>setSort("desc")}/>
        <label htmlFor='desc' className='sortdesc'>Price (Highest first)</label>
      </div>
    </div>
   
    </div>
    <div className='right'>
      <List id={id} minPrice={minPrice} maxPrice={maxPrice2} sort={sort} selectedSub={selectedSub}/>
    </div>
  </div>
  )
}

export default Products
