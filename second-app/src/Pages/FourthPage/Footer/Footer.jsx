import React from 'react';
import './Footer2.css';
import './Footer.css';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


const Footer = () => {
  const [value, setValue] = React.useState(2);
  return (
    <div className="footer">
    <div className = "sb_footer section__padding">
      <div className="sb__footer-links">
        <div className="sb__footer-links-div">
          <h4>For Business</h4>
          <a href = "/employer">
            <p>Employer</p>
          </a>
          <a href = "/healthplan">
            <p>Health Plan</p>
          </a>
          <a href = "/individual">
            <p>Individual</p>
          </a>
        </div>
        <div className="sb__footer-links_div">
          <h4>Resources</h4>
          <a href = "/resources">
            <p>Resource center</p>
          </a>
          <a href = "/resources">
            <p>Testimonials</p>
          </a>
          <a href = "/resources">
            <p>STV</p>
          </a>
        </div>
        <div className="sb__footer-links_div">
          <h4>Patners</h4>
          <a href="/employee]r">
            <p>Swing Tech</p>
          </a>
        </div>
        <div className="sb__footer-links_div">
          <h4>Company</h4>
          <a href="/about">
            <p>About</p>
          </a>
          <a href="/press">
            <p>Press</p>
          </a>
          <a href="/career">
            <p>Career</p>
          </a>
          <a href="/contact">
            <p>Contact</p>
          </a>
        </div>
        <div className="sb__footer-links_div">
          <h4>Rate Us</h4>
          <div className="socialmedia">
          <Typography component="legend">Rating</Typography>
          <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
              setValue(newValue);
          }}
        />
          </div>
        </div>
      </div>


    <hr></hr>
    <div className="sb__footer-below">
      <div className="sb__footer-copyright">
        <p>
          @{new Date().getFullYear()}CodeInn. All rights reserved.
        </p>
      </div>
      <div className="sb__footer-below-links">
        <a href="/terms"><div><p >Terms & Conditions apply.</p></div></a>
        <a href="/privacy"><div><p >Privacy.</p></div></a>
        <a href="/secuirty"><div><p >Security.</p></div></a>
        <a href="/cookie"><div><p >Cookies Declaration.</p></div></a>
      </div>
    </div>
    </div>
  </div>
  )
};
 
 



export default Footer;