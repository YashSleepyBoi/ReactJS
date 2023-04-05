import React, { useState, useContext } from 'react'
import Cart from '../../cartholder/Cart'

function MenuItem (menuitem) {
  const props = menuitem.item
  const [quantity, setQuantity] = useState('1')
  const quantityChange = (e) => {
    setQuantity(e.target.value)
  }
  const cartobjects = useContext(Cart)

  let cart = {}
  const menuAdd = (e) => {
    e.preventDefault()
    let idcheck = false
    for (let i of cartobjects.cart) {
      console.log(i)
        if (i.id === props.id) {
          console.log('hello there')
        idcheck = true
        i.quantity = parseInt(i.quantity) + parseInt(quantity)
        i.price = parseFloat(props.price) }
    }
    if (!idcheck) {
      cart.itemname = props.name
      cart.quantity = parseInt(quantity)
      cart.id = props.id
      cart.price = parseFloat(props.price) 
      console.log(cart)
      cartobjects.cart.push(cart)

      console.log(cartobjects)
    }
    cartobjects.count += parseInt(quantity)
    menuitem.onAddToCart(true)
  }
  return (

    <form className='menu__item' onSubmit={menuAdd}>
      <h3 className='menu__title'>{props.name}</h3>
      <p className='menu__price'>
        {props.price}
      </p>
      <input type='number' value={quantity} onChange={quantityChange}>
      </input>
      <button type='submit'>
        Add to cart
      </button>
    </form>

  )
}

export default MenuItem
