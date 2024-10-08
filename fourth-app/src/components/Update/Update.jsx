import React from 'react';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import {useSelector} from react-redux;
import {updateProduct} from '../../reducer/reducer';
import { useDispatch, useSelector } from'react-redux';
import { useNavigate } from 'react-router-dom';


const Update = ()=>{
    const {id} = useParams();
    const users = useSelector((state)=>state.users);
    const existingUsers = users.filter(f=>f.id == id);
    const {description,code, category,brand, Remainder } = existingUsers[0];
    const [udescription, setDescription] = useState(description);
    const [ucode, setCode] = useState(code);
    const [ucatergory, setCatergory] = useState(category);
    const [ubrand, setBrand] = useState(brand);
    const [uremainder, setRemainder] = useState(Remainder);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct(
            {id : id, 
            description:udescription,
            code:ucode ,
            category:ucatergory , 
            brand : ubrand,
            Remainder : uremainder
        }));
        navigate('/');  
    }
    return(
        <div className =  'd-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className="w-50 border bg-secondary text-white p-5">
                 <form onSubmit= {handleSubmit}>
                <h1>Create a new post</h1>
                    <div>
                        <TextField id="filled-multiline-flexible"  
                        label="Description"  multiline maxRows={4} 
                        variant="filled" type="text" name="description" 
                        className="form-control"  
                        value ={udescription} onChange={e=>setDescription(e.target.value)}/>
                    </div>
                    <div>
                        <TextField htmlFor="name" 
                        id="filled-multiline-flexible"  label="Code"  
                        multiline maxRows={4} variant="filled" 
                        type="text" name="code" className="form-control" 
                        value={ucode} onChange = {e=> setCode(e.target.value)}/>
                    </div>
                    <div>
                        <TextField htmlFor="name" id="filled-multiline-flexible"  
                        label="Catergory"  multiline maxRows={4} variant="filled"
                        type="text" name="catergory" className="form-control" 
                       value={ucatergory} onChange = {e=>setCatergory(e.target.value)}/>
                    </div>
                    <div>
                        <TextField htmlFor="name" id="filled-multiline-flexible"  
                        label="Brand"  multiline maxRows={4} variant="filled" 
                        type="text" name="brand" className="form-control" 
                     value={ubrand} onChange = {e=>setBrand(e.target.value)}/>
                    </div>
                    <div>
                        <TextField htmlFor="name" id="filled-multiline-flexible"  
                        label="Remainder"  multiline maxRows={4} variant="filled" 
                        type="text" name="remainder" className="form-control" 
                        value = {uremainder} onChange={e=>setRemainder(e.target.value)}/>
                    </div>
                    <button>Submit</button>
               

                </form>
        
             </div>
        </div>
    );
};

export default Update;