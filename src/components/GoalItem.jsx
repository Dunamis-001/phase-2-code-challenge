import React from 'react';

function GoalItem({ goal, onEdit, onDelete, onDeposit }) {
    // Calculate progress percentage 
    const progress = Math.min(100, Math.max(0, (goal.savedAmount / goal.targetAmount) * 100)).toFixed(2);
    const savedAmountFixed = goal.savedAmount !== undefined ? goal.savedAmount.toFixed(2) : '0.00';
    const targetAmountFixed = goal.targetAmount !== undefined ? goal.targetAmount.toFixed(2) : '0.00';


    return (
        <div className="goal-item"> 
            <h3>{goal.name}</h3>
            <p><strong>Category:</strong> {goal.category}</p>
            <p><strong>Target:</strong> ${targetAmountFixed}</p>
            <p><strong>Saved:</strong> ${savedAmountFixed}</p>

            
            <div className="progress-bar-container"> 
                <div
                    className="progress-bar-fill" 
                    style={{ width: `${progress}%` }}
                >
                    
                    {progress > 0 && `${progress}%`}
                </div>
            </div>
            <p className="progress-text">
                Progress: {progress}%
                {progress === "100.00" && <span style={{ color: 'var(--primary-color)', marginLeft: '5px' }}> (Completed!)</span>}
            </p>

            <p><strong>Deadline:</strong> {goal.deadline}</p>
          
            {goal.createdAt && <p><strong>Created:</strong> {new Date(goal.createdAt).toLocaleDateString()}</p>}

            <div className="item-actions"> 
                <button onClick={() => onEdit(goal)} className="btn btn-secondary btn-small">Edit</button> 
                <button onClick={() => onDelete(goal.id)} className="btn btn-cancel btn-small">Delete</button> 
                <button onClick={() => onDeposit(goal.id)} className="btn btn-primary btn-small">Deposit</button> 
            </div>
        </div>
    );
}

export default GoalItem;