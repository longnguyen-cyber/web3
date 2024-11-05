import { TransactionApi } from '@/apis'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ITransaction } from '@/utils/interface'
import { useEffect, useState } from 'react'
const fakeData: ITransaction[] = [
  {
    id: 1,
    amount: 100,
    status: 'success',
    from: '0x1234567890',
    to: '0x0987654321',
    createdAt: '2021-10-10',
  },
  {
    id: 2,
    amount: 200,
    status: 'success',
    from: '0x1234567890',
    to: '0x0987654321',
    createdAt: '2021-10-10',
  },
  {
    id: 3,
    amount: 300,
    status: 'success',
    from: '0x1234567890',
    to: '0x0987654321',
    createdAt: '2021-10-10',
  },
  {
    id: 4,
    amount: 400,
    status: 'success',
    from: '0x1234567890',
    to: '0x0987654321',
    createdAt: '2021-10-10',
  },
  {
    id: 5,
    amount: 500,
    status: 'success',
    from: '0x1234567890',
    to: '0x0987654321',
    createdAt: '2021-10-10',
  },
  {
    id: 6,
    amount: 600,
    status: 'success',
    from: '0x1234567890',
    to: '0x0987654321',
    createdAt: '2021-10-10',
  },
  {
    id: 7,
    amount: 700,
    status: 'success',
    from: '0x1234567890',
    to: '0x0987654321',
    createdAt: '2021-10-10',
  },
  {
    id: 8,
    amount: 800,
    status: 'success',
    from: '0x1234567890',
    to: '0x0987654321',
    createdAt: '2021-10-10',
  },
  {
    id: 9,
    amount: 900,
    status: 'success',
    from: '0x1234567890',
    to: '0x0987654321',
    createdAt: '2021-10-10',
  },
  {
    id: 10,
    amount: 1000,
    status: 'success',
    from: '0x1234567890',
    to: '0x0987654321',
    createdAt: '2021-10-10',
  },
]

const History = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  useEffect(() => {
    const fetchTransactions = async () => {
      // Logic to fetch transactions
      const reponse = await TransactionApi.GetTransactions()

      if (reponse.status === 200) {
        setTransactions(reponse.data)
      }
    }

    fetchTransactions()
  }, [])

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Time</TableHead>
            <TableHead>From address</TableHead>
            <TableHead>To address</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fakeData.map((item) => (
            <TableRow key={item.id}>
              <TableCell className='font-medium'>{item.createdAt}</TableCell>
              <TableCell>{item.from}</TableCell>
              <TableCell>{item.to}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default History
