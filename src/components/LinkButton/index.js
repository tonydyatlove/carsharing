import React from 'react';
import {Link} from 'react-router-dom';

import './style.scss';


export default function LinkButton({ linkTo, text }) {
    return (
        <Link className="link-button" to={linkTo}>{text}</Link>
	);
}