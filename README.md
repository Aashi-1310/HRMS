# HRMS Leave Management System

A simple web-based Human Resource Management System designed for managing employee leave applications. Built using **HTML, CSS, and JavaScript**, with `localStorage` handling data persistence.

---

## Project Overview

This system allows employees to apply for leaves and managers to approve or reject those requests. It includes:

- Employee & Manager login/signup
- Leave application form
- Leave history tracking
- Manager approval dashboard
- Role-based redirection and access

---

## How to Run the Project

1. **Clone or Download the Repository**
   - Download the ZIP

2. **Open `login.html`**
   - Simply open the `login.html` file in your browser to start using the system.

3. **Choose Role**
   - Add `?role=employee` or `?role=manager` in the URL to access different views:  
     - Example for employee: `login.html?role=employee`  
     - Example for manager: `login.html?role=manager`

4. **Login or Register**
   - New users can register with their role.
   - After login:
     - Employees go to `applyLeave.html`
     - Managers go to `approval.html`

---

## Screenshots

> Add screenshots by placing image files in your project and using markdown syntax like:
![Login Page](screenshots/login.png)
![Leave Application](screenshots/apply_leave.png)
![Manager Dashboard](screenshots/manager_dashboard.png)

---
## Learning Outcomes

Practiced HTML forms and input validation   
Designed responsive UI with CSS   
Implemented role-based login/signup system   
Used JavaScript DOM manipulation for form handling and table generation   
Learned to use localStorage for persisting data without a backend   
Improved understanding of modular coding and user interface behavior

