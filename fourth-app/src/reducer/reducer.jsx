import {createSlice} from '@reduxjs/toolkit'
import Ecomerce from "../assets/Ecomerce"

const useSlice = createSlice({
    name: 'users',
    initialState: Ecomerce,
    reducers: {
        addProduct: (state, action)=>{
            state.push(action.payload)
        },
        updateProduct: (state, action)=>{
            const {id, description,code, category,brand, Remainder } = action.payload;
            const productUpdated = state.find(product =>product.id == id);
            if(productUpdated){
                productUpdated.description = description;
                productUpdated.code = code;
                productUpdated.category = category;
                productUpdated.brand = brand;
                productUpdated.Remainder = Remainder;
            }
        }
    }
})

export const {addProduct, updateProduct} = useSlice.actions;
export default useSlice.reducer;