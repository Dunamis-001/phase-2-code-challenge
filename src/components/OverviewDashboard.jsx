
import React from 'react';

function OverviewDashboard({ goals }) {
    const totalGoals = goals.length;
    const completedGoals = goals.filter(goal => goal.savedAmount >= goal.targetAmount).length;
    const totalSaved = goals.reduce((acc, goal) => acc + goal.savedAmount, 0);
    const totalTarget = goals.reduce((acc, goal) => acc + goal.targetAmount, 0);

    // Calculate goals nearing deadline 
    const today = new Date();
    const nearingDeadlineGoals = goals.filter(goal => {
       
        if (!goal.deadline) return false;

        const deadlineDate = new Date(goal.deadline);
        
        if (isNaN(deadlineDate.getTime())) return false;

        const diffTime = deadlineDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

       
        return diffDays > 0 && diffDays <= 30 && goal.savedAmount < goal.targetAmount;
    }).length;

    return (
        <div className="dashboard-container"> 
            <div className="dashboard-card"> 
                <h3>Total Goals</h3>
                <p>{totalGoals}</p>
            </div>
            <div className="dashboard-card"> 
                <h3>Completed Goals</h3>
                <p>{completedGoals}</p>
            </div>
            <div className="dashboard-card"> 
                <h3>Total Saved</h3>
                <p>${totalSaved.toFixed(2)}</p>
            </div>
            <div className="dashboard-card"> 
                <h3>Total Target</h3>
                <p>${totalTarget.toFixed(2)}</p>
            </div>
          
            <div className={`dashboard-card ${nearingDeadlineGoals > 0 ? 'alert' : ''}`}> 
                <h3>Nearing Deadline</h3>
                <p>{nearingDeadlineGoals}</p>
            </div>
        </div>
    );
}

export default OverviewDashboard;