# CultureCheck – QA Story Board

A simple React web app where users can submit cultural “stories”.  
This project is designed as a **QA portfolio piece** to demonstrate:

- Front-end testing (manual + exploratory)
- Basic API / data-flow testing (mocked)
- Bug reporting with clear reproduction steps
- Writing test plans and test cases

---

## 🧩 Project Overview

The app lets a user:

1. Add a story with **Title** and **Description**
2. See all submitted stories in a list
3. Validate required fields (error message if fields are empty)
4. Clear the form after a successful submission

This is inspired by the **Kiwa Digital – Software Tester Intern** role and the idea of
testing an app related to culture and stories.

---

## 🛠 Tech Stack

- **Front-end:** React + Vite
- **Language:** JavaScript
- **Styling:** CSS (simple custom styles)
- **Package Manager:** npm
- **Tooling:**  
  - Git & GitHub for version control  
  - VS Code for development  

---

## 📁 Folder Structure

```text
culturecheck-qa-project/
│
├── frontend/                 # React + Vite application
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── StoryForm.jsx
│       │   └── StoryList.jsx
│       ├── App.jsx
│       ├── main.jsx
│       └── App.css
│
└── Documents/                # QA documentation
    ├── TEST_PLAN.md
    ├── TEST_CASES.md
    └── BUG_REPORT.md