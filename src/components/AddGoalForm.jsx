import React, { useState } from 'react';


const AddGoalForm = ({ onAddGoal }) => {
    // State to hold form input values
    const [name, setName] = useState('');
    const [targetAmount, setTargetAmount] = useState('');
    const [category, setCategory] = useState('');
    const [deadline, setDeadline] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form refresh

        // Basic validation
        if (!name || !targetAmount || !category || !deadline) {
            alert('Please fill in all fields.');
            return;
        }

        // Create a new goal object
        const newGoal = {
            name,
            targetAmount: parseFloat(targetAmount), // Convert to number
            savedAmount: 0, 
            category,
            deadline,
            createdAt: new Date().toISOString().split('T')[0] // Current date
        };

        // Call the parent's function to add the goal
        onAddGoal(newGoal);

        // Clear the form fields after submission
        setName('');
        setTargetAmount('');
        setCategory('');
        setDeadline('');
    };

    return (
        <div className="form-container">
            <h2>Add New Goal</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Goal Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Target Amount:
                    <input
                        type="number"
                        value={targetAmount}
                        onChange={(e) => setTargetAmount(e.target.value)}
                        required
                        min="0"
                    />
                </label>
                <label>
                    Category:
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Deadline:
                    <input
                        type="date"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Add Goal</button>
            </form>
        </div>
    );
};

export default AddGoalForm;