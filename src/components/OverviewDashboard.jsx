import React from 'react';

// OverviewDashboard receives the list of goals to calculate statistics
const OverviewDashboard = ({ goals }) => {
    // Calculate total number of goals
    const totalGoals = goals.length;

    // Calculate total money saved across all goals
    const totalMoneySaved = goals.reduce((sum, goal) => sum + goal.savedAmount, 0);

    // Calculate goals completed
    const goalsCompleted = goals.filter(goal => goal.savedAmount >= goal.targetAmount).length;

    // Filter goals for warnings and overdue status
    const today = new Date();
    const goalsWithStatus = goals.map(goal => {
        const deadlineDate = new Date(goal.deadline);
        const timeDiff = deadlineDate.getTime() - today.getTime();
        const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        let status = '';
        if (goal.savedAmount >= goal.targetAmount) {
            status = 'Completed';
        } else if (daysLeft <= 30 && daysLeft > 0) {
            status = 'Warning';
        } else if (daysLeft <= 0) {
            status = 'Overdue';
        }
        return { ...goal, daysLeft, status };
    });

    const goalsNearingDeadline = goalsWithStatus.filter(goal => goal.status === 'Warning');
    const goalsOverdue = goalsWithStatus.filter(goal => goal.status === 'Overdue');


    return (
        <div className="overview-dashboard">
            <h2>Savings Overview</h2>
            <div className="overview-stats">
                <div className="stat-card">
                    <h3>Total Goals</h3>
                    <p>{totalGoals}</p>
                </div>
                <div className="stat-card">
                    <h3>Total Saved</h3>
                    <p>Kes {totalMoneySaved.toFixed(2)}</p>
                </div>
                <div className="stat-card">
                    <h3>Goals Completed</h3>
                    <p>{goalsCompleted}</p>
                </div>
            </div>

            {/* Display time left for each active goal */}
            <h3>Goals Status</h3>
            <div className="goal-status-list">
                {goals.map(goal => {
                    const deadlineDate = new Date(goal.deadline);
                    const timeDiff = deadlineDate.getTime() - today.getTime();
                    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
                    const isCompleted = goal.savedAmount >= goal.targetAmount;

                    let statusText = '';
                    let statusClass = '';

                    if (isCompleted) {
                        statusText = 'Completed!';
                        statusClass = 'status-completed';
                    } else if (daysLeft <= 0) {
                        statusText = 'Overdue!';
                        statusClass = 'status-overdue';
                    } else if (daysLeft <= 30) {
                        statusText = `${daysLeft} days left (Warning!)`;
                        statusClass = 'status-warning';
                    } else {
                        statusText = `${daysLeft} days left`;
                        statusClass = 'status-active';
                    }

                    return (
                        <p key={goal.id}>
                            <strong>{goal.name}:</strong> <span className={statusClass}>{statusText}</span>
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export default OverviewDashboard;