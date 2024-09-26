import React from 'react';
import restRoom from "./Pictures/family_restroom.png";
import GetStartedBtn from '../GetStartedBtn/GetStartedBtn';
import './styling.css';

const  FamilyRestRoom= {
    name : 'RestRoom',
    imageUrl: restRoom
  }
  
class FamilyPriority extends React.Component {
    render() {
      return(
        <div className ="Wrapper6">
        <div className="Wrapper7">
                  <div><img src={FamilyRestRoom.imageUrl} className = "family_restroom"/></div>
                  <div><p className="priority">Families are our priority</p></div>
                  <div><p className="Morbii">
                      <span className="MorbiiONE">The main priority of Realco is to provide the family with the best and most affordable conform it could pay </span>
                      <div><span className="MorbiiTWO">for we are not only a business to a company which proritizes family unity and form.</span></div>                          
                  </p></div>
                  <div><GetStartedBtn /></div>
        </div>
   </div>
      )
    }
  }

  export default FamilyPriority;