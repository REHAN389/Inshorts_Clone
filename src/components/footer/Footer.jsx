import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <span className='credit'>Inshorts clone made by - <b>Rehan Ahmad</b></span>
      <hr style={{ width: "90%" }} />
      <div className="iconcontainer">
        <a href="https://instagram.com/ahmad__sahab?utm_medium=copy_link" target="_blank" id="insta"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/rehan-ahmad-315825220" target="_blank" id="linkdin"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="http://rehan-ahmad.herokuapp.com/" target="_blank" id="site"><i class="fa-solid fa-link"></i></a>
      </div>
    </div>
  )
}

export default Footer
