import React from 'react';

import Style from './Button.module.scss';

function Button({ text }) {
	return <button className={Style.button}>{text}</button>;
}

export default Button;
