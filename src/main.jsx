import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Clean up SPA redirect parameters if coming from 404 handler
(function handleSpaRedirect() {
  const params = new URLSearchParams(window.location.search);
  const redirectPath = params.get('p');
  if (redirectPath) {
    const cleanPath = decodeURIComponent(redirectPath);
    const targetHash = cleanPath.startsWith('#') ? cleanPath : '#' + cleanPath.replace(/^\/+/, '');
    window.history.replaceState(null, '', window.location.pathname + targetHash);
  }
})();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
