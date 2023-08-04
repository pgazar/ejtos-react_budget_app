// Budget.js
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const [typedBudget, setTypedBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, expense) => total + expense.cost, 0);


    useEffect(() => {
        setTypedBudget(budget);
    }, [budget]);

    const handleBudgetChange = (e) => {
        const value = parseInt(e.target.value);
        setTypedBudget(value);
    };

    const saveBudget = () => {
        if (typedBudget < 0) {
            alert("Budget cannot be negative.");
            setTypedBudget(budget); // Reset the typed value
            return;
        }
        if (typedBudget > 20000) {
            alert("Budget cannot exceed £20,000.");
            setTypedBudget(budget); // Reset the typed value
            return;
        }
        if (typedBudget < totalExpenses) {
            alert("Budget cannot be lower than total spending.");
            setTypedBudget(budget); // Reset the typed value
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: typedBudget,
        });
    };

    return (

        <div className='alert alert-secondary'>
            <div className="budget-container">
                <span>Budget: </span>
                <input
                    type='number'
                    value={typedBudget}
                    step={10}
                    onChange={handleBudgetChange}
                    onBlur={saveBudget}
                />

            </div>
        </div>
    );
};

export default Budget;




