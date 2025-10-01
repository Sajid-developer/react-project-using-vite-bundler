import { useState } from 'react'
import './App.css'
import Login from './Login'
import Dashboard from './Dashboard'

function App() {

  const [user, setUser] = useState(null)

  const userInfo = [
      {
        email : "sajid123@gmail.com",
        password : "#sajid102"
      },
      {
        email : "iftua123@gmail.com",
        password : "@iftu4677"
      },
    ]

  const admin = {
        email : "admin123@gmail.com",
        password : "admin123"
  }

  const LoginHandler = (email,password)=>{
    if(email == admin.email && password == admin.password){
      setUser('Admin')
      console.log("Admin")
    }else if(userInfo.find(user => user.email == email && user.password == password) ){
      setUser('User')
      console.log("User")
    }
    else{
      alert('Invalid User !')
    }
  }


  return (
    <>
      {!user ? <Login handlelogin={LoginHandler} /> : <Dashboard userName={user} />}
    </>
  )
}

export default App
