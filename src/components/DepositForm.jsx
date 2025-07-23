import React, { useState } from 'react';

const DepositForm = ({ goalId, onMakeDeposit, onCancelDeposit }) => {
    // State to hold the deposit amount
    const [depositAmount, setDepositAmount] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Convert deposit amount to a number
        const amount = parseFloat(depositAmount);

        // Basic validation
        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid positive deposit amount.');
            return;
        }

        // Call the parent's function to make the deposit
        onMakeDeposit(goalId, amount);

        // Clear the input field
        setDepositAmount('');
    };

    return (
        <div className="form-container">
            <h2>Make Deposit</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Amount to Deposit:
                    <input
                        type="number"
                        value={depositAmount}
                        onChange={(e) => setDepositAmount(e.target.value)}
                        required
                        min="0.01" // Minimum deposit
                        step="0.01" // Allow decimal values
                    />
                </label>
                <div className="form-actions">
                    <button type="submit">Deposit</button>
                    <button type="button" onClick={onCancelDeposit}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default DepositForm;