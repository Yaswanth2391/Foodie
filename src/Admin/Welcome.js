import React from 'react'
import  useCallApi from './CallApi'

const Welcome = () => {
  const users=useCallApi("http://localhost:4000/users");
  const dishes=useCallApi("http://localhost:4000/dishes");
  const orsers=useCallApi("http://localhost:4000/orders")
  
  return (
   <div>
     <h1>Welcome to Admin Dashboard</h1>
    </div>
     
  )
}


export default Welcome