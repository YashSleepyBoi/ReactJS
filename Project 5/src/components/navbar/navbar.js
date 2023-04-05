import React, { useContext } from 'react'
import Cart from '../../cartholder/Cart'

const NavBar = (props) => {

  const cartobject = useContext(Cart)

  return (
    <div className='navbar'>
      <h1 className='navbar__title'>Food App</h1>
      <button className='navbar__btn' onClick={props.onShowCart}>
        <p className='navbar__btn__title'>
          Cart
        </p>
        <p className='navbar__btn__feature'>
          {cartobject.count}
        </p>
      </button>
    </div>

  )
}

export default NavBar
