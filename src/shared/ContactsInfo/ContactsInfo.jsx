import React from 'react';
import Style from './ContactsInfo.module.scss';

import Button from '../../shared/Button/Button';

import { ReactComponent as MapIcon } from '../../app/svg-icons/map_icon.svg';
import { ReactComponent as PhoneIcon } from '../../app/svg-icons/phone_icon.svg';
import { ReactComponent as MailIcon } from '../../app/svg-icons/mail_icon.svg';

import { ReactComponent as VkIcon } from '../../app/svg-icons/vk_icon.svg';
import { ReactComponent as TelegramIcon } from '../../app/svg-icons/telegram_icon.svg';
import { ReactComponent as ViberIcon } from '../../app/svg-icons/viber_icon.svg';
import { ReactComponent as WhatsAppIcon } from '../../app/svg-icons/whatsapp_icon.svg';

function ContactsInfo() {
	return (
		<div className={Style.contactsInfo}>
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
			<div className={Style.contactsInfo__button}>
				<Button>Консультация</Button>
			</div>
			<p className={Style.contactsInfo__linksDescription}>
				Пишите нам в мессенджере:
			</p>
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
	);
}

export default ContactsInfo;
