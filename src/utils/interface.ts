export interface Params extends Record<string, string | number | undefined> {
  limit: number
  page: number
  keyword?: string
  order_by: string
}

export interface ILogin {
  username: string
  password: string
}

export interface IRegister extends ILogin {}

export interface Time {
  year: number
  month: number
  day: number
}

export interface TimeMonth extends Omit<Time, 'day'> {}
export interface TimeYear extends Omit<Time, 'month' | 'day'> {}

export interface ITransaction {
  id: number
  amount: number
  status: string
  from: string
  to: string
  createdAt: string
}
