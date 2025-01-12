# HealthCheckPro_Infosys_Internship_Oct2024_Team_03
Health Check Pro is a user-friendly health website built using the MERN stack

## Table of Contents 
1. [Project Setup](#project-setup)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Project](#running-the-project)
2. [Technologies Used](#technologies-used) 
3. [Project Structure](#project-structure) 
4. [Screenshots](#screenshots) 

## Project Setup

### Prerequisites
- **Node.js**: Ensure you have Node.js installed. You can download it from [Node.js](https://nodejs.org/). 
- **npm or Yarn**: Node Package Manager, which comes with Node.js, or Yarn, if you prefer.

### Installation

#### Clone the Repository
    ```
    git clone https://github.com/springboardmentor-104/HealthCheckPro_Infosys_Internship_Oct2024_Team_03.git
    
    cd HealthCheckPro_Infosys_Internship_Oct2024_Team_03/
    ```

#### Install Dependencies
Remember to change the branch first, from "main" to "Milestone3-Integration"

- For client
    ```
    cd client
    npm install
    ```

- For server
    ```
    cd server
    npm install
    npm install -g nodemon
    ```

#### Environment Configuration
Create a .env file in the server/ folder.

Note: If you only want to test the website then use first step only i.e 'For demo usage'

- **For demo usage**

    - **Use Provided Demo Credentials**:

        - We've set up a demo MongoDB database for you to use.

        - You **don't need to create your own MongoDB Atlas account** or set up a cluster.
    
    - **Demo MongoDB URI**:

        - Use the following connection string in your .env file
            ```
            mongodb+srv://guest:0W3LubzJfT7BBas3@cluster0.8d8rq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
            ```

        - In .env file add above string as,
            ```
            MONGODB_URI="mongodb+srv://guest:0W3LubzJfT7BBas3@cluster0.8d8rq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
            ```

    - **Add JWT Token**:
        - Add JWT token as, 
        ```
            JWT_SECRET="secret-healthcheck-001"
        ```

    - **Guest user credentials**

        - On '/signin' page use following credentials. It will give you guest user's access without registration.
        
            ```
            email: guest123@demo.com
            password: guest@123
            ```


- **Nodemailer setup:**
    - We’re using Gmail to send emails. First, turn on 2-step verification for your Google account.
        <br>
        <img src="./assets/2fa.png" width=50%>

    - Search for App passwords
        <br>
        <img src="./assets/app-pass.png" width=50%>

    - Go to 'App passwords' and create a new password for the application.
        <br>
        <img src="./assets/app-name.png" width=50%>

    - Copy the password
        <br>
        <img src="./assets/pass.png" width=50%>

    - Add that copied password and email to the .env file of the server/ folder.
        <br>
        <img src="./assets/env-email-pass.png" width=50%>

- **MongoDB Atlas Setup**
    -	Create a new project on MongoDB Atlas and set up a cluster. (for this you can watch youtube videos)
    -	Go to the cluster overview and click on 'Connect'.
            <br>
            <img src="./assets/overview.png" width=50%>
    
    -	Choose ‘Drivers’ and select ‘Driver’ as ‘node.js’
        <br>
        <img src="./assets/connect.png" width=50%>
    
    -	Copy and paste the connection string into the ‘.env’ file. Replace the placeholder <db_password> with your actual password.
        <br>
        <img src="./assets/env-uri.png" width=50%>



### Running the Project

#### Start the client
    ```
    cd client
    npm run dev
    ```

#### Start the server
    ```
    cd server
    nodemon
    ```

## Technologies Used
- Frontend,
    - React.js
    - Tailwind CSS
    - Radix UI

- Backend:
    - Express.js
    - Mongoose
    - MongoDB
    - MongoDB Atlas
    - Nodemailer
    - JWT (JSON Web Tokens)
    - Bcrypt

## Project Structure

```
client/
|-- public/                  # Static files like images, fonts, etc.
|-- src/                     # Source code for the application
|   |-- app/                 # Application-level components and configuration
|   |-- assets/              # Images, fonts, and other static assets
|   |-- components/          # Reusable UI components
|   |-- features/            # Feature-specific components and logic
|   |-- pages/               # Page components for different routes
|   |-- utils/               # Utility functions and helpers
|   |-- App.css              # Main stylesheet for the application
|   |-- App.jsx              # Main application component
|   |-- index.css            # Global stylesheet
|   |-- index.jsx            # Entry point for the React application
|   |-- Layout.jsx           # Layout component
|   |-- Routes.jsx           # Route definitions
|-- .gitignore               # Git ignore file
|-- eslint.config.js         # ESLint configuration
|-- index.html               # HTML template for the application
|-- package-lock.json        # Lock file for npm
|-- package.json             # Project metadata and dependencies
|-- postcss.config.js        # PostCSS configuration
|-- README.md                # Project documentation
|-- tailwind.config.js       # Tailwind CSS configuration
|-- vite.config.js           # Vite configuration

server/
|-- config/                  # Configuration files
|-- controllers/             # Route handlers and business logic
|-- middlewares/             # Express middlewares
|-- models/                  # Mongoose models
|-- routes/                  # API route definitions
|-- utils/                   # Utility functions
|-- .env                     # Environment variables
|-- index.js                 # Entry point for the server
|-- package-lock.json        # Lock file for npm
|-- package.json             # Project metadata and dependencies

```

## Screenshots

<table>
    <tr>Authentication</tr>
    <tr>
        <td><img src="assets/Register.png" /> </td>
        <td><img src="assets/Signin.png" /></td>
        <td><img src="assets/Forgot.png" /></td>
    </tr>
</table>
<table>
    <tr>Dashboard</tr>
    <tr>
        <td><img src="assets/dashboard.png" /> </td>
        <td><img src="assets/history.png" /></td>
    </tr>
</table>
<table>
    <tr>Assessment</tr>
    <tr>
        <td><img src="assets/assessment.png" /> </td>
    </tr>
</table>
<table>
    <tr>Report</tr>
    <tr>
        <td><img src="assets/report1.png" /> </td>
        <td><img src="assets/report2.png" /></td>
        <td><img src="assets/report3.png" /></td>
    </tr>
</table>