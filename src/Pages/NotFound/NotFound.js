import React from 'react';
import notfound from '../../images/error/error.png';

const NotFound = () => {
    return (
        <div>
            <img className="h-100 w-100" src={notfound} alt="" />
        </div>
    );
};

export default NotFound;