 //import './App.css';
 import React,{useState}from 'react';
 import NewExpense  from './components/NewExpense/NewExpense';
 import Expenses from "./components/Expenses/Expenses";
//import NewExpense from './components/NewExpense/NewExpense';
let DUMMY_EXPENSE=[
 
 ];
let App=()=>{
   /* let expenseDate = new Date(2021,2,20);
    let expenseTitle="School fee";
    let expenseAmount=300;
    */
   const [expenses,setExpenses]= useState(DUMMY_EXPENSE);
   
   const addExpenseHandler=(expense)=>
   { const updatedExpenses=[expense,...expenses];
     setExpenses(updatedExpenses);
   };



    return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses} />
            </div>
            );
}
export default App;