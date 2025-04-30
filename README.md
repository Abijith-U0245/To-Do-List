# 📝 To-Do List Web App

A full-stack To-Do List application built with **Node.js**, **Express.js**, and **Firebase**, allowing users to manage tasks efficiently with real-time synchronization and a sleek dark mode interface.

##  Live Demo

👉 [View the live app](https://my-todo-app-df810.web.app)


## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: Firebase Firestore
- **Hosting**: Firebase Hosting

## Features

- Add, edit, and delete tasks
- Categorize tasks (Work, Personal, Others)
- Mark tasks as completed
- Clear all tasks
- Dark mode interface
- Real-time data sync with Firebase

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/Abijith-U0245/To-Do-List.git
cd To-Do-List
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up Firebase**

Go to Firebase Console
Create a project and enable Firestore Database
Get your Firebase configuration
Add your config to the project in a .env file or directly in your JS: 

```env

FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id
```

4. **Run the app locally**

```bash
npm start
```

## 🗂 Project Structure

```php

To-Do-List/
├── public/             # Frontend assets (HTML, CSS, JS)
├── routes/             # Express route handlers
├── firebase/           # Firebase setup/configuration
├── app.js              # Main server file
├── package.json        # Project metadata and dependencies
```

## 📜 License

- This project is open source and available under the MIT License.



