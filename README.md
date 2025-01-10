# Campaign Management App - Backend

This is the backend for the **Campaign Management App**, built using **NestJS** and connected to a **MongoDB** database. It handles the business logic, user authentication, campaign management, and influencer submissions.

The backend is served on **http://localhost:3000**.

## Prerequisites

Before running the app, ensure you have the following installed:

- **Node.js** (v18 or later)
- **MongoDB** (locally or through a cloud provider like MongoDB Atlas)
- **Git** (for cloning the repository)

## Project Setup

### 1. Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone https://github.com/Aimeeumuhoza/Campaign-management-api.git
cd Campaign-management-api
```

### 2. Install Dependencies

Navigate to the `backend` folder and install the necessary dependencies:

```bash
cd backend
npm install
```

This will install all the required dependencies specified in the `package.json` file.

### 3. Configure Environment Variables

You need to configure environment variables for the application. Create a `.env` file in the root of the `backend` directory with the following content:


### 4. Run the Development Server

To start the backend server in development mode, use the following command:

```bash
npm run start:dev
```

This will start the backend server and it will be accessible at:

```
http://localhost:3000
```

### 5. Testing the API

Once the backend server is running, you can start testing the API. The following endpoints are available:

- **POST** `/auth/login`: Authenticate a user and receive a JWT token.
- **GET** `/campaigns/all`: Get a list of all campaigns.
- **GET** `/campaigns/influencers/status/{campaignId}`: Get all influencer submissions for a specific campaign.
- **PATCH** `/campaigns/submission/{campaignId}`: Approve or reject an influencer submission.

## Key Features

- **User Authentication**: JWT-based authentication for both influencers and brands.
- **Campaign Management**: Manage campaigns and retrieve submissions.
- **Influencer Submissions**: Approve or reject influencer submissions for each campaign.

## Database Configuration

This app uses **MongoDB** to store user and campaign data. You can either run MongoDB locally or use a cloud-based MongoDB service like **MongoDB Atlas**.

## Development Scripts

- **Start Development Server**:  
  Start the local development server:
  ```bash
  npm run start:dev
  ```

