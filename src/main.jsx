import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { persistor } from './reduxToolkit/index.js'
import { PersistGate } from 'redux-persist/integration/react'
import { Toaster } from 'react-hot-toast'

import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
    // <GoogleOAuthProvider>
    <BrowserRouter>

        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>

        <Toaster position="top-center" />

    </BrowserRouter>
    // </GoogleOAuthProvider>
)
