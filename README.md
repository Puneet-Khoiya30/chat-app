# MERN Chat App

A real-time chat application built using the MERN (MongoDB, Express, React, Node.js) stack.

## Features

- Real-time messaging
- User authentication (Sign up, Login)
- Responsive design
- Group and private chats
- Online/offline status indicators

## Technologies Used

- **Frontend**: React, Redux, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-time Communication**: Socket.IO

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Puneet-Khoiya30/chat-app.git
    cd chat-app
    ```

2. Install dependencies for both client and server:
    ```bash
    cd client
    npm install
    cd ../server
    npm install
    ```

3. Create a `.env` file in the `server` directory and configure the following:
    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the development servers:
    ```bash
    # In the client directory
    npm start

    # In the server directory
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

```
mern-chat-app/
├── client/       # React frontend
├── server/       # Node.js backend
├── README.md     # Project documentation
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
