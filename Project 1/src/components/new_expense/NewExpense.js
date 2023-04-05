import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'
import React,{useState} from "react"
const NewExpense=(props)=>{
    const ExpenseDataRetriever=(data)=>{
        const new_expense_data={
            ...data,
            id:Math.random()
        }
        props.onNewExpense(new_expense_data)
    }
    const [visibility,setVisibility]=useState(false)
    const DisplayHandler=()=>{
        visibility===false?setVisibility(true):setVisibility(false)
    }
    

    return (
        <div className="new-expense">
            {visibility?<ExpenseForm onCancel={DisplayHandler} onSaveExpenseData={ExpenseDataRetriever}/>  :<button onClick={DisplayHandler}>Add New Expense</button>}
            
            
        </div>
        
    )
}

export default NewExpense