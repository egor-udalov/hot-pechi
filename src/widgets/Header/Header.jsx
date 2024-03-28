import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import Style from './Header.module.scss';
import PopupHoverContacts from '../../features/PopupHoverContacts/PopupHoverContacts';

import { ReactComponent as HeaderLogoIcon } from '../../app/svg-icons/header_logo.svg';

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

					{hasHorizontalScroll && (
						<button onClick={scrollLeft} className={Style.scrollButtonLeft}>
							<i class={Style.buttonArrow}></i>
						</button>
					)}
					<nav ref={divRef} onWheel={handleScroll} className={Style.nav}>
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

					<PopupHoverContacts />
				</div>
			</div>
		</header>
	);
}

export default Header;
