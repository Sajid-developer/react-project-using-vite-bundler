import { useState, useCallback } from 'react'
import './App.css'
import Login from './Login'
import Dashboard from './Dashboard'

const USERS = [
  { name: "Sajid", email: "sajid123@gmail.com", password: "#sajid102", role: "User" },
  { name: "Iftekhar", email: "iftua123@gmail.com", password: "@iftu4677", role: "User" },
  { name: "Mr. Admin", email: "admin123@gmail.com", password: "admin123", role: "Admin" }
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
      setUser(foundUser.name)
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
