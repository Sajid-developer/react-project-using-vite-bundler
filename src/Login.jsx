import React, { useState } from 'react'

const Login = ({ handlelogin }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (email) => {
    // Simple email regex
    return /\S+@\S+\.\S+/.test(email)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    setError('')

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    handlelogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <form onSubmit={submitHandler}>
      <h1>Login Form</h1>
      {error && <p style={{ fontSize: '16px', color: 'red', marginBottom: '40px' }}>{error}</p>}

      <label style={{ display: 'flex', width: '100%', fontSize: '16px' , textAlign: 'left' }}>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      
      <br />
      <label style={{ display: 'flex', width: '100%', fontSize: '16px' , textAlign: 'left' }}>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Login