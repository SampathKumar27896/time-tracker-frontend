import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { client } from '../../client';
import URL from '../../config/api';
const initialState = {
    userName:"",
    email:"",
    authToken: "",
    status: "idle",
    message: "",
    isAuthenticated: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      resetStatus: state => {
        state.status = "idle";
        state.message = "";
      }
    },
    extraReducers(builder) {
        builder
          .addCase(registerUser.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(registerUser.fulfilled, (state, action) => {
            state.status = 'success'
            state.message = action.payload.message;
          })
          .addCase(registerUser.rejected, (state, action) => {
            state.status = 'failed'
            state.message = action.error.message;
          })
          .addCase(loginUser.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            console.log(action)
            state.status = 'success';
            state.userId = action.payload.userId;
            state.userName = action.payload.userName;
            state.email = action.payload.email;
            state.authToken = action.payload.token;
            state.message = action.payload.message;
            state.isAuthenticated = true;
        
          })
          .addCase(loginUser.rejected, (state, action) => {
            state.status = 'failed'
            state.message = action.error.message;
          })
    }
})

export const { resetStatus } = userSlice.actions;
export default userSlice.reducer;
export const getUserInfo = state => { 
  return {
    userName: state.userName, 
    email: state.email, 
    status: state.status, 
    message: state.message,
    isAuthenticated: state.isAuthenticated,
    authToken: state.authToken
  }
  };

export const registerUser = createAsyncThunk('user/register', async(payload) => {
    const response = await client.post(URL.REGISTER, payload);
    return response.data;
})
export const loginUser = createAsyncThunk('user/login', async(payload) => {
    const response = await client.post(URL.LOGIN, payload);
    return response.data;
})

export const saveUser = (user) => {
   try {
      const serializedData = JSON.stringify(user);
      localStorage.setItem('user', serializedData);
      return {status:true};
   }catch(error) {
      return {status:false, message: error.message};
   }
}

export const destroyUser = () => {
  try {
     localStorage.removeItem('user');
     return {status: true}
  }catch(error) {
    return {status: false, message: error.message};
  }
}

export const getUserFromStorage = () => {
  try {
    const user = localStorage.getItem('user');
    const parsedData = JSON.parse(user);
    return {status:true, data: parsedData};
    
  }catch(error) {
      return {status:false, message: error.message};
  }
}