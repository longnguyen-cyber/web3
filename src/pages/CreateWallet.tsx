import React, { useState } from 'react'

const CreateWallet = () => {
  const [privateKey, setPrivateKey] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [keyPairs, setKeyPairs] = useState<
    { publicKey: string; privateKey: string }[]
  >([])

  const generateKeyPairs = () => {
    const pairs = []
    for (let i = 0; i < 10; i++) {
      const publicKey = `publicKey${i}`
      const privateKey = `privateKey${i}`
      pairs.push({ publicKey, privateKey })
    }
    setKeyPairs(pairs)
  }

  const handleCreateWallet = () => {
    generateKeyPairs()
    setShowModal(true)
  }

  const handleEnterPrivateKey = () => {
    console.log('Entering private key:', privateKey)
  }

  const handleSelectKeyPair = (keyPair: {
    publicKey: string
    privateKey: string
  }) => {
    console.log('Selected key pair:', keyPair)
    setShowModal(false)
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 className='text-2xl font-bold mb-4'>Create or Access Your Wallet</h1>
      <div className='space-y-4 flex justify-center flex-col'>
        <button
          onClick={handleCreateWallet}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
        >
          Create New Wallet
        </button>
        <div className='flex flex-col items-center'>
          <input
            type='text'
            value={privateKey}
            onChange={(e) => setPrivateKey(e.target.value)}
            placeholder='Enter your private key'
            className='px-4 py-2 border rounded mb-2'
          />
          <button
            onClick={handleEnterPrivateKey}
            className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700'
          >
            Enter Private Key
          </button>
        </div>
      </div>

      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full'>
            <h2 className='text-xl font-bold mb-4'>Select a Key Pair</h2>
            <ul className='grid grid-cols-2 gap-4'>
              {keyPairs.map((keyPair, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleSelectKeyPair(keyPair)}
                    className='w-full px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-left'
                  >
                    {keyPair.publicKey}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowModal(false)}
              className='mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CreateWallet
