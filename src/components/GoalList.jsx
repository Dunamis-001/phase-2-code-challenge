import React from 'react';
import GoalCard from './GoalCard'; 

// GoalList component receives an array of goals and functions for actions
const GoalList = ({ goals, onEditGoal, onDeleteGoal, onDepositToGoal }) => {
    return (
        <div className="goal-list">
           
            {goals.length === 0 ? (
                <p>No goals set yet. Add a new goal to get started!</p>
            ) : (
                // Map over the goals array and render a GoalCard for each
                goals.map(goal => (
                    <GoalCard
                        key={goal.id} // Important for React list rendering
                        goal={goal}
                        onEdit={onEditGoal}
                        onDelete={onDeleteGoal}
                        onDeposit={onDepositToGoal}
                    />
                ))
            )}
        </div>
    );
};

export default GoalList;