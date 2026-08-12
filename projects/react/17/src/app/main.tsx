// projects/react/17/src/app/main.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { Providers } from './providers';

ReactDOM.render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>,
  document.getElementById('root')
);
