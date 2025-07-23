import React, { useState, useEffect } from 'react';

// EditGoalForm receives the goal to edit and an onSubmit function
const EditGoalForm = ({ goalToEdit, onUpdateGoal, onCancelEdit }) => {
    // State to hold form values, initialized with goalToEdit data
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [targetAmount, setTargetAmount] = useState('');
    const [category, setCategory] = useState('');
    const [deadline, setDeadline] = useState('');

    // useEffect hook to update form fields when goalToEdit changes
    useEffect(() => {
        if (goalToEdit) {
            setId(goalToEdit.id);
            setName(goalToEdit.name);
            setTargetAmount(goalToEdit.targetAmount);
            setCategory(goalToEdit.category);
            setDeadline(goalToEdit.deadline);
        }
    }, [goalToEdit]); // Dependency array - runs when goalToEdit changes

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!name || !targetAmount || !category || !deadline) {
            alert('Please fill in all fields.');
            return;
        }

        // Create an object with updated fields
        const updatedGoal = {
            id,
            name,
            targetAmount: parseFloat(targetAmount),
            category,
            deadline
        };

        // Call the parent's update function
        onUpdateGoal(updatedGoal);
    };

    return (
        <div className="form-container">
            <h2>Edit Goal</h2>
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
                <div className="form-actions">
                    <button type="submit">Update Goal</button>
                    <button type="button" onClick={onCancelEdit}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default EditGoalForm;