
const baseUrl = "https://phase2-code-challenge-61m8.onrender.com/goals";

// Function to get all goals from the server
const getGoals = () => {
    return fetch(baseUrl)
        .then(response => {
            if (!response.ok) {
                console.error(`HTTP error! Status: ${response.status}`);
                return null; 
            }
            return response.json();
        })
        .catch(error => {
            console.error("Error fetching goals:", error);
            return null; 
        });
};

// Function to add a new goal to the server
const addGoal = (newGoal) => {
    return fetch(baseUrl, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(newGoal), //converting our new goal object into JSON text
    })
    .then(response => {
        if (!response.ok) {
            console.error(`HTTP error! Status: ${response.status}`);
            return null; 
        }
        return response.json(); // server  sends back newly created item
    })
    .catch(error => {
        console.error("Error adding goal:", error);
        return null; 
    });
};

// Function to update an existing goal on the server
const updateGoal = (id, updatedFields) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'PATCH', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFields), // send only fields that changed
    })
    .then(response => {
        if (!response.ok) {
            console.error(`HTTP error! Status: ${response.status}`);
            return null; 
        }
        return response.json(); //server sends back updated item
    })
    .catch(error => {
        console.error(`Error updating goal ${id}:`, error);
        return null; 
    });
};

// Function to delete a goal from the server
const deleteGoal = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) {
            console.error(`HTTP error! Status: ${response.status}`);
            return false; 
        }
        return true; 
    })
    .catch(error => {
        console.error(`Error deleting goal ${id}:`, error);
        return false; 
    });
};

// Exporting all functions 
export {
    getGoals,
    addGoal,
    updateGoal,
    deleteGoal
};