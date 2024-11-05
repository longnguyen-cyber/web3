import { AuthApi } from '@/apis'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PATHS } from '@/utils/enums'
import { ILogin } from '@/utils/interface'
import { FormSubmit, InputChange } from '@/utils/types'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [login, setLogin] = useState<ILogin>({
    username: '',
    password: '',
  })

  const handleChangeInput = (e: InputChange) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    })
  }

  const handleSumit = async (e: FormSubmit) => {
    e.preventDefault()
    try {
      const response = await AuthApi.Login(login)
      if (response.status === 200) {
        localStorage.setItem('access_token', response.data.token)
        window.location.href = PATHS.HOME
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    if (token) {
      window.location.href = PATHS.HOME
    }
  }, [])
  return (
    <div className='h-screen flex items-center'>
      <Card className='mx-auto max-w-sm'>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-2xl font-bold'>Login</CardTitle>
          <CardDescription>
            Enter your email and password to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className='space-y-4'
            onSubmit={handleSumit}
          >
            <div className='space-y-2'>
              <Label htmlFor='name'>User name</Label>
              <Input
                id='name'
                type='text'
                placeholder='John Doe'
                required
                name='username'
                value={login.username}
                onChange={handleChangeInput}
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                required
                name='password'
                value={login.password}
                onChange={handleChangeInput}
              />
            </div>
            <Button
              type='submit'
              className='w-full'
            >
              Login
            </Button>
            <p className='text-center'>
              Don't have an account?{' '}
              <Link
                to={PATHS.REGISTER}
                className='text-blue-500 italic'
              >
                Register
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
