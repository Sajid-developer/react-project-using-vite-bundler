import { useState, useCallback } from 'react'
import './App.css'
import Login from './Login'
import Dashboard from './Dashboard'

const USERS = [
  { email: "sajid123@gmail.com", password: "#sajid102", role: "User" },
  { email: "iftua123@gmail.com", password: "@iftu4677", role: "User" },
  { email: "admin123@gmail.com", password: "admin123", role: "Admin" }
]

function App() {
  const [user, setUser] = useState(null)
  const [loginError, setLoginError] = useState('')

  const loginHandler = useCallback((email, password) => {
    setLoginError('')
    const foundUser = USERS.find(
      u => u.email === email && u.password === password
    )
    if (foundUser) {
      setUser(foundUser.role)
    } else {
      setLoginError('🛑 Invalid email or password !')
    }
  }, [])

  return (
    <>
      {!user
        ? <Login handlelogin={loginHandler} loginerror={loginError} />
        : <Dashboard userName={user} />
      }
    </>
  )
}

export default App
