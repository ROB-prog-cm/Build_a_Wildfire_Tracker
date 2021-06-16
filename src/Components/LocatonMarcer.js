import React from 'react';
import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const LocatonMarcer = ({lat, lng, onClick}) => {
    return (
        <div className='locMarker' onClick={onClick}>
            <Icon icon={locationIcon} className='locIcon'/>
        </div>
    );
};

export default LocatonMarcer;