import React, { useState, useEffect } from 'react';
import { getGoals, addGoal, updateGoal, deleteGoal } from './services/goalService';
import GoalList from './components/GoalList';
import AddGoalForm from './components/AddGoalForm';
import EditGoalForm from './components/EditGoalForm';
import DepositForm from './components/DepositForm';
import OverviewDashboard from './components/OverviewDashboard';
import './App.css'; 

function App() {
    
    const [goals, setGoals] = useState([]);

    const [loading, setLoading] = useState(true);
    
    const [error, setError] = useState(null);

    const [editingGoal, setEditingGoal] = useState(null);
  
    const [depositingGoalId, setDepositingGoalId] = useState(null);

    // useEffect hook to fetch all goals
    useEffect(() => {
        setLoading(true); 
        setError(null);   
        getGoals()
            .then(fetchedGoals => {
                // If fetchedGoals is null, an error occurred in goalService
                if (fetchedGoals === null) {
                    setError("Failed to load goals. Please ensure json-server is running.");
                } else {
                    setGoals(fetchedGoals); // Update goals state with fetched data
                }
            })
           
            .finally(() => {
                setLoading(false); 
            });
    }, []); 

    const handleAddGoal = (newGoalData) => {
        addGoal(newGoalData)
            .then(addedGoal => {
               
                if (addedGoal === null) {
                    setError("Failed to add goal.");
                } else {
                    setGoals((prevGoals) => [...prevGoals, addedGoal]); // Add new goal to the list
                    setEditingGoal(null);    
                    setDepositingGoalId(null); 
                }
            })
            .catch(err => {
                setError("An unexpected error occurred while adding goal.");
                console.error("Unexpected error adding goal in App:", err);
            });
    };

    
    const handleUpdateGoal = (id, updatedFields) => {
        updateGoal(id, updatedFields)
            .then(updated => {
             
                if (updated === null) {
                    setError("Failed to update goal.");
                } else {
                    // Update the specific goal in the goals list
                    setGoals(goals.map(goal => goal.id === updated.id ? updated : goal));
                    setEditingGoal(null); 
                }
            })
            .catch(err => {
                setError("An unexpected error occurred while updating goal.");
                console.error("Unexpected error updating goal in App:", err);
            });
    };

   
    const handleDeleteGoal = (id) => {
       
        if (window.confirm('Are you sure you want to delete this goal?')) {
            deleteGoal(id)
                .then(isDeleted => {
                   
                    if (isDeleted === false) {
                        setError('Failed to delete goal.');
                    } else {
                        // Remove the deleted goal from the list
                        setGoals(goals.filter(goal => goal.id !== id));
                    }
                })
                .catch(err => {
                    setError("An unexpected error occurred while deleting goal.");
                    console.error("Unexpected error deleting goal in App:", err);
                });
        }
    };


    const handleMakeDeposit = (id, amount) => {
        const goalToUpdate = goals.find(goal => goal.id === id);
        if (goalToUpdate) {
            // Calculate the new saved amount
            const newSavedAmount = goalToUpdate.savedAmount + parseFloat(amount);
            updateGoal(id, { savedAmount: newSavedAmount })
                .then(updated => {
                   
                    if (updated === null) {
                        setError("Failed to make deposit.");
                    } else {
                        // Update the goal with the new saved amount
                        setGoals(goals.map(goal => goal.id === updated.id ? updated : goal));
                        setDepositingGoalId(null); 
                    }
                })
            
        }
    };

  
    const startEditing = (goal) => {
        setEditingGoal(goal);      // Set the goal to be edited
        setDepositingGoalId(null); 
    };

    const cancelEditing = () => {
        setEditingGoal(null); // Clear editing state
    };

    const startDepositing = (id) => {
        setDepositingGoalId(id);   // Set the goal ID for deposit
        setEditingGoal(null);     
    };

    const cancelDepositing = () => {
        setDepositingGoalId(null); // Clear depositing state
    };

    
    // Show loading message if data is still being fetched
    if (loading) {
        return <div className="App"><p>Loading goals... Please ensure json-server is running.</p></div>;
    }

 

    // Find the goal currently selected for deposit, if any
    const currentDepositingGoal = goals.find(goal => goal.id === depositingGoalId);

    return (
        <div className="App">
            <h1>Smart Goal Planner</h1>

            <OverviewDashboard goals={goals} />

            <hr /> 

           
            {editingGoal ? (
                <EditGoalForm
                    goalToEdit={editingGoal}
                    onUpdateGoal={handleUpdateGoal}
                    onCancelEdit={cancelEditing}
                />
            ) : depositingGoalId && currentDepositingGoal ? (
                <DepositForm
                    goalId={depositingGoalId}
                    goalName={currentDepositingGoal.name}
                    onMakeDeposit={handleMakeDeposit}
                    onCancelDeposit={cancelDepositing}
                />
            ) : (
                
                <AddGoalForm onAddGoal={handleAddGoal} />
            )}

            <hr /> 

            <h2>Your Savings Goals</h2>
            <GoalList
                goals={goals}
                onEditGoal={startEditing}
                onDeleteGoal={handleDeleteGoal}
                onDepositToGoal={startDepositing}
            />

            {goals.length === 0 && !loading && !error && <p>No goals yet! Add a new goal to get started.</p>}
        </div>
    );
}

export default App;