import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.css'

const Categories = () => {
  return (
    <div className='categories'>
    <div className='col'>
        <div className='row'><img src='imgs/pexels-polina-tankilevitch-5585841.jpg' className='cimg'></img>
        <Link className='bnt' to='/products/4'>Sale</Link>
        </div>
        <div className='row'><img src='imgs/pexels-ketut-subiyanto-4126797.jpg' className='cimg'></img>
        <Link className='bnt' to='/products/2'>Women</Link>
        </div>
    </div>
    <div className='col'>
    <div className='row'><img src='imgs/pexels-athena-2043590.jpg' className='cimg'></img>
    <Link className='bnt' to='/products/3' >Bulk</Link>
    </div>

    </div>
    <div className='col col-l'>
        <div className='row'>
            <div className='col'>
                <div className='row'>
                    <img src='imgs/pexels-arianna-jadé-2896853.jpg' className='cimg'></img>
                    <Link className='bnt' to='/products/1'>Men</Link>
                </div>
                
            </div>
            <div className='col'>
                <div className='row'><img src='imgs/pexels-ron-lach-8411014.jpg' className='cimg'></img>
                <Link className='bnt' to='/products/5'>Shoes</Link>
                </div>
                
            </div>
        </div>
        <div className='row'>
        <img src='imgs/pexels-lumn-322207.jpg ' className='cimg'/>
        <Link className='bnt' to='/products/6'>Accesories</Link>
        </div>
    </div>
      
    </div>
  )
}

export default Categories
