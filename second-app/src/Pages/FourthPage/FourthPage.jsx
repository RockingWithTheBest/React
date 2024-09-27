import React from 'react';
import FirstDescription from './FirstDescription/FirstDescription';
import FirstSearchPhoto from './FirstSearchPhoto/FirstSearchPhoto';
import Footer from './Footer/Footer';
import LivingRoomPhoto from './LivingRoomPhoto/LivingRoomPhoto';
import FamilyPriority from './FamilyPriority/FamilyPriority';
import Body from '../Body/Body';



const FourthPage = ()=>
   {
    return (
    <div>
      <div className="WrapperOneThird">
          <div className = "detail">
              <FirstDescription /> 
              <FirstSearchPhoto />
          </div>  
          <LivingRoomPhoto/>
      </div>
       <Body />
        <FamilyPriority /> 
        <Footer/>
    </div>
      
    )
}

export default FourthPage;
