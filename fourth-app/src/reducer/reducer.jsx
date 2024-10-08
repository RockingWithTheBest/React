import {createSlice} from '@reduxjs/toolkit'
import Ecomerce from "../assets/Ecomerce"

const useSlice = createSlice({
    name: 'users',
    initialState: Ecomerce,
    reducers: {
        addProduct: (state, action)=>{
            console.log(action);
            console.log(state);
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
        },
        deleteProduct: (state, action)=>{
            const {id } = action.payload;
            const productDelete = state.find(product =>product.id == id);
            if(productDelete){
                return state.filter(f => f.id !== id);
            }
        }
    }
})

export const {addProduct, updateProduct, deleteProduct} = useSlice.actions;
export  const UserReducer = useSlice.reducer;