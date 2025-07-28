import React, { useState } from 'react';

function AddGoalForm({ onAddGoal }) {
    // State for each input field in the form
    const [name, setName] = useState('');
    const [targetAmount, setTargetAmount] = useState('');
    const [category, setCategory] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload

        // Validation
        if (!name || !targetAmount || !category || !deadline) {
            alert("Please fill in all fields.");
            return;
        }
        if (parseFloat(targetAmount) <= 0) {
            alert("Target amount must be greater than zero.");
            return;
        }

       
        const newGoal = {
            id: Date.now(), 
            name,
            targetAmount: parseFloat(targetAmount), // Convert to number
            savedAmount: 0, // New goals always start with 0 saved
            category,
            deadline,
            createdAt: new Date().toISOString().split('T')[0] // Current date 
        };

        onAddGoal(newGoal); 
        
        // Clear the form fields after successful submission
        setName('');
        setTargetAmount('');
        setCategory('');
        setDeadline('');
    };

    return (
        <div className="form-container"> 
            <h2>Add New Goal</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group"> 
                    <label htmlFor="name">Goal Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group"> 
                    <label htmlFor="targetAmount">Target Amount:</label>
                    <input
                        type="number"
                        id="targetAmount"
                        value={targetAmount}
                        onChange={(e) => setTargetAmount(e.target.value)}
                        required
                        min="0.01" // Ensure amount is positive
                        step="0.01" // Allow decimal amounts
                    />
                </div>
                <div className="form-group"> 
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group"> 
                    <label htmlFor="deadline">Deadline:</label>
                    <input
                        type="date"
                        id="deadline"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        required
                    />
                </div>
                <div className="form-actions"> 
                    <button type="submit" className="btn btn-primary">Add Goal</button> 
                </div>
            </form>
        </div>
    );
}

export default AddGoalForm;