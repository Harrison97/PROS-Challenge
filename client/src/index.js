import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import serviceWorker from './serviceWorker';

//font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker();
