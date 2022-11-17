import React from 'react';
import './Homepage.css';
import Logo from '../../Assets/logo.png'


const Homepage = () => {
    return (
        <div className='background'>
            <img src={Logo} className='logo'/>
            <div className='title-container' >
                <div className='title'>WorkIt</div>
                <div className='sub-header'>Subheading Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat..  rhoncus sem lorem vitae mauris. Suspen</div>
                <button className='outlined-button'>Learn More</button>
            </div>
            
        </div>
    );
}

export default Homepage;