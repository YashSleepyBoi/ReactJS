import React, { useContext, useState } from 'react'
import Cart from '../../cartholder/Cart'

const CartCard = (props) => {
  const [reload, setReload] = useState(false)
    const cartobjects = useContext(Cart)
    let total=0
  if (reload) {setReload(false)}
    console.log(cartobjects)
    for (let i of cartobjects.cart) {
     total+=(i.price*i.quantity)
 }
    return (<div className='cart__card'>
            <button onClick={props.onClose}>X</button>
            {cartobjects.cart.map((item) => {
                              return (
                                <div className='cart__item'>
                                  <p>
                                    {item.itemname}
                                  </p>
                                  <p>
                                    {item.quantity}
                                    <button onClick={()=>{
                                     item.quantity-=1
                                              cartobjects.count -= 1
                                              console.log(cartobjects)
                                              setReload(true)
                                          }}>
                                              -
                                          </button>
                                          <button onClick={()=>{
                                     item.quantity+=1
                                              cartobjects.count += 1
                                              console.log(cartobjects)
                                              setReload(true)
                                          }}>
                                              +
                                    </button>
                                  </p>
                                  <p>
                                    {parseFloat(item.price)*parseInt(item.quantity)}
                                    
                                  </p>
                                </div>
                              )
            })}
        {total}
        <button onClick={() => {
            if(total===0){return}
            console.log(total,' has been sumbitted')
        }}>Buy</button>
          </div>)
}
export default CartCard
