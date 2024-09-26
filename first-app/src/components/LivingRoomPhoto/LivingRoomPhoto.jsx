import React from 'react';
import './styling.css';
import livingRoom from "./Pictures/livingroom.png";

const  LivingRoom= {
    name : 'LivingRoom',
    imageUrl: livingRoom
  }

  const LivingRoomPhoto =()=>{
      return (
        <div className="livingroomphoto">
          <img src = {LivingRoom.imageUrl} />
      </div>
      )
  }
  export default LivingRoomPhoto;