import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import  Axios  from "axios";
import { IProduct } from "../../../Utils/Interfaces";
export const serchState = createAsyncThunk (
    'serch/serchState',
   async (searchTerm:string) => {
        const getBySearch = await Axios.get(`https://dummyjson.com/products/search?q=${searchTerm}`);
        const result = getBySearch.data
        return result.products
    
    }
);

interface SearchState {
    searchTerm: string;
    results: IProduct[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
  };

 const initialState:SearchState = {
    searchTerm : '' ,
    results : [] ,
    status : 'idle' ,
    error : null 
 };

 export const serchSlice = createSlice ({
    name : "Search" ,
    initialState ,
    reducers: {
        setSearchTerm: (state, action) => {
          state.searchTerm = action.payload;
        },
        clearSearch: (state) => {
          state.results = [];
          state.status = "idle";
          state.error = null;
        },
      },
    extraReducers : (builder) => {
        builder 
        .addCase(serchState.pending , (state) => {
            state.status = "loading";
        })
        .addCase(serchState.fulfilled , (state,action) => {
            state.status = 'succeeded';
            state.results = action.payload;
        })
        .addCase(serchState.rejected , (state,action) => {
            state.status = 'failed';
            state.error = action.error.message || 'somthing error'
        })
    },
 })

 export const {setSearchTerm,clearSearch } = serchSlice.actions;
 export default serchSlice.reducer;