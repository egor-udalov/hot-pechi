import React from 'react';
import Style from './Main.module.scss';

import ModalContacts from '../../features/ModalContacts/ModalContacts';

function Main() {
	return (
		<section className={Style.heroSection}>
			<picture>
				{/* avif */}
				<source
					media='(max-width: 375px)'
					type='image/avif'
					srcSet='images/hero_background_image_375.avif 375w'
				/>
				<source
					media='(min-width: 376px) and (max-width: 834px)'
					type='image/avif'
					srcSet='images/hero_background_image_834.avif 834w'
				/>
				<source
					media='(min-width: 835px) and (max-width: 1440px)'
					type='image/avif'
					srcSet='images/hero_background_image_1440.avif 1440w'
				/>
				<source
					type='image/avif'
					srcSet='images/hero_background_image_1440.avif'
				/>
				{/* webp */}
				<source
					media='(max-width: 375px)'
					type='image/webp'
					srcSet='images/hero_background_image_375.webp 375w'
				/>
				<source
					media='(min-width: 376px) and (max-width: 834px)'
					type='image/webp'
					srcSet='images/hero_background_image_834.webp 834w'
				/>
				<source
					media='(min-width: 835px) and (max-width: 1440px)'
					type='image/webp'
					srcSet='images/hero_background_image_1440.webp 1440w'
				/>
				<source
					type='image/webp'
					srcSet='images/hero_background_image_1440.webp'
				/>
				{/* png */}
				<source
					media='(max-width: 375px)'
					type='image/png'
					srcSet='images/hero_background_image_375.png 375w'
				/>
				<source
					media='(min-width: 376px) and (max-width: 834px)'
					type='image/png'
					srcSet='images/hero_background_image_834.png 834w'
				/>
				<source
					media='(min-width: 835px) and (max-width: 1440px)'
					type='image/png'
					srcSet='images/hero_background_image_1440.png 1440w'
				/>
				<source
					type='image/png'
					srcSet='images/hero_background_image_1440.png'
				/>
				{/* jpg */}
				<img
					src='images/hero_background_image_1440.jpg'
					alt=''
					className={Style.heroSection__BackgroundImage}
				/>
			</picture>
			<div className='content-container'>
				<div className={Style.heroSection__content}>
					<div className={Style.heroSection__wrapperText}>
						<h1 className={Style.heroSection__title}>
							Печи для бани 🔥 под ключ в Нижнем Новгороде
						</h1>
						<h2 className={Style.heroSection__subtitle}>
							Разрабатываем индивидуальные печи для бани точно под ваши
							требования.
						</h2>
					</div>
					<ModalContacts buttonText={'Получить консультацию'} />
				</div>
			</div>
		</section>
	);
}

export default Main;
