### README.md

# Simple MyApp

Simple application. Demo change balance user

## Prerequisites

- Node.js (>= 12.x)
- PostgreSQL

## Setup

1. **Clone the repository:**

    ```sh
    git clone https://github.com/i-plc-rus/myapp.git
    cd myapp
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory with the following content:

    ```dotenv
    DB_USERNAME=your_username
    DB_PASSWORD=your_password
    DB_DATABASE=your_database
    DB_HOST=127.0.0.1
    DB_PORT=5432
    DB_DIALECT=postgres
    ```

    
4. **Migrations for simplicity in start app**

## Running the Application

1. **Dev environment:**

    To run the server in the test environment, use:

    ```sh
    npm run start:dev
    ```

    By default, the server will run on `http://localhost:3000`.

## Routes

### Update User Balance

**Endpoint:** `POST /update-balance`

**Description:** Updates the balance of a user. The balance cannot be negative.

**Request Body:**

- `userId` (integer): userId.
- `amount` (integer): amount.

**Example Request:**

```sh
curl -X POST http://localhost:3000/update-balance \
-H "Content-Type: application/json" \
-d '{
  "userId": 1,
  "amount": -2
}'
```

**Example Response:**

- **Success (200):**

    ```json
    {
      "userId": 1,
      "balance": 9998,
      "createdAt": "2024-07-09T00:00:00.000Z",
      "updatedAt": "2024-07-09T00:00:00.000Z"
    }
    ```

- **Insufficient Balance (400):**

    ```json
    {
      "error": "Insufficient balance"
    }
    ```

- **User Not Found (404):**

    ```json
    {
      "error": "User not found"
    }
    ```

## Development

### Project Structure

- **controllers/**
  - `userController.js`: logic.
- **middlewares/**
  - `validation.js`: Validation.
- **migrations/**
  - `20230709000000-create-user.js`: Migration file.
- **models/**
  - `index.js`: Model definition.
- **services/**
  - `userService.js`: Business logic for updating user balance.
- **index.js**: Entry point of the application.
