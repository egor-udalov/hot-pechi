import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './style/reset.css';
import './style/fonts.css';
import './style/vars.css';
import './style/base-styles.css';

import Header from '../widgets/Header/Header';
import Footer from '../widgets/Footer/Footer';

import Main from '../pages/Main';
import Catalog from '../pages/Catalog';
import HowToOrder from '../pages/HowToOrder';
import Contacts from '../pages/Contacts';
import AboutCompany from '../pages/AboutCompany';
import Portfolio from '../pages/Portfolio';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/catalog' element={<Catalog />} />
				<Route path='/how-to-order' element={<HowToOrder />} />
				<Route path='/contacts' element={<Contacts />} />
				<Route path='/about-company' element={<AboutCompany />} />
				<Route path='/portfolio' element={<Portfolio />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
