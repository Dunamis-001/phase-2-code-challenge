import React from 'react';
import GoalItem from './GoalItem'; 

function GoalList({ goals, onEditGoal, onDeleteGoal, onDepositToGoal }) {
    return (
        <div className="goal-list"> 
            {goals.map(goal => (
                <GoalItem
                    key={goal.id} 
                    goal={goal}
                    onEdit={onEditGoal}
                    onDelete={onDeleteGoal}
                    onDeposit={onDepositToGoal}
                />
            ))}
        
        </div>
    );
}

export default GoalList;