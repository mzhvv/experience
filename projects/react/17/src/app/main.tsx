// projects/react/17/src/app/main.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { Providers } from './providers';
import { Router } from './router';

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <Router />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);
