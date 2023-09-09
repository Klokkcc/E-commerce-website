import { createSlice } from "@reduxjs/toolkit";
const initialState2={
    Fav:[],
  }
export const favtSlice = createSlice({
    name: 'favourite',
    initialState2,
    reducers: {
      addToFav: (state,action) => {
        const item = state.products.find(item=>item.id===action.payload.id);
        if(item){
          item.quantity+=action.payload.quantity;
        }else{
          state.Fav.push(action.payload);
        }
      },
      delete1:(state,action)=>{
        state.products=state.products.filter(item=>item.id!==action.payload)
      },
    },
  })
  export const { addToFav,delete1}= favtSlice.actions;
export default  favtSlice.reducer