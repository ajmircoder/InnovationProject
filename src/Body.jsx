import { useEffect, useState } from 'react'
import Login from './components/Login'
import Product from './components/Product'

function Body() {
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (JSON.parse(user)) setIsUser(true);
  }, [isUser]);
  return (
    <>
      {isUser ? <Product setIsUser={setIsUser} /> : <Login setIsUser={setIsUser} />}
    </>
  )
}

export default Body
