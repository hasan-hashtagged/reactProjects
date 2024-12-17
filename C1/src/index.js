import { CreateRoot } from 'react-dom/client';

import App from './app.js';
import './style.css';

const root = CreateRoot(document.getElementById('root'));
root.render(<App />);