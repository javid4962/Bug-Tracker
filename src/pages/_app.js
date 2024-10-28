// src/pages/_app.js
import { Provider } from 'react-redux';
import store from '../store'; // Adjust the path according to your project structure
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
