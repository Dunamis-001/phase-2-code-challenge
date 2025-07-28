

import React, { useState, useEffect } from 'react';

function EditGoalForm({ goalToEdit, onUpdateGoal, onCancelEdit }) {
    
    const [name, setName] = useState(goalToEdit.name);
    const [targetAmount, setTargetAmount] = useState(goalToEdit.targetAmount);
    const [category, setCategory] = useState(goalToEdit.category);
    const [deadline, setDeadline] = useState(goalToEdit.deadline);

    // useEffect to update form fields if a different goal is selected for editing
    
    useEffect(() => {
        if (goalToEdit) {
            setName(goalToEdit.name);
            setTargetAmount(goalToEdit.targetAmount);
            setCategory(goalToEdit.category);
            setDeadline(goalToEdit.deadline);
        }
    }, [goalToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // validation
        if (!name || !targetAmount || !category || !deadline) {
            alert("Please fill in all fields.");
            return;
        }
        if (parseFloat(targetAmount) <= 0) {
            alert("Target amount must be greater than zero.");
            return;
        }

        // object with only the fields that can be updated
        const updatedFields = {
            name,
            targetAmount: parseFloat(targetAmount), // Convert to number
            category,
            deadline,
        };
        // Pass the goal ID and updated fields 
        onUpdateGoal(goalToEdit.id, updatedFields);
    };

    return (
        <div className="form-container"> 
            <h2>Edit Goal</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group"> 
                    <label htmlFor="edit-name">Goal Name:</label>
                    <input
                        type="text"
                        id="edit-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group"> 
                    <label htmlFor="edit-targetAmount">Target Amount:</label>
                    <input
                        type="number"
                        id="edit-targetAmount"
                        value={targetAmount}
                        onChange={(e) => setTargetAmount(e.target.value)}
                        required
                        min="0.01"
                        step="0.01"
                    />
                </div>
                <div className="form-group"> 
                    <label htmlFor="edit-category">Category:</label>
                    <input
                        type="text"
                        id="edit-category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group"> 
                    <label htmlFor="edit-deadline">Deadline:</label>
                    <input
                        type="date"
                        id="edit-deadline"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        required
                    />
                </div>
                <div className="form-actions"> 
                    <button type="submit" className="btn btn-primary">Update Goal</button> 
                    <button type="button" onClick={onCancelEdit} className="btn btn-cancel">Cancel</button> 
                </div>
            </form>
        </div>
    );
}

export default EditGoalForm;