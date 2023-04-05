import React,{useState} from "react";
import './ExpenseForm.css'

const ExpenseForm=(props)=>{
    const [title,setTitle]=useState('')
    const [amount,setAmount]=useState('')
    const [date,setDate]=useState('')


    const titleChangeHandler=(e)=>{
        setTitle(e.target.value)
    }
    const amountChangeHandler=(e)=>{
        setAmount(e.target.value)
    }
    const dateChangeHandler=(e)=>{
        setDate(e.target.value)
    }
    const formHandler=(e)=>{
        e.preventDefault()
        const expensedata={
            title,
            amount:+amount,
            date:new Date(date)
        }
        setTitle('')
        setAmount('')
        setDate('')
        props.onSaveExpenseData(expensedata)
        props.onCancel()
    }
    const cancelForm=()=>{
        props.onCancel()
    }
    return(

    
        <form onSubmit={formHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={title} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' value={amount} step='.01' onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2019-01-01' value={date} max='2022-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <button onClick={cancelForm} className="new-expense__action">Cancel</button>
            <button type="submit" className="new-expense__action">Submit</button>
        </form>
    )
}

export default ExpenseForm