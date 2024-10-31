import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import './index.css'
import { BrowserRouter} from "react-router-dom";
import {UsersProvider} from "../src/context/UsersContext.jsx"

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(


  <StrictMode>
    <UsersProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UsersProvider>
  </StrictMode>
)
