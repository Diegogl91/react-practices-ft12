import React from 'react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';

import App from './App';

render(<App />, document.querySelector("#root"));