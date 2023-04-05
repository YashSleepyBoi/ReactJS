import { useEffect, useState } from 'react'
import CartCard from './components/cartCard/CartCard'
import MenuList from './components/menu-list/MenuList'
import NavBar from './components/navbar/navbar'



function App () {
  const [state, setState] = useState(false)
  const [cartDisplay, setCartDisplay] = useState(false)
  
  const newCartItem = () => {
    setState(true)
    setCartDisplay(false)
  }
  useEffect(() => {
    setState(false)
  }, [state])

  const cartdisplay=()=>{
    setCartDisplay(true)
  }
  
  return (
    <div>
      <NavBar onShowCart={cartdisplay} />
      {cartDisplay?<CartCard onClose={newCartItem} />:<></>}
      <MenuList onNewAdd={newCartItem} />
    </div>
  )
}

export default App
