
const initialGoals = [
    {
        "id": "1",
        "name": "Travel Fund - Japan",
        "targetAmount": 5000,
        "savedAmount": 3200,
        "category": "Travel",
        "deadline": "2025-12-31",
        "createdAt": "2024-01-15"
    },
    {
        "id": "2",
        "name": "Emergency Fund",
        "targetAmount": 10000,
        "savedAmount": 7500,
        "category": "Emergency",
        "deadline": "2026-06-30",
        "createdAt": "2023-05-01"
    },
    {
        "id": "3",
        "name": "New Laptop",
        "targetAmount": 1500,
        "savedAmount": 1500,
        "category": "Electronics",
        "deadline": "2024-07-20", // This one is completed and almost due
        "createdAt": "2024-03-10"
    },
    {
        "id": "4",
        "name": "Down Payment - House",
        "targetAmount": 50000,
        "savedAmount": 12000,
        "category": "Real Estate",
        "deadline": "2027-12-31",
        "createdAt": "2024-02-01"
    },
    {
        "id": "5",
        "name": "Car Maintenance",
        "targetAmount": 800,
        "savedAmount": 600,
        "category": "Vehicle",
        "deadline": "2025-09-15",
        "createdAt": "2024-06-01"
    },
    {
        "id": "6",
        "name": "Education Fund",
        "targetAmount": 20000,
        "savedAmount": 5000,
        "category": "Education",
        "deadline": "2028-01-01",
        "createdAt": "2024-04-20"
    },
    {
        "id": "7",
        "name": "Holiday Gifts",
        "targetAmount": 1000,
        "savedAmount": 200,
        "category": "Shopping",
        "deadline": "2024-08-10", 
        "createdAt": "2024-07-01"
    },
    {
        "id": "8",
        "name": "New Phone",
        "targetAmount": 1200,
        "savedAmount": 0,
        "category": "Electronics",
        "deadline": "2025-01-31",
        "createdAt": "2024-07-10"
    },
    {
        "id": "9",
        "name": "Retirement Savings",
        "targetAmount": 100000,
        "savedAmount": 15000,
        "category": "Retirement",
        "deadline": "2035-01-01",
        "createdAt": "2023-01-01"
    },
    {
        "id": "10",
        "name": "Home Renovation",
        "targetAmount": 7500,
        "savedAmount": 1000,
        "category": "Home",
        "deadline": "2025-03-31",
        "createdAt": "2024-05-15"
    }
];


const baseUrl = "http://http://localhost:3000/goals";

// Function to get all goals (simulated)
const getGoals = () => {
   
    return initialGoals; 
};

// Function to add a new goal (simulated)
const addGoal = (newGoal) => {
   
    const id = (initialGoals.length + 1).toString(); // Simple ID generation
    const goalToAdd = { ...newGoal, id, createdAt: new Date().toISOString().split('T')[0] };
    initialGoals.push(goalToAdd);
    return goalToAdd; // Return the added goal with its new ID
};


const updateGoal = (id, updatedFields) => {


    const goalIndex = initialGoals.findIndex(goal => goal.id === id);
    if (goalIndex > -1) {
        initialGoals[goalIndex] = { ...initialGoals[goalIndex], ...updatedFields };
        return initialGoals[goalIndex];
    }
    return null; // Goal not found
};

// Function to delete a goal (simulated)
const deleteGoal = (id) => {


    const initialLength = initialGoals.length;
    const newGoals = initialGoals.filter(goal => goal.id !== id);
   
    initialGoals.length = 0; // Clear array
    initialGoals.push(...newGoals); // Repopulate with filtered goals
    return initialGoals.length < initialLength; // Return true if deleted
};

// Export all functions
export {
    getGoals,
    addGoal,
    updateGoal,
    deleteGoal
};