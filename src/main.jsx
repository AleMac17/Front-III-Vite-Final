import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Layout from 'src/Components/Layout'
import CounterProvider from 'src/context/context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CounterProvider>
        <Layout />
      </CounterProvider>
    </BrowserRouter>
  </React.StrictMode>
)
