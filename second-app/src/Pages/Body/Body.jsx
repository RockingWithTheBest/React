import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import neyo from './Photos/neyo.jpg';
import asaprocky from './Photos/asaprocky.jpg';
import takeoff from './Photos/takeoff.jpg';
import './Body.css';

const Body = ()=>{
    return (
        <div className = "Subject">
            <h1>Subject: Discover Your Dream Home Today!</h1>
            <h2>Dear Client,</h2>
            <p>Are you ready to embark on the journey to find your ideal home? 
                Whether you're a first-time buyer, looking to upgrade, or seeking an investment opportunity, 
                the real estate market offers a wealth of possibilities tailored to your needs.
            </p>
            <p>At RockinWithTheBest, we understand that buying or selling a property is a significant decision.
              Our dedicated team of real estate professionals is here to guide you every step of the way, providing
              personalized service and expert advice.</p>
            <h2>Why Choose Us?</h2>
            <div>
                <ul>
                    <li><p><span>Extensive Listings: </span>From cozy apartments to luxurious estates, we have a diverse range of properties to fit every budget and lifestyle.</p></li>
                    <li><p><span>Market Expertise: </span>Our knowledgeable agents stay updated on the latest market trends, ensuring you make informed decisions.</p></li>
                    <li><p><span>Personalized Service: </span>We prioritize your unique needs and work tirelessly to match you with the perfect property.</p></li>
                </ul>
            </div>
            <div className = "minimal">
                <div>
                    <h3>Our Minimal Conversations</h3>
                </div>
                <div>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={neyo} />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: 'text.primary', display: 'inline' }}
                        >
                            Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Travis Howard" src={takeoff}/>
                    </ListItemAvatar>
                    <ListItemText
                    primary="Summer BBQ"
                    secondary={
                        <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: 'text.primary', display: 'inline' }}
                        >
                            to Scott, Alex, Jennifer
                        </Typography>
                        {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src={asaprocky} />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: 'text.primary', display: 'inline' }}
                        >
                            Sandra Adams
                        </Typography>
                        {' — Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                </List>
                </div>
                
             
            </div>
            
        </div>
    )
}

export default Body;
