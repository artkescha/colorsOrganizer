import React from 'react';
import Color from './Color';

const CollorList = ({colors = [], onRate=f=>f, onRemove=f=>f}) =>
    <div className="color-list">
        {(colors.length === 0) ?
            <h2>No Colors Listed. (Add a Color)</h2> :
            colors.map(color =>
                <Color key={color.id} {...color}
                       onRate={(rating) => onRate(color.id, rating)}
                       onRemove={() => onRemove(color.id)}/>
            )
        }
    </div>

export default CollorList
