

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"
import Product from './Product/Product';
import Home from './Home/Home';
import Products from './Products/Products';
import Footer from './components/Fotter/Footer'
import Navbar from './components/Navbar/Navbar'
import './app.css'
import About from "./components/About/About";
import Contacting from "./components/Contacting/Contacting";
import Fav from "./components/Fav/Fav";
const Layout=()=>{
  return (
    <div className='app'>

    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}
const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/product/:id",
        element:<Product/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
      {
        path:"/",
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contacting/>
      },
      {
          path:'/favourite',
          element:<Fav/>
      }
    ]
  },


])

function App() {
  
  return (
    <div >
  <RouterProvider router={router}/>
    </div>
  );
}

export default App;
