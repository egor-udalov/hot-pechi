import React from 'react';

import Style from './Button.module.scss';

function Button({ children }) {
	return <button className={Style.button}>{children}</button>;
}

export default Button;
