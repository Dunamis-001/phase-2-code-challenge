import React, { useState, useEffect } from 'react';
import { getGoals, addGoal, updateGoal, deleteGoal } from './services/goalService';
import GoalList from './components/GoalList';
import AddGoalForm from './components/AddGoalForm';
import EditGoalForm from './components/EditGoalForm';
import DepositForm from './components/DepositForm';
import OverviewDashboard from './components/OverviewDashboard';

import './App.css'; // Import the CSS file

function App() {
    // State to hold all the goals
    const [goals, setGoals] = useState([]);
    // State to control which form is visible for editing
    const [editingGoal, setEditingGoal] = useState(null); // Holds the goal object being edited
    // State to control which form is visible for depositing
    const [depositingGoalId, setDepositingGoalId] = useState(null); // Holds the ID of the goal for deposit

    // useEffect to load goals when the component mounts
    useEffect(() => {
        // In a real app, you'd use async/await with fetch here
        const fetchedGoals = getGoals();
        setGoals(fetchedGoals);
    }, []); // Empty dependency array means this runs once on mount

    // Function to handle adding a new goal
    const handleAddGoal = (newGoal) => {
        const added = addGoal(newGoal);
        setGoals([...goals, added]); // Add the new goal to the existing list
    };

    // Function to handle updating an existing goal
    const handleUpdateGoal = (updatedGoal) => {
        const updated = updateGoal(updatedGoal.id, updatedGoal);
        if (updated) {
            setGoals(goals.map(goal => goal.id === updated.id ? updated : goal));
            setEditingGoal(null); // Exit edit mode
        } else {
            alert('Could not update goal.');
        }
    };

    // Function to handle deleting a goal
    const handleDeleteGoal = (id) => {
        if (window.confirm('Are you sure you want to delete this goal?')) {
            const isDeleted = deleteGoal(id);
            if (isDeleted) {
                setGoals(goals.filter(goal => goal.id !== id));
            } else {
                alert('Could not delete goal.');
            }
        }
    };

    // Function to handle making a deposit
    const handleMakeDeposit = (id, amount) => {
        const goalToUpdate = goals.find(goal => goal.id === id);
        if (goalToUpdate) {
            const newSavedAmount = goalToUpdate.savedAmount + amount;
            const updated = updateGoal(id, { savedAmount: newSavedAmount });
            if (updated) {
                setGoals(goals.map(goal => goal.id === updated.id ? updated : goal));
                setDepositingGoalId(null); // Exit deposit mode
            } else {
                alert('Could not make deposit.');
            }
        }
    };

    // Function to set the goal being edited
    const startEditing = (goal) => {
        setEditingGoal(goal);
        setDepositingGoalId(null); // Close deposit form if open
    };

    // Function to cancel editing
    const cancelEditing = () => {
        setEditingGoal(null);
    };

    // Function to set the goal for deposit
    const startDepositing = (id) => {
        setDepositingGoalId(id);
        setEditingGoal(null); // Close edit form if open
    };

    // Function to cancel depositing
    const cancelDepositing = () => {
        setDepositingGoalId(null);
    };


    return (
        <div className="App">
            <h1>Smart Goal Planner</h1>

            <OverviewDashboard goals={goals} />

            {/* Conditionally render forms based on state */}
            {editingGoal ? (
                <EditGoalForm
                    goalToEdit={editingGoal}
                    onUpdateGoal={handleUpdateGoal}
                    onCancelEdit={cancelEditing}
                />
            ) : depositingGoalId ? (
                <DepositForm
                    goalId={depositingGoalId}
                    onMakeDeposit={handleMakeDeposit}
                    onCancelDeposit={cancelDepositing}
                />
            ) : (
                <AddGoalForm onAddGoal={handleAddGoal} />
            )}

            <h2>Your Savings Goals</h2>
            {/* Pass goals and action functions to GoalList */}
            <GoalList
                goals={goals}
                onEditGoal={startEditing}
                onDeleteGoal={handleDeleteGoal}
                onDepositToGoal={startDepositing}
            />
        </div>
    );
}

export default App;