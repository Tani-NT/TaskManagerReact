const employee = [
    {
        "id": 1,
        "name": "Alice",
        "email": "alice@example.com",
        "password": "123",
        "taskNumber": 2,
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "failTask": 0,
            "acceptTask": 2,
            "completeTask": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "failTask": false,
                "acceptTask": true,
                "completeTask": false,
                "taskTitle": "Prepare Report",
                "taskDescription": "Prepare the monthly financial report.",
                "category": "Finance",
                "date": "2024-11-20"
            },
            {
                "active": false,
                "newTask": false,
                "failTask": false,
                "acceptTask": true,
                "completeTask": true,
                "taskTitle": "Team Meeting",
                "taskDescription": "Organize the team meeting for next week.",
                "category": "Management",
                "date": "2024-11-15"
            }
        ]
    },
    {
        "id": 2,
        "name": "Bob",
        "email": "bob@example.com",
        "password": "123",
        "taskNumber": 2,
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "failTask": 0,
            "acceptTask": 1,
            "completeTask": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "failTask": false,
                "acceptTask": true,
                "completeTask": false,
                "taskTitle": "Client Follow-up",
                "taskDescription": "Follow up with the client regarding project updates.",
                "category": "Communication",
                "date": "2024-11-22"
            },
            {
                "active": false,
                "newTask": true,
                "failTask": false,
                "acceptTask": false,
                "completeTask": false,
                "taskTitle": "Code Review",
                "taskDescription": "Review the codebase for potential bugs.",
                "category": "Development",
                "date": "2024-11-18"
            }
        ]
    },
    {
        "id": 3,
        "name": "Charlie",
        "email": "charlie@example.com",
        "password": "123",
        "taskNumber": 2,
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "failTask": 1,
            "acceptTask": 2,
            "completeTask": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "failTask": true,
                "acceptTask": true,
                "completeTask": false,
                "taskTitle": "Inventory Check",
                "taskDescription": "Verify the stock inventory for discrepancies.",
                "category": "Logistics",
                "date": "2024-11-17"
            },
            {
                "active": true,
                "newTask": true,
                "failTask": false,
                "acceptTask": true,
                "completeTask": false,
                "taskTitle": "System Upgrade",
                "taskDescription": "Upgrade the system to the latest version.",
                "category": "IT",
                "date": "2024-11-23"
            }
        ]
    },
    {
        "id": 4,
        "name": "David",
        "email": "david@example.com",
        "password": "123",
        "taskNumber": 2,
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "failTask": 1,
            "acceptTask": 1,
            "completeTask": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "failTask": false,
                "acceptTask": true,
                "completeTask": true,
                "taskTitle": "Social Media Campaign",
                "taskDescription": "Plan the new social media marketing campaign.",
                "category": "Marketing",
                "date": "2024-11-21"
            },
            {
                "active": false,
                "newTask": false,
                "failTask": true,
                "acceptTask": false,
                "completeTask": false,
                "taskTitle": "Budget Analysis",
                "taskDescription": "Analyze the quarterly budget and suggest improvements.",
                "category": "Finance",
                "date": "2024-11-14"
            }
        ]
    },
    {
        "id": 5,
        "name": "Eva",
        "email": "eva@example.com",
        "password": "123",
        "taskNumber": 2,
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "failTask": 0,
            "acceptTask": 2,
            "completeTask": 1
        },
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "failTask": false,
                "acceptTask": true,
                "completeTask": true,
                "taskTitle": "Content Creation",
                "taskDescription": "Draft the blog content for the upcoming campaign.",
                "category": "Content",
                "date": "2024-11-16"
            },
            {
                "active": true,
                "newTask": true,
                "failTask": false,
                "acceptTask": true,
                "completeTask": false,
                "taskTitle": "Client Presentation",
                "taskDescription": "Prepare slides for the client presentation.",
                "category": "Sales",
                "date": "2024-11-25"
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "name": "AdminUser",
        "email": "adminuser@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employee));
    localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employee = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    
    return { employee, admin };
};
