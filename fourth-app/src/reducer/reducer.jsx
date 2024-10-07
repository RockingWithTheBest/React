import {createSlice} from '@reduxjs/toolkit'
import Ecomerce from "../assets/Ecomerce"

const useSlice = createSlice({
    name: 'users',
    initialState: Ecomerce,
    reducers: {
        addProduct: (state, action)=>{
            state.push(action.payload)
        }
    }
})

export const {addProduct} = useSlice.actions;
export default useSlice.reducer;