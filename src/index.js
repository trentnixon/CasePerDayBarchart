import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

import { Provider } from "react-redux";
import store from "./store/store";


//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><div id="Glabs"><App /></div></Provider>, document.getElementById('root'));
//registerServiceWorker();
