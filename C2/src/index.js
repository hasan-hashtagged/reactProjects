import { createRoot } from "react-dom/client";

import App from './app.js';
import './style.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);