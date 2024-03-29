import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';

i18next.init({
	interpolation: { escapeValue: false },
	fallbackLng: 'es',
	lng: window.localStorage.getItem('lng'),
	resources: {
		es: {
			global: global_es,
		},
		en: {
			global: global_en,
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<I18nextProvider i18n={i18next}>
		<App />
	</I18nextProvider>,
);
