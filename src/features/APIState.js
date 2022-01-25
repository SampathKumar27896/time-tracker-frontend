import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: "idle",
    message: "",
}

const APIStateSlice = createSlice({
    name: "apiState",
    initialState,
    reducers: {
      resetState: state => {
        state.status = "idle";
        state.message = "";
      },
      setLoadingState: state => {
          state.status = "loading";
          state.message = "";
      },
      setSuccessState: (state, action) => {
          state.status = "success";
          state.message = action.payload;
      },
      setFailedState: (state, action) => {
          state.status = "failed";
          state.message = action.payload;
      }
    },
})
export const getState = state => { 
  return {
   ...state.apiState
  }
}
export const { resetState, setLoadingState, setSuccessState, setFailedState } = APIStateSlice.actions;
export default APIStateSlice.reducer;


