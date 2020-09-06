import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UploadImage from './components/UploadImage';
// import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <UploadImage />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
