import React, { useEffect, useState } from 'react'
import './List.css'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch';
const List = ({selectedSub,maxPrice,sort,id,minPrice}) => {
    
  const {data,loading,error}=useFetch(`/products?populate=*&[filters][categories][id]=${id}${selectedSub.map
    (item=>`&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&[filters][price][$gte]=${minPrice}&sort=price:${sort}`)

  return (
    <div className='list'>
    {loading ? 'loading':data?.map(item=>{
        return(<Card item={item} key={item.id}/>)
    })}
      
    </div>
  )
}

export default List
