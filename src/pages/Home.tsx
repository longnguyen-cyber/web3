/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
declare global {
  interface Window {
    ethereum?: any
  }
}

const Home = () => {
  // const ethers = require('ethers') // Removed as ethers is now imported at the top
  // const API_KEY = process.env.REACT_APP_API_KEY
  // const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY
  // const provider_Metamask = new ethers.providers.Web3Provider(window.ethereum)
  // const infuraProvider = new ethers.providers.InfuraProvider('goerli', API_KEY)
  return <React.Fragment>hello</React.Fragment>
}

export default Home
