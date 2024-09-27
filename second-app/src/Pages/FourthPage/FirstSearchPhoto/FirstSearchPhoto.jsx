import React from 'react';
import './styling.css';
import searchImage from "./Pictures/search.png";


const searchIcon = {
    name: "Seacrh",
    imageUrl: searchImage
  }
const FirstSearchPhoto =()=> {
      return (
        <div className="detailsW32">
                <div className="searchbar">
                  <img src = {searchIcon.imageUrl}/>
                  <span>Search</span>
                </div>
                <button className ="findproperty">Find property</button>
         </div>
      )
  }

  export default FirstSearchPhoto;

