import './App.css';
import React, { useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Laespumita from './Pages/Laespumita';
import FloatingWSP from './components/FloatingWSP';
import Ourbrand from './Pages/Ourbrand';
import { Toaster, toast } from 'sonner';
import { IoNotifications } from 'react-icons/io5';

function App() {
	useEffect(() => {
		if (window.localStorage.getItem('npopup') === null) {
			window.localStorage.setItem('npopup', true);
		}
		if (window.localStorage.getItem('npopup') === 'true') {
			setTimeout(() => {
				toast('Notification', {
					description: 'English version avalible.',
					icon: <IoNotifications />,
					onDismiss: t => window.localStorage.setItem('npopup', false),
					id: 'initialtoast',
					style: {
						textAlign: 'left',
						background: 'rgba(255, 255, 255, 0.5)',
						backdropFilter: 'blur(10px) saturate(200%)',
						WebkitBackdropFilter: 'blur(10px) saturate(200%)',
						MozBackdropFilter: 'blur(10px) saturate(200%)',
						MsBackdropFilter: 'blur(10px) saturate(200%)',
						KhtmlBackdropFilter: 'blur(10px) saturate(200%)',
						boxShadow: '0 10px 10px 0 rgb(0, 0, 0, 5%)',
						border: 'none',
					},
				});
			}, 3000);
		}
	}, []);

	const [isActive, setIsActive] = React.useState(false);
	const [isPhone, setIsPhone] = React.useState(false);
	const [shadowScroll, setShadowScroll] = React.useState(true);

	return (
		<div className='App'>
			<Router basename={process.env.PUBLIC_URL}>
				<Navbar
					setIsActive={setIsActive}
					isActive={isActive}
					isPhone={isPhone}
					setIsPhone={setIsPhone}
					shadowScroll={shadowScroll}
					setShadowScroll={setShadowScroll}
				/>
				<FloatingWSP />
				<Toaster
					closeButton
					richColors
					toastOptions={{ className: 'initial-toast' }}
					duration={7000}
				/>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/laespumita' element={<Laespumita />} />
					<Route path='/ourbrand' element={<Ourbrand />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
