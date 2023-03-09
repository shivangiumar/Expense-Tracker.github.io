
import './index.css';//universal css
import App from "./App.js"; //component
import { createRoot } from 'react-dom/client';//react 18

const container = document.getElementById('root');
createRoot(container).render(<App/>);

