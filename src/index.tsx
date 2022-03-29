import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import 'assets/css/styles.css'
import ErrorBoundary from 'components/ErrorBoundary'

import App from './App'
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root') as HTMLElement

const root = ReactDOMClient.createRoot(container)

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
