import React from 'react';
import SubscribeBtn from '../SubscribeBtn/SubscribeBtn';
import EmailBtn from '../EmailBtn/EmailBtn';
import logo from "./Pictures/logo.png";
import './styling.css';


const footerLogo = {
  name: "Logo",
  imageUrl: logo
}
class Footer extends React.PureComponent {
    render() {
      return(
        <div className="Wrapper10">
          <div className="companyreal"><img src={footerLogo.imageUrl} />Realco</div>
          <div className="phaboy">
              <p className="pages">Pages</p>
              <p className="home">Home</p>
              <p className="About">About</p>
              <p className="Blog">Blog</p>
              <p className="Agents">Agents</p>
              <p className="Contact">Contact</p>
              <p className="FAQs">FAQs</p>
              <p className="properitIES">Properties</p>
          </div>
          <div className="cmsprop">
              <p className="cms">CMS Pages</p>
              <p className="property">Property</p>
              <p className="Propertysingle">Property Single</p>
              <p className="catergories">Blog Categories</p>
              <p className="blogsingle">Blog Single</p>    
              <p className="agentsingle">Agent Single</p>
          </div>
          <div className="utilitypages">
              <p className="pagesutilize">Utility Pages</p>
              <p className="StyleGuide">Style Guide</p>
              <p className="Changelog">Changelog</p>
              <p className="Licenses">Licenses</p>
              <p className="F404">404</p>
              <p className="Password">Password</p>
              <p className="Search">Search</p>
          </div>
          <div className="subscribe">
              <p className="subs">Subscribe</p>
              <p className="join">Join our newsletter to stay up to date on features and <span>releases.</span></p>
              <div className="entemail">
                  <EmailBtn />
                  <SubscribeBtn/>
              </div>
              <p className="agree">By subscribing you agree to with our <span>Privacy Policy</span></p>
          </div>
      </div>
      )
    }
  }

  export default Footer;