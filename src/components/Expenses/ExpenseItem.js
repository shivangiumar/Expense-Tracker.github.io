import './ExpenseItem.css';
import React,{useState} from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate.js';
let ExpenseItem=(props)=>{//props is an object
 return (
    <Card className='expense-item'>
       <ExpenseDate date={props.date}/>
        <div className='expense-item_description'>
            <h2>{props.title}</h2>
            <div className='expense-item_price'>Rs {props.amount}</div>
        </div>
    </Card>

 );
}
export default ExpenseItem;