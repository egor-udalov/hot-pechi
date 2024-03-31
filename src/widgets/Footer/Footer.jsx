import React from 'react';
import { NavLink } from 'react-router-dom';
import Style from './Footer.module.scss';
import ContactsInfo from '../../shared/ContactsInfo/ContactsInfo';

function Footer() {
	return (
		<footer className={Style.footer}>
			<div className='content-container'>
				<div className={Style.footer__flexWrapper}>
					<div className={Style.footer__information}>
						<h3 className={Style.footer__logo}>
							Жар <span>Печи</span>
						</h3>
						<h5 className={Style.footer__description}>
							Продажа готовых отопительных печей
						</h5>
					</div>
					<div className={Style.footer__navigation}>
						<h6 className={Style.footer__columnTitle}>
							Постраничная навигация
						</h6>
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
					</div>
					<div className={Style.footer__contacts}>
						<h6 className={Style.footer__columnTitle}>Контакты</h6>
						<ContactsInfo />
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
