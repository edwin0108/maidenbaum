import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AOS  from 'aos';
import "../node_modules/aos/dist/aos.css"

AOS.init();



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
