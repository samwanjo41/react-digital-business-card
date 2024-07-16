import React from 'react'
import carrera from './carrera.jpg';
import pixlr2 from './pixlr2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontAwesomeConfig';

export default function Info(){
    return (
        <div className='info'>
            <img src={pixlr2} alt="missing" className="img-photo"/>
            <h3>Laura Smith</h3>
            <h5>Frontend Developer</h5>
            <h6>laurasmith.website</h6>
            <button className='btn-email'><FontAwesomeIcon icon={['fas', 'envelope']} className='font-aws'/>Email</button>
        </div>
    );
}