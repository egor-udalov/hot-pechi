import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import Style from './Header.module.scss';
import PopupHoverContacts from '../../features/PopupHoverContacts/PopupHoverContacts';
import ContactsInfo from '../../shared/ContactsInfo/ContactsInfo';

import { ReactComponent as HeaderLogoIcon } from '../../app/svg-icons/header_logo.svg';
import { ReactComponent as PhoneIcon } from '../../app/svg-icons/phone_icon.svg';

function Header() {
	const divRef = useRef(null);

	const [hasHorizontalScroll, setHasHorizontalScroll] = useState(false);

	useEffect(() => {
		const checkScroll = () => {
			const nav = divRef.current;
			if (nav) {
				setHasHorizontalScroll(nav.scrollWidth > nav.clientWidth);
			}
		};

		checkScroll();
		window.addEventListener('resize', checkScroll);

		return () => window.removeEventListener('resize', checkScroll);
	}, []);

	const handleScroll = e => {
		const nav = divRef.current;
		if (nav) {
			nav.scrollLeft += e.deltaY;
		}
	};

	const scrollLeft = () => {
		divRef.current.scrollLeft -= 100;
	};
	const scrollRight = () => {
		divRef.current.scrollLeft += 100;
	};

	//

	const [isActiveNavBurgerMenu, setIsActiveNavBurgerMenu] = useState(false);
	const handleNavBurgerClick = () => {
		setIsActiveNavBurgerMenu(!isActiveNavBurgerMenu);
		setIsActiveContactsBurgerMenu(false);
	};

	const [isActiveContactsBurgerMenu, setIsActiveContactsBurgerMenu] =
		useState(false);
	const handleContactsBurgerClick = () => {
		setIsActiveContactsBurgerMenu(!isActiveContactsBurgerMenu);
		setIsActiveNavBurgerMenu(false);
	};

	useEffect(() => {
		const body = document.querySelector('body');
		if (body) {
			if (isActiveNavBurgerMenu || isActiveContactsBurgerMenu) {
				body.classList.add('lock');
			} else {
				body.classList.remove('lock');
			}
		}
	}, [isActiveNavBurgerMenu, isActiveContactsBurgerMenu]);

	return (
		<header
			className={`${Style.header} ${
				isActiveNavBurgerMenu || isActiveContactsBurgerMenu ? Style.active : ''
			}`}
		>
			<div className='content-container'>
				<div className={Style.flexWrapper}>
					<div
						className={`${Style.header__burgerNavMenu} ${
							isActiveNavBurgerMenu ? Style.active : ''
						}`}
						onClick={handleNavBurgerClick}
					>
						<span></span>
					</div>
					<NavLink to='/'>
						<div className={Style.logo}>
							<HeaderLogoIcon className={Style.logo__icon} />
							<p className={Style.logo__text}>
								Жар <span>Печи</span>
							</p>
						</div>
					</NavLink>
					{hasHorizontalScroll && (
						<button onClick={scrollLeft} className={Style.scrollButtonLeft}>
							<i class={Style.buttonArrow}></i>
						</button>
					)}
					<nav
						ref={divRef}
						onWheel={handleScroll}
						className={`${Style.header__nav} ${
							isActiveNavBurgerMenu ? Style.active : ''
						}`}
					>
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
					{hasHorizontalScroll && (
						<button onClick={scrollRight} className={Style.scrollButtonRight}>
							<i class={Style.buttonArrow}></i>
						</button>
					)}
					<div className={Style.header__popupHoverContacts}>
						<PopupHoverContacts />
					</div>
					<div
						className={`${Style.header__burgerContactsMenu} ${
							isActiveContactsBurgerMenu ? Style.active : ''
						}`}
						onClick={handleContactsBurgerClick}
					>
						<PhoneIcon />
					</div>
					<div
						className={`${Style.header__contacts} ${
							isActiveContactsBurgerMenu ? Style.active : ''
						}`}
					>
						<ContactsInfo />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
