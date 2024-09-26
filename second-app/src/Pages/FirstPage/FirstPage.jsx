import './FirstPage.css';
import productsData from '../../assets/products'
import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

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
                            <button className="btn" onClick = {()=>deleteProducts(index)}>
                                Delet Product
                            </button>
                            <Popup trigger = {<button className="modal" onClick = {()=> editProducts(index)}>Edit Modul</button>} modal nested>
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
                                               <label htmlFor="">New Price</label><input type="number" className = "NewPrice" value = {newPrice} onChange={(e)=>{setNewPrice(e.target.value)}}/>
                                                <div>
                                                    <button className="btn" onClick = {()=>handleEdit(index)}>
                                                        Edit Products
                                                    </button>
                                                    <button onClick = {() => close()}>Modal</button>
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
                    {<button >Add New Product</button>} modal nested>{
                        close=>(
                            <div className="modal">
                                <div className="content">
                                <label htmlFor="">Title</label><input type="text"       value={title}        onChange={(e)=>{setTitle(e.target.value)}} />
                                <label htmlFor="">Description</label><input type="text" value ={descript}    onChange={(e)=>{setDescription(e.target.value)}}/>
                                <label htmlFor="">Price</label><input type="number"       value = {price}      onChange={(e)=>{setPrice(e.target.value)}}/>
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