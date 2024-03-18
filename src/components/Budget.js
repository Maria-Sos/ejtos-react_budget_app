import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, remaining ,currency, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const upperLimitValue = 20000
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        const typedBudged = event.target.value
        if (typedBudged - totalExpenses < 0) {
            alert('You cannot reduce the budget value lower than the spending');
        } else if (typedBudged > upperLimitValue) {
            alert(`The value cannot exceed remaining funds  ${currency}`+remaining);              
        } else {
            setNewBudget(typedBudged);
        }
    }

    const handleKeyDown = (event) => {
        if ( event.key === 'Enter' && newBudget <= upperLimitValue) {
          dispatch({ type: "SET_BUDGET", payload: newBudget });
        }else if (newBudget > upperLimitValue) {
            alert(`The value cannot exceed remaining funds  ${currency}`+remaining);
        }
      };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" 
                    step="10"
                    required  
                    value={newBudget} 
                    onChange={handleBudgetChange} 
                    onKeyDown={handleKeyDown}>
            </input>
        </div>
            );
};
export default Budget;
