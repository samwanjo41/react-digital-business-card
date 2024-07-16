import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import the configuration to ensure the icons are available
import '../fontAwesomeConfig';


export default function Footer(){
    return (
        <footer class="footer">
        <div class="social-icons">
            <a href="#"><FontAwesomeIcon icon="fa-brands fa-facebook-square" /></a>
            <a href="#"><FontAwesomeIcon icon="fa-brands fa-instagram-square" /></a>
            <a href="#"><FontAwesomeIcon icon="fa-brands fa-twitter-square" /></a>
            <a href="#"><FontAwesomeIcon icon="fa-brands fa-github-square" /></a>
  </div>
  </footer>
    );
}