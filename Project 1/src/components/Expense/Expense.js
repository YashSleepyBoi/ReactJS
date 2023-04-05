import ExpenseItem from '../expense_tracker/ExpenseItem'
import './Expense.css'
import React,{useState} from 'react'
import Card from '../card/Card'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter'
import ExpenseList from '../Expense_List/ExpenseList'
import Chart from '../chart/Chart'

function Expense(props){
    const [year,setYear]=useState('2021')
    const expenses=props.expenses
    const YearRecord=year=>{
        setYear(year)
        console.log(year)
    }
    const filtered_expenses=expenses.filter(expense=>{
        return expense.date.getFullYear()==year
    })
    console.log(filtered_expenses)

    const chartfixed_expenses=[
        {label:'Jan',value:0},
        {label:'Feb',value:0},
        {label:'Mar',value:0},
        {label:'Apr',value:0},
        {label:'May',value:0},
        {label:'Jun',value:0},
        {label:'Jul',value:0},
        {label:'Aug',value:0},
        {label:'Sep',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0}
    ]

    for(let i of filtered_expenses){
        const month=i.date.getMonth()
        chartfixed_expenses[month].value+=i.amount
    }

    return(
        <div>
        
        <Card className='expenses'>
            <ExpensesFilter selected={year} onYearChange={YearRecord}/>
            <Chart datapoints={chartfixed_expenses}/>
            <ExpenseList items={filtered_expenses}/>
        </Card>
        </div>
    )
}

export default Expense