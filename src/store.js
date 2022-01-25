import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import apiStateReducer from './features/APIState';

export default configureStore({
    reducer: {
        user: userReducer,
        apiState: apiStateReducer
    }
});