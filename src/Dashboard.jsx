import React from 'react'
import './App.css'

const Dashboard = ({userName}) => {
  return (
    <>
      <h1>Welcome <span style={{color: 'crimson'}}> {userName} </span></h1>
      <a href="#">Logout</a>
    </>
  )
}

export default Dashboard
