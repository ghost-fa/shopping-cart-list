import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/main.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
imoprt products from './products.json'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
