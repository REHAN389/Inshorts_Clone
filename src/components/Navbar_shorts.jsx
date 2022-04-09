import React from 'react'
import './Navshorts.css';
import Hamburger_drawer from './Hamburger_drawer'

//prop always get inside the main function in curly braces.
const Navbar_shorts = ({ setcategory }) => {
    return (
        <div className='nav' id='navbar'>
        
            {/* hamburger drawer component with setcategory prop */}
            <div className='icon'><Hamburger_drawer setcategory={setcategory}></Hamburger_drawer></div>

            {/* inshorts navbar image  */}
            <a href="#"><img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="icon" style={{ cursor: 'pointer'}} className="inshortImg"/></a>
        </div>
    )
}
export default Navbar_shorts
