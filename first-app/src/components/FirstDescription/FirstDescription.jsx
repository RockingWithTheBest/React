import React from 'react';
import './styling.css';


class FirstDescription extends React.Component {
    render() {
      return (
        <div className = "detailsW31">
          <span className = "dreamplace">Find your dream place</span>               
          <span className="familyinminutes">Find house for your family in minutes</span>
          <p className="lorem">
              <span className ="loremP1">Find your place with an immersive photo experience and the most </span>
              <span className="loremP2">listings, including things you won’t find anywhere else.</span> 
          </p>
        </div>
      )
    }
  }

  export default FirstDescription;