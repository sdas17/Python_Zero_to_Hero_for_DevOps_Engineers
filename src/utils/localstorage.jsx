   const employees= [
    {
      "id": 1,
      "firstName": "Rajesh",
      "email": "employee1@example.com",
      "password": "123",
      "taskStats": {
        "active": 1,
        "newTask": 1,
        "complete": 1,
        "failed": 1,
        "total": 3
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "complete": false,
          "failed": false,
          "taskTitle": "Fix login bug",
          "taskDescription": "Resolve the login issue on mobile.",
          "taskDate": "2025-10-10",
          "taskCategory": "High"
        },
        {
          "active": false,
          "newTask": false,
          "complete": true,
          "failed": false,
          "taskTitle": "Update dashboard UI",
          "taskDescription": "Redesign the dashboard layout.",
          "taskDate": "2025-09-25",
          "taskCategory": "High"
        },
        {
          "active": false,
          "newTask": false,
          "complete": false,
          "failed": true,
          "taskTitle": "Deploy staging build",
          "taskDescription": "Deployment failed .",
          "taskDate": "2025-10-01",
          "taskCategory": "High"
        }
      ]
    },
    {
      "id": 2,
      "firstName": "Priya",
      "email": "employee2@example.com",
      "password": "456",
      "taskStats": {
        "active": 2,
        "newTask": 1,
        "complete": 1,
        "failed": 1,
        "total": 4
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "complete": false,
          "failed": false,
          "taskTitle": "Write test cases",
          "taskDescription": "Cover all API endpoints with unit tests.",
          "taskDate": "2025-10-16",
          "taskCategory": "High"
        },
        {
          "active": true,
          "newTask": false,
          "complete": false,
          "failed": false,
          "taskTitle": "Database cleanup",
          "taskDescription": "Remove unused test data.",
          "taskDate": "2025-10-15",
          "taskCategory": "Maintenance"
        },
        {
          "active": false,
          "newTask": false,
          "complete": true,
          "failed": false,
          "taskTitle": "Review PR #45",
          "taskDescription": "Code review for the new notification system.",
          "taskDate": "2025-10-12",
          "taskCategory": "Code Review"
        },
        {
          "active": false,
          "newTask": false,
          "complete": false,
          "failed": true,
          "taskTitle": "Fix broken links",
          "taskDescription": "Several 404 errors found in footer links.",
          "taskDate": "2025-10-09",
          "taskCategory": "QA"
        }
      ]
    },
    {
      "id": 3,
      "firstName": "Arjun",
      "email": "employee3@example.com",
      "password": "789",
      "taskStats": {
        "active": 1,
        "newTask": 1,
        "complete": 1,
        "failed": 0,
        "total": 3
      },
      "tasks": [
        {
          "active": false,
          "newTask": true,
          "complete": false,
          "failed": false,
          "taskTitle": "Design landing page",
          "taskDescription": "Create mockups for new product landing page.",
          "taskDate": "2025-10-17",
          "taskCategory": "Design"
        },
        {
          "active": true,
          "newTask": false,
          "complete": false,
          "failed": false,
          "taskTitle": "Implement auth module",
          "taskDescription": "Add OAuth login functionality.",
          "taskDate": "2025-10-18",
          "taskCategory": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "complete": true,
          "failed": false,
          "taskTitle": "Fix padding issue",
          "taskDescription": "CSS fix for header padding in mobile view.",
          "taskDate": "2025-10-14",
          "taskCategory": "Frontend"
        }
      ]
    },
    {
      "id": 4,
      "firstName": "Aisha",
      "email": "employee4@example.com",
      "password": "000",
      "taskStats": {
        "active": 2,
        "newTask": 2,
        "complete": 1,
        "failed": 1,
        "total": 5
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "complete": false,
          "failed": false,
          "taskTitle": "Set up CI/CD pipeline",
          "taskDescription": "Automate deployment with GitHub Actions.",
          "taskDate": "2025-10-18",
          "taskCategory": "DevOps"
        },
        {
          "active": true,
          "newTask": false,
          "complete": false,
          "failed": false,
          "taskTitle": "Write API documentation",
          "taskDescription": "Document all REST API endpoints.",
          "taskDate": "2025-10-16",
          "taskCategory": "Documentation"
        },
        {
          "active": false,
          "newTask": false,
          "complete": true,
          "failed": false,
          "taskTitle": "Integrate Stripe",
          "taskDescription": "Payment gateway integration completed.",
          "taskDate": "2025-10-10",
          "taskCategory": "Integration"
        },
        {
          "active": false,
          "newTask": false,
          "complete": false,
          "failed": true,
          "taskTitle": "Run security audit",
          "taskDescription": "Audit failed due to misconfigured roles.",
          "taskDate": "2025-10-13",
          "taskCategory": "Security"
        },
        {
          "active": false,
          "newTask": true,
          "complete": false,
          "failed": false,
          "taskTitle": "Backup database",
          "taskDescription": "Schedule daily backups.",
          "taskDate": "2025-10-19",
          "taskCategory": "Maintenance"
        }
      ]
    },
    {
      "id": 5,
      "firstName": "Vikram",
      "email": "employee5@example.com",
      "password": "111",
      "taskStats": {
        "active": 2,
        "newTask": 1,
        "complete": 1,
        "failed": 1,
        "total": 4
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "complete": false,
          "failed": false,
          "taskTitle": "Optimize queries",
          "taskDescription": "Improve performance of SQL queries.",
          "taskDate": "2025-10-18",
          "taskCategory": "Database"
        },
        {
          "active": false,
          "newTask": false,
          "complete": false,
          "failed": true,
          "taskTitle": "Fix image upload bug",
          "taskDescription": "Image not saving correctly in profile section.",
          "taskDate": "2025-10-15",
          "taskCategory": "Bug Fix"
        },
        {
          "active": false,
          "newTask": false,
          "complete": true,
          "failed": false,
          "taskTitle": "Conduct user testing",
          "taskDescription": "Feedback collected from 5 users.",
          "taskDate": "2025-10-12",
          "taskCategory": "UX"
        },
        {
          "active": true,
          "newTask": false,
          "complete": false,
          "failed": false,
          "taskTitle": "Add forgot password feature",
          "taskDescription": "Implement password reset via email.",
          "taskDate": "2025-10-17",
          "taskCategory": "Feature"
        }
      ]
    }
  ];
  const  admin =[
    {
    "id": 1,
    "firstName": "Rahul",
    "email": "admin@example.com",
    "password": "123"
  }
  ] 
export const setLocalStorage = () => {
  localStorage.setItem("employee", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employee_data = JSON.parse(localStorage.getItem("employee") || "[]");
  const admin_data = JSON.parse(localStorage.getItem("admin") || "[]");
  return { employee_data, admin_data };
};