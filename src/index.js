import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'semantic-ui-css/semantic.min.css';
import './assets/css/style.css';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
