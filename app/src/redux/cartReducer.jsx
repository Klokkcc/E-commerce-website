import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products:[],
  fav:[]
  
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToFav:(state,action)=>{
      const item2=state.fav.find(item=>item.id===action.payload.id);
      if(!item2){
          state.fav.push(action.payload);
      }
    },
    removeFav:(state,action)=>{
      state.fav=state.fav.filter(item=>item.id!==action.payload)
    },
    addToCart: (state,action) => {
      const item = state.products.find(item=>item.id===action.payload.id);
      if(item){
        item.quantity+=action.payload.quantity;
      }else{
        state.products.push(action.payload);
      }
    },
    remove: (state,action) => {
      state.products=state.products.filter(item=>item.id!==action.payload)
    },
    resertCart: (state, action) => {
      state.products=[]
    },
    
  },
})


export const { addToCart,remove,resertCart,addToFav,removeFav } = cartSlice.actions

export default cartSlice.reducer