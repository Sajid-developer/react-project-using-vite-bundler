import React, {useState} from 'react'

const Login = ({handlelogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const SubmitHandler = (event)=>{
      event.preventDefault();
      console.log('Form submitted successfully.')

      handlelogin(email,password)
  
    //   console.table(userInfo);
      console.log('Eamil is', email);
      console.log('Password is', password);
  
      setEmail('')
      setPassword('')
    }
  
    
    return (
      <>
        <form onSubmit={(e) => SubmitHandler(e)}>
  
          <h1>Login Form</h1>
  
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/> <br/>

          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/><br/><br/>

          <button type="submit">Submit</button>
        </form>
      </>
    )
}

export default Login