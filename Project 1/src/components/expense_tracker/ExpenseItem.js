
import './ExpenseItem.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import Card from '../card/Card'
import React, { useState } from 'react';


function ExpressItem(props){
    const [title,setTitle]=useState(props.title)
    
    return(
        <Card className='expense-item'>
            <div>
                <ExpenseDate date={props.date}></ExpenseDate>
            </div>
            <div className='expense-item__description'>
                <h2 className=''>{ title}</h2>
                <div className='expense-item__price'>
                {props.amount}
            </div>
            </div>
            
        </Card>
    )
}

export default ExpressItem