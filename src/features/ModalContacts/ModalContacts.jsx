import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import Style from './ModalContacts.module.scss';
import Button from '../../shared/Button/Button';

const ModalContacts = ({ buttonText }) => {
	const [showModal, setShowModal] = useState(false);

	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<div className={Style.ModalContacts}>
			<button className={Style.button} onClick={openModal}>
				{buttonText}
			</button>
			{showModal && (
				<Modal
					onClose={closeModal}
					overlayClassName={Style.overlay}
					modalClassName={Style.modal}
					closeButtonClassName={Style.closeButton}
				>
					<h6 className={Style.modal__title}>
						Консультируем и подбираем оборудование
					</h6>
					<div className={Style.modal__wrapperDescription}>
						<img src='images/consultant.png' className={Style.modal__img} />
						<p className={Style.modal__description}>
							Наш специалист по товару задаст вам несколько вопросов и предложит
							подходящие варианты.
						</p>
					</div>
					<FormWithValidation />
				</Modal>
			)}
		</div>
	);
};

const Modal = ({
	children,
	onClose,
	overlayClassName,
	modalClassName,
	closeButtonClassName,
}) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = null;
		};
	}, []);

	const handleModalClick = e => {
		e.stopPropagation();
	};

	const handleClose = () => {
		onClose();
	};

	return ReactDOM.createPortal(
		<div className={overlayClassName} onClick={handleClose}>
			<div className={modalClassName} onClick={handleModalClick}>
				<button className={closeButtonClassName} onClick={handleClose} />
				{children}
			</div>
		</div>,
		document.getElementById('modal-root')
	);
};

const FormWithValidation = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		console.log(data); // Действие при подтверждении формы, например, отправка на сервер
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={Style.form}>
			<div className={Style.inputField}>
				<label>Имя:</label>
				<input
					placeholder='Введите имя'
					{...register('name', { required: 'Введите ваше имя' })}
				/>
				{errors.name && <p className={Style.error}>{errors.name.message}</p>}
			</div>

			<div className={Style.inputField}>
				<label>Телефон:</label>
				<input
					placeholder='Номер телефона'
					{...register('phone', {
						required: 'Введите ваш телефон',
						pattern: {
							value: /^[0-9\b]+$/,
							message: 'Номер телефона может содержать только цифры',
						},
					})}
				/>
				{errors.phone && <p className={Style.error}>{errors.phone.message}</p>}
			</div>

			<Button type='submit'>Отправить</Button>
		</form>
	);
};

export default ModalContacts;
