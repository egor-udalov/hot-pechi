import React from 'react';
import { NavLink } from 'react-router-dom';

import Style from './Header.module.scss';
import PopupHoverContacts from '../../features/PopupHoverContacts/PopupHoverContacts';

import { ReactComponent as HeaderLogoIcon } from '../../app/svg-icons/header_logo.svg';

function Header() {
	return (
		<header className={Style.header}>
			<div className='content-container'>
				<div className={Style.flexWrapper}>
					<NavLink to='/'>
						<div className={Style.logo}>
							<HeaderLogoIcon className={Style.logo__icon} />
							<p className={Style.logo__text}>
								Жар <span>Печи</span>
							</p>
						</div>
					</NavLink>

					<nav className={Style.nav}>
						<ul>
							<li>
								<NavLink to='/catalog' className={Style.pageLink}>
									Каталог
								</NavLink>
							</li>
							<li>
								<NavLink to='/how-to-order' className={Style.pageLink}>
									Как заказать
								</NavLink>
							</li>
							<li>
								<NavLink to='/contacts' className={Style.pageLink}>
									Контакты
								</NavLink>
							</li>
							<li>
								<NavLink to='/about-company' className={Style.pageLink}>
									О нас
								</NavLink>
							</li>
							<li>
								<NavLink to='/portfolio' className={Style.pageLink}>
									Портфолио
								</NavLink>
							</li>
						</ul>
					</nav>
					<PopupHoverContacts />
				</div>
			</div>
		</header>
	);
}

export default Header;
