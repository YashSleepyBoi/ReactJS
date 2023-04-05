import React from 'react'
import MenuItem from '../menu-item/MenuItem'

const menubar = [
  {
    id: '1',
    name: 'Pizza',
    price: '40.99'
  },
  {
    id: '2',
    name: 'Burger',
    price: '12.99'
  }
]

const MenuList = (props) => {

  return (
    <div className='menu_container'>
      {menubar.map((menuitem) => {
         return (
           <MenuItem item={menuitem} onAddToCart={props.onNewAdd} />
         )})}
    </div>

  )
}

export default MenuList
