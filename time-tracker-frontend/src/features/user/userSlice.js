import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { client } from '../../client';
const initialState = {
    userName:"",
    email:"",
    authToken: "",
    status: "idle",
    message: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
          .addCase(registerUser.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(registerUser.fulfilled, (state, action) => {
            console.log(action)
            state.status = 'success'
            state.message = action.payload.message;
        
          })
          .addCase(registerUser.rejected, (state, action) => {
            state.status = 'failed'
            state.message = action.error.message;
          })
        }
})

export const { register } = userSlice.actions;
export default userSlice.reducer;
export const getUserInfo = state => { return {userName: state.userName, email: state.email, status: state.status, message: state.message}};
export const registerUser = createAsyncThunk('user/register', async(payload) => {
    const response = await client.post("http://localhost:3001/user/register", payload);
    return response.data;
    
})