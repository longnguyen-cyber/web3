import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { Web3ReactProvider } from '@web3-react/core'
import './index.css'
import { getProvider } from './utils/provider.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Web3ReactProvider getLibrary={getProvider}>
      <App />
    </Web3ReactProvider>
  </BrowserRouter>,
)
