# task-tracker-mvc
This project is a ticket tracking system for helpdesk ticket management

<img src="https://i.imgur.com/hOivI5I.gif" width="400px">

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Bootstrap, EJS, MongoDB

This app takes in client input and stores the ticket form input data to MongoDB to track helpdesk tickets. Once tickets are given a unique ID they are listed below the form to be worked on. Helpdesk mamagers can close and reopen specific tickets as they are worked on.

## Optimizations

I want to take this app further by adding user logins and tickets to be shown to appropriate users/helpdesk persons. Styling is something I want to enhance. It's basic bootstrap at the moment. This app would benefit with comments that could be added to each ticket and the ability for tickets to be sent back and forth to and from users for feedback.

---

# Install

`npm install`

---

# Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 3131 (can be any port example: 3000)
  - DB_STRING = `your database URI`

---

# Run

`npm start`
