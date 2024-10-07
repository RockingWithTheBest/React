import React from 'react';
import {addProduct} from '../../reducer/reducer';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom'

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
        dispatch(addProduct({id : users[users.length-1].id+1 , description, code, catergory, brand, remainder}));
        navigate('/');
    }

    return (
        <div className =  'd-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className="w-50 border bg-secondary text-white p-5">
                <form onSubmit={handleSubmit}>
                <h1>Create a new post</h1>
                    <div>
                        <label htmlFor="name">Description:</label>
                        <input type="text" name="description" className="form-control"  onChange={(e)=>{setDescription(e.target.value)}}/>
                    </div>
                    <div>
                        <label htmlFor="name">Code:</label>
                        <input type="text" name="code" className="form-control" onChange={(e)=>{setCode(e.target.value)}}/>
                    </div>
                    <div>
                        <label htmlFor="name">Catergory:</label>
                        <input type="text" name="catergory" className="form-control" onChange={(e)=>{setCatergory(e.target.value)}}/>
                    </div>
                    <div>
                        <label htmlFor="name">Brand:</label>
                        <input type="text" name="brand" className="form-control" onChange={(e)=>{setBrand(e.target.value)}}/>
                    </div>
                    <div>
                        <label htmlFor="name">Remainder:</label>
                        <input type="text" name="remainder" className="form-control" onChange={(e)=>{setRemainder(e.target.value)}}/>
                    </div>
                    
                    <button className='btn btn-info'>Submit</button>
                </form>
            </div>
         
        </div>
    );
};

export default Create;