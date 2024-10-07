import {configureStore} from '@reduxjs/toolkit'
import UserReducer from '../reducer/reducer.jsx';

const store = configureStore({
    reducer: {
        users: UserReducer
    }
});
export default store;
