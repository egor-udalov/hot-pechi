import React from 'react';
import Style from './PopupHoverContacts.module.scss';
import ContactsInfo from '../../shared/ContactsInfo/ContactsInfo';


function PopupHoverContacts() {
	const [popupHoverContacts, setPopupHoverContacts] = React.useState('');

	const renderPopupHoverContacts = () => {
		return (
			<div className={Style.popupHoverContacts}>
				<div className={Style.contacts}>
					<ContactsInfo />
				</div>
			</div>
		);
	};

	const handleLeave = () => {
		setPopupHoverContacts('');
	};

	const handleHover = () => {
		setPopupHoverContacts(renderPopupHoverContacts());
	};

	return (
		<div
			className={Style.popupHoverContactsRelavance}
			onMouseOver={handleHover}
			onMouseLeave={handleLeave}
		>
			<a href='tel:79358022112' className={Style.tel}>
				+7 935 802-21-12
			</a>
			{popupHoverContacts}
		</div>
	);
}

export default PopupHoverContacts;
