import React from 'react';

// GoalCard component receives goal data and functions for actions
const GoalCard = ({ goal, onEdit, onDelete, onDeposit }) => {
    // Calculate progress percentage
    const progress = (goal.savedAmount / goal.targetAmount) * 100;
    const remainingAmount = goal.targetAmount - goal.savedAmount;

    // Determine goal status
    const today = new Date();
    const deadlineDate = new Date(goal.deadline);
    const timeDiff = deadlineDate.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    let status = '';
    let statusClass = '';

    if (goal.savedAmount >= goal.targetAmount) {
        status = 'Completed';
        statusClass = 'goal-completed';
    } else if (daysLeft <= 30 && daysLeft > 0) {
        status = 'Warning: Deadline Nearing!';
        statusClass = 'goal-warning';
    } else if (daysLeft <= 0) {
        status = 'Overdue';
        statusClass = 'goal-overdue';
    } else {
        status = `${daysLeft} days left`;
        statusClass = 'goal-active';
    }

    return (
        <div className={`goal-card ${statusClass}`}>
            <h3>{goal.name}</h3>
            <p>Category: {goal.category}</p>
            <p>Target: Kes{goal.targetAmount}</p>
            <p>Saved: Kes{goal.savedAmount}</p>
            <p>Remaining: Kes{remainingAmount}</p>
            <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${Math.min(100, progress)}%` }}></div>
            </div>
            <p>{progress.toFixed(2)}% Achieved</p>
            <p>Deadline: {goal.deadline} ({status})</p>
            <div className="goal-actions">
                {/* Buttons trigger functions passed from parent */}
                <button onClick={() => onDeposit(goal.id)}>Make Deposit</button>
                <button onClick={() => onEdit(goal)}>Edit Goal</button>
                <button onClick={() => onDelete(goal.id)}>Delete Goal</button>
            </div>
        </div>
    );
};

export default GoalCard;