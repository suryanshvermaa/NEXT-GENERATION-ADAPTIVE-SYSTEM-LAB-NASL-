import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId='358593758996-6qjvsjgc161svfo1qrop1tsec1fssua9.apps.googleusercontent.com'>
    <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
