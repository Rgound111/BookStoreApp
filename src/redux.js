import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = 'AIzaSyBSLjyw-kVAv8Wefein6adhFI0bPXWQ6ZQ';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (input, { dispatch, getState }) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input}&key=${apiKey}`);
    // console.log(response.data.items);

    dispatch(storeData(response.data.items));
  } catch (error) {
    console.error('Error fetching books:', error);
  }
});

const counterState = {
  bookStore: [],
  cart: [],
  userInfo: ""
};

const ReduxSlice = createSlice({
  name: 'books',
  initialState: counterState,
  reducers: {
    storeData: (state, action) => {
      // console.log(action.payload);
      state.bookStore = action.payload;
      // console.log(state.bookStore)
    },
    addToCart: (state, action) => {
      console.log(state.cart)
      const item = state.cart.find((item) =>
        item.id === action.payload.id
      );

      if (item) {
        item.quantity += action.payload.quantity
      } else {
        state.cart.push(action.payload);
      }
    },
    removeItem : (state,action)=>{
      console.log(action)
      console.log(state)
      if (action.id === state.cart.id) {        
        const RemainingItem =  state.cart.filter((item)=>{
              return item.id !== action.payload
            })
          state.cart = RemainingItem
      }
    },

    incrementQuantity : (state,action)=>{
      const item = state.cart.find(
        (item) => item.id === action.payload.id
    )
    if (item) {
        item.quantity++;
    }
    },

    DecrementQuantity : (state,action)=>{
      const item = state.cart.find(
        (item) => item.id === action.payload.id
    )
    if (item.quantity ==1) {
      item.quantity = 1
    }else{

      item.quantity--;
    }
      console.log(item)
    } ,
    ResetCart : (state ,action)=>{
      // console.log(state.cart)
      state.cart = [];
    },

    addUser :(state,action)=>{
      console.log(action)
      state.userInfo =action.payload
    },
    removeUser :(state,action)=>{
      state.userInfo = null ;
    }
  },
});

export const { storeData, addToCart,removeItem ,incrementQuantity,DecrementQuantity,ResetCart,addUser ,removeUser } = ReduxSlice.actions;

const sliceReducer = ReduxSlice.reducer;

export const ReduxStore = configureStore({
  reducer: { books: sliceReducer },
});