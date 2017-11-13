import React from 'react';

import Face from './face';
import { FaceTypes } from '../../consts';

const Cube = (props) => {
    const { size, colours } = props;
    const facesOrder = [FaceTypes.front, FaceTypes.back, FaceTypes.top, FaceTypes.bottom, FaceTypes.left, FaceTypes.right];
    const style = {
        transformStyle: 'preserve-3d',
        width: size,
        height: size,
        display: 'inline-block',
    };

    return (
        <div className="cube" style={style}>
            {
                facesOrder.map(type => <Face key={type} size={size} type={type} background={colours[type]}/>)
            }
        </div>
    );
};

export default Cube;