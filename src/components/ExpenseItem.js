import React, { useContext } from 'react';
import { FcPlus, FcCancel, FcMinus } from "react-icons/fc";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FcPlus size='1.5em' style={{cursor:'pointer'}} onClick={event=> increaseAllocation(props.name)}></FcPlus></td>
        <td><FcMinus size='1.5em' style={{cursor:'pointer'}} onClick={event=> decreaseAllocation(props.name)}></FcMinus></td>
        <td><FcCancel size='1.5em' style={{cursor:'pointer'}} onClick={handleDeleteExpense}></FcCancel></td>
        </tr>
    );
};

export default ExpenseItem;
