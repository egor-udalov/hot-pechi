import React from 'react';
import Style from './PopupHoverContacts.module.scss';
import Button from '../../shared/Button/Button';

import { ReactComponent as MapIcon } from '../../app/svg-icons/map_icon.svg';
import { ReactComponent as PhoneIcon } from '../../app/svg-icons/phone_icon.svg';
import { ReactComponent as MailIcon } from '../../app/svg-icons/mail_icon.svg';

import { ReactComponent as VkIcon } from '../../app/svg-icons/vk_icon.svg';
import { ReactComponent as TelegramIcon } from '../../app/svg-icons/telegram_icon.svg';
import { ReactComponent as ViberIcon } from '../../app/svg-icons/viber_icon.svg';
import { ReactComponent as WhatsAppIcon } from '../../app/svg-icons/whatsapp_icon.svg';

function PopupHoverContacts() {
	const [popupHoverContacts, setPopupHoverContacts] = React.useState('');

	const renderPopupHoverContacts = () => {
		return (
			<div className={Style.popupHoverContacts}>
				<div className={Style.contacts}>
					<div className={Style.contactsRow}>
						<div className={Style.contactsRow__icon}>
							<MapIcon />
						</div>
						<div className={Style.contactsRow__wrapperContent}>
							<p className={Style.contactsRow__name}>Адрес магазина</p>
							<a href='#' className={Style.contactsRow__text}>
								г. Нижний Новгород
							</a>
						</div>
					</div>
					<div className={Style.contactsRow}>
						<div className={Style.contactsRow__icon}>
							<PhoneIcon />
						</div>
						<div className={Style.contactsRow__wrapperContent}>
							<p className={Style.contactsRow__name}>Телефон</p>
							<a href='tel:79358022112' className={Style.contactsRow__text}>
								+7 935 802-21-12
							</a>
						</div>
					</div>
					<div className={Style.contactsRow}>
						<div className={Style.contactsRow__icon}>
							<MailIcon />
						</div>
						<div className={Style.contactsRow__wrapperContent}>
							<p className={Style.contactsRow__name}>E-mail</p>
							<a
								href='mailto:zhar_pechi@yandex.ru'
								className={Style.contactsRow__text}
							>
								zhar_pechi@yandex.ru
							</a>
						</div>
					</div>
					<div className={Style.contacts__button}>
						<Button text={'Консультация'} />
					</div>
					<div className={Style.socialLinks}>
						<a href='#' className={Style.link}>
							<VkIcon />
						</a>
						<a href='#' className={Style.link}>
							<TelegramIcon />
						</a>
						<a href='#' className={Style.link}>
							<ViberIcon />
						</a>
						<a href='#' className={Style.link}>
							<WhatsAppIcon />
						</a>
					</div>
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
