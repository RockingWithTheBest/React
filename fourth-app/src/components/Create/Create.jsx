import React from 'react';
import {addProduct} from '../../reducer/reducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import TextField from '@mui/material/TextField';



const Create =()=>{
    const [description, setDescription] = useState('');
    const [code, setCode] = useState('');
    const [catergory, setCatergory] = useState('');
    const [brand, setBrand] = useState('');
    const [remainder, setRemainder] = useState('');
    const users = useSelector((state)=> state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();  
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct({id : users[users.length-1].id+1 , description, code, catergory, brand, remainder}))
        navigate('/');  
    }

    return (
        <div className =  'd-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className="w-50 border bg-secondary text-white p-5">
            <form onSubmit={handleSubmit}>
                <h1>Create a new post</h1>
                    <div>
                        <TextField id="filled-multiline-flexible"  
                        label="Description"  multiline maxRows={4} 
                        variant="filled" type="text" name="description" 
                        className="form-control"  
                        onChange={(e)=>{setDescription(e.target.value)}}/>
                    </div>
                    <div>
                        <TextField htmlFor="name" 
                        id="filled-multiline-flexible"  label="Code"  
                        multiline maxRows={4} variant="filled" 
                        type="text" name="code" className="form-control" 
                        onChange={(e)=>{setCode(e.target.value)}}/>
                    </div>
                    <div>
                        <TextField htmlFor="name" id="filled-multiline-flexible"  
                        label="Catergory"  multiline maxRows={4} variant="filled"
                        type="text" name="catergory" className="form-control" 
                        onChange={(e)=>{setCatergory(e.target.value)}}/>
                    </div>
                    <div>
                        <TextField htmlFor="name" id="filled-multiline-flexible"  
                        label="Brand"  multiline maxRows={4} variant="filled" 
                        type="text" name="brand" className="form-control" 
                        onChange={(e)=>{setBrand(e.target.value)}}/>
                    </div>
                    <div>
                        <TextField htmlFor="name" id="filled-multiline-flexible"  
                        label="Remainder"  multiline maxRows={4} variant="filled" 
                        type="text" name="remainder" className="form-control" 
                        onChange={(e)=>{setRemainder(e.target.value)}}/>
                    </div>
                    <button>Submit</button>
               

                </form>
            </div>
         
        </div>
    );
};

export default Create;