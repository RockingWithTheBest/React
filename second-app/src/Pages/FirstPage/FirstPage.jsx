import './FirstPage.css';
import productsData from '../../assets/products'
import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Fab from '@mui/material/Fab';


const FirstPage = () => {
    const [products, setProducts] = useState(productsData);
    const [newPrice,setNewPrice] = useState('');
    const [title ,setTitle] = useState('');
    const [descript,setDescription] = useState('');
    const [price,setPrice] = useState('');
  

    const editProducts =(index,priceName) =>{
        const updateProducts = products.map((product,i)=>{
           
            if(i===index){
                return {...product, price: priceName};
            }
            return product;
        });
        console.log('edit products', updateProducts);
        // edit products logic here, call backend or database to update the products.
        setProducts(updateProducts);
        console.log("index", index);
    }
    const deleteProducts = (index) =>{
        const filterDeletion = products.filter((_,i)=> i!==index);
        setProducts(filterDeletion);
        console.log('delete products', filterDeletion);
    };

    const handleEdit = (index) =>{
        editProducts(index, newPrice);
        setNewPrice('');
    };

   
    const AddedOBject = () =>{
        const newProduct = {
            id: products.length + 1,
            image: 'https://via.placeholder.com/150',
            title:title,
            description:descript,
            price: price      
        }
        setProducts([...products, newProduct]);
        setDescription('');
        setPrice('');
        setTitle('');
        console.log('added products', products);
    };
    
    const ButtonDelete = styled.button`
    background-color: #blue;
    padding: 5px;
    font-size:18px;
    border-radius: 4px;
    &:hover{
    color: white;
    background-color: rgb(183 42 70);
    }`

    const ButtonEdit = styled.button`
    background-color: rgb(240, 255, 255) ;
    padding: 5px;
    font-size:18px;
    border-radius: 4px;
    &:hover{
    color: rgb(37 32 32);
    background-color: #3040ab;
    }`

    const ButtonAdd = styled.button`
    padding: 5px;
    font-size:18px;
    border-radius: 4px;
    &:hover{
    color: rgb(37 32 32);
    background-color: rgb(127, 255, 0);
    }`





    return (    
            <div>
             <div className = "products">
                {products.map((product,index) => {
                    return (
                        <div className="product" key={product.id}>
                            <img src={product.image} alt=""/>
                            <p className  = "title">{product.title}</p>
                            <p className  = "description">${product.description}</p>
                            <p className = "price">
                                <span>Price: ${product.price}</span>
                                <span>&euro;</span>
                            </p>
                            <p className = "cart">Add to Cart <i className = "bx bx-cart-alt"></i></p>
                            <ButtonDelete className="btn" onClick = {()=>deleteProducts(index)}>
                                Delet Product
                            </ButtonDelete>
                            <Popup trigger = {<ButtonEdit className="modal" onClick = {()=> editProducts(index)}>Edit Modul</ButtonEdit>} modal nested>
                                {
                                    close =>(
                                        <div className="modal">
                                                <img src={products[index].image} alt=""/>
                                                <p className  = "title">{products[index].title}</p>
                                                <p className  = "description">${products[index].description}</p>
                                                <p className = "price">
                                                    <span>Price: ${products[index].price}</span>
                                                    <span>&euro;</span>
                                                </p>
                                                <TextField id="standard-basic" label="New Price" variant="standard"  type="number" value={newPrice}   onChange={(e)=>{setNewPrice(e.target.value)}} />
                                                <div>
                                                    <ButtonDelete className="btn" onClick = {()=>handleEdit(index)}>
                                                        Edit Products
                                                    </ButtonDelete>
                                                    <ButtonDelete onClick = {() => close()}>Modal</ButtonDelete>
                                                </div>
                                                
                                        </div>
                                    )
                                }
                            </Popup>
                            
                        </div>
           
                    )   
                })}
            </div>
            <div className="productAdded">
                <Popup trigger=
                    {<Fab variant="extended"> Add New Product </Fab>} modal nested>
                        {
                        close=>(
                            <div className="modal">
                                <div className="content">
                                <InputLabel id="demo-simple-select-label">Title</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={title}  
                                    label="Title"
                                    onChange={(e)=>{setTitle(e.target.value)}}
                                 
                                    >
                                    <MenuItem value={"LongAcres"}>LongAcres</MenuItem>
                                    <MenuItem value={"MeanHood"}>MeanHood</MenuItem>
                                    <MenuItem value={"Avondale"}>Avondale</MenuItem>
                                </Select>
                               
                                <TextField id="standard-basic" label="Description" variant="outlined" value ={descript}    onChange={(e)=>{setDescription(e.target.value)}} />
                                <TextField id="standard-basic" label="Price" variant="outlined"  type="number" value = {price}      onChange={(e)=>{setPrice(e.target.value)}}/>
                                {/* <label htmlFor="">Price</label><input type="number"       value = {price}      onChange={(e)=>{setPrice(e.target.value)}}/> */}
                                </div>
                                <div>
                                    <button className="add" onClick = {()=>AddedOBject()}>
                                        Add Product</button>
                                    <button onClick = {()=>close()}>close modal</button>
                                </div>
                            </div>
                        )
                    }
                    </Popup>
                
            </div>
        </div>  
            
    )
};

export default FirstPage;