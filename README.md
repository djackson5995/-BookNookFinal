# 📚 Book library / React/ASP.NET JWT

This project is Book library using **React** for the frontend and **ASP.NET Core** for the backend, utilizing **JWT (JSON Web Tokens)** for authentication. The application allows users to register, log in, and search for books using the Google Books API.

## 📖 Overview

The Book library project provides a robust foundation for building web applications with user authentication and data fetching capabilities. It includes essential components such as a **navbar**, **search functionality**, and **protected routes** to secure pages for authenticated users.

## 🚀 Features

- **User Authentication**: Register and log in using JWT for secure access to protected routes.
- **Protected Routes**: Only authenticated users can access certain pages, ensuring security.
- **Search Functionality**: Search for books using the Google Books API and display results.
- **Dynamic Navigation**: A responsive navbar that updates based on user authentication status.

## 🛠️ Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: A standard library for routing in React.
- **ASP.NET Core**: Backend framework for building web APIs.
- **JWT (JSON Web Tokens)**: A compact, URL-safe means of representing claims to be transferred between two parties.
- **Axios**: A promise-based HTTP client for making requests to the backend and external APIs.
- **Google Books API**: Used to fetch book information based on user search queries.

## 📂 Project Structure

- **`/components`**: Reusable UI components such as `NavBar`, `SearchBar`, and `ResultsList`.
- **`/pages`**: Different pages of the application including `HomePage`, `LoginPage`, `RegisterPage`, and `SearchPage`.
- **`/hooks`**: Custom hooks such as `useAuth` for managing user authentication.
- **`/App.js`**: Main application file that sets up routing and integrates components.

## 📝 How to Run the Project

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine.
- **.NET Core SDK**: Required for running the backend API.

