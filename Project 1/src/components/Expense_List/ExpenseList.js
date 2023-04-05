import ExpenseItem from "../expense_tracker/ExpenseItem"
import './ExpenseList.css'
const ExpenseList=(props)=>{

    if(props.items.length===0){

        return(<h2 className="expenses-list__fallback">No Data Available</h2>)
    }
    return(
        <div>
            {props.items.map((expense)=>{
                return <ExpenseItem key={expense.id } title={expense.title} amount={expense.amount} date={expense.date}/>
            })}

        </div>
    )
}

export default ExpenseList