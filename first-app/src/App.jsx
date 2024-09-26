import React from 'react';
import FirstDescription from './components/FirstDescription/FirstDescription';
import FirstSearchPhoto from './components/FirstSearchPhoto/FirstSearchPhoto';
import Footer from './components/Footer/Footer';
import LivingRoomPhoto from './components/LivingRoomPhoto/LivingRoomPhoto';
import FamilyPriority from './components/FamilyPriority/FamilyPriority';

export default class App extends React.Component {
  render() {
    return (
    <div>
      <div className="WrapperOneThird">
          <div className = "detail">
              {/* <h1>{this.props.type} Component</h1> */}
              <FirstDescription /> 
              <FirstSearchPhoto />
          </div>  
          <LivingRoomPhoto/>
      </div>
      <FamilyPriority /> 
      <Footer/>
    </div>
      
    )
  }
}
