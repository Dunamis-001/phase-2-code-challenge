

import React, { useState } from 'react';

function DepositForm({ goalId, goalName, onMakeDeposit, onCancelDeposit }) {
    const [depositAmount, setDepositAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // validation 
        if (parseFloat(depositAmount) <= 0 || isNaN(parseFloat(depositAmount))) {
            alert("Deposit amount must be a positive number.");
            return;
        }

        onMakeDeposit(goalId, depositAmount); // Pass goal ID and deposit amount 
        setDepositAmount(''); // Clear the input field after deposit
    };

    return (
        <div className="form-container"> 
            <h2>Deposit to {goalName}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group"> 
                    <label htmlFor="deposit-amount">Amount:</label>
                    <input
                        type="number"
                        id="deposit-amount"
                        value={depositAmount}
                        onChange={(e) => setDepositAmount(e.target.value)}
                        required
                        min="0.01" // Ensure a positive deposit
                        step="0.01" // Allow decimal amounts
                    />
                </div>
                <div className="form-actions"> 
                    <button type="submit" className="btn btn-primary">Make Deposit</button> 
                    <button type="button" onClick={onCancelDeposit} className="btn btn-cancel">Cancel</button> 
                </div>
            </form>
        </div>
    );
}

export default DepositForm;