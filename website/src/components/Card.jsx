import React from 'react';
import './components.css';
import profilePic from '../assets/pfpPic.jpg';

function Card({ title, role, imgSrc, description }) {
    return (
        <div className="card-container">
            <div className="card-image">
                <img src={imgSrc || profilePic} alt={title} />
            </div>
            <div className="card-info">
                <h2>{title}</h2>
                <p>{role}</p>
                <p className="desc">{description}</p>
            </div>
        </div>
    );
}

export default Card;
