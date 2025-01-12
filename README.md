# Dwellio - Home Rental Website
Dwellio is a user-friendly home rental website built using full-stack

## Table of Contents 
1. [Project Setup](#project-setup)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Project](#running-the-project)
2. [Technologies Used](#technologies-used) 
3. [Screenshots](#screenshots) 

## Project Setup

### Prerequisites
- **Node.js**: Ensure you have Node.js installed. You can download it from [Node.js](https://nodejs.org/). 
- **npm or Yarn**: Node Package Manager, which comes with Node.js, or Yarn, if you prefer.

### Installation

#### Clone the Repository
    ```
    git clone https://github.com/NoScopeJedi83/Dwellio-Home-Rental-Website.git
    
    cd Dwellio-Home-Rental-Website/
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
            mongodb+srv://atharvgro2003:atharv3053@cluster0.xxsuqdj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
            ```

        - In .env file add above string as,
            ```
            MONGO_URL='mongodb+srv://atharvgro2003:atharv3053@cluster0.xxsuqdj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
            ```

    - **Add JWT Token**:
        - Add JWT token as, 
        ```
            JWT_SECRET = "***********"
        ```
        - Since this website is linked with my personal MongoDB cluster, the JWT token can be obtained by mailing me at atharvgro2003@gmail.com and mentioning the same and the need for the token (for security purposes).

    - **Guest user credentials**

        - On the sign in page use following credentials. It will give you guest user's access without registration.
        
            ```
            email: guest123@email.com
            password: guestperson
            ```



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
    npm start
    ```

#### Start the server
    ```
    cd server
    npm start
    ```

## Technologies Used
- Frontend,
    - React.js
    - Tailwind CSS

- Backend:
    - Express.js
    - Mongoose
    - MongoDB
    - MongoDB Atlas
    - JWT (JSON Web Tokens)


## Screenshots

<table>
    <tr>Authentication</tr>
    <tr>
        <td><img src="client/public/assets/signup.png" /> </td>
        <td><img src="client/public/assets/Signin.png" /></td>
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
