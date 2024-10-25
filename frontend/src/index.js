import React from 'react';
import { render } from 'react-dom';
import Root from './Root'; // Root bileşenini içe aktarın
import './styles/global.css'; // Stil dosyanızı da içe aktarın

const appDiv = document.getElementById('main');
render(<Root />, appDiv);