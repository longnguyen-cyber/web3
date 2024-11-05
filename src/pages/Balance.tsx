import { useState } from 'react'

const Balance = () => {
  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('')
  const [transactionStatus, setTransactionStatus] = useState('')
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleSendTransaction = () => {
    // Logic to handle transaction sending
    console.log('Sending transaction...')
    setShowConfirmation(true)
  }

  const handleConfirmTransaction = () => {
    // Logic to confirm and sign the transaction
    console.log('Confirming transaction...')
    setTransactionStatus('pending')
    // Simulate transaction status update
    setTimeout(() => setTransactionStatus('successful'), 3000)
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <h1 className='text-2xl font-bold mb-4'>Wallet Balance</h1>
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
        <div className='mb-4'>
          <h2 className='text-xl font-semibold'>Current Balance</h2>
          <p className='text-gray-700'>0.00 ETH</p>
        </div>
        <div className='mb-4'>
          <h2 className='text-xl font-semibold'>Send Transaction</h2>
          <input
            type='text'
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder='Recipient Address'
            className='w-full px-4 py-2 border rounded mb-2'
          />
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Amount'
            className='w-full px-4 py-2 border rounded mb-2'
          />
          <button
            onClick={handleSendTransaction}
            className='w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
          >
            Send
          </button>
        </div>
        {showConfirmation && (
          <div className='mb-4'>
            <h2 className='text-xl font-semibold'>Confirm Transaction</h2>
            <p className='text-gray-700'>Recipient: {recipient}</p>
            <p className='text-gray-700'>Amount: {amount} ETH</p>
            <button
              onClick={handleConfirmTransaction}
              className='w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700'
            >
              Confirm
            </button>
          </div>
        )}
        {transactionStatus && (
          <div className='mt-4'>
            <h2 className='text-xl font-semibold'>Transaction Status</h2>
            <p
              className={`text-${
                transactionStatus === 'successful' ? 'green' : 'red'
              }-500`}
            >
              {transactionStatus}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Balance
