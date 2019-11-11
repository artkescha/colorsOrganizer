import React from 'react';
import StarRating from './StarRaiting';

const Color = ({ title, color, rating=0, onRemove=f=>f,onRate=f=>f }) =>
    <section className="color">
        <h1>{title}</h1>
        <div
            style={{ backgroundColor: color }}>
        <button onClick={onRemove}>X</button>
        </div>
        <div>
            <StarRating starsSelected={rating}  onRate={onRate}/>
        </div>
    </section>

export default Color