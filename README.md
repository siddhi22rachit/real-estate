# Real Estate (owner side)

This project is a full-stack etate management application built with React, Node.js, Express.js, REST API's and MongoDB.

## Features

- Property listing and management
- Map integration for property locations
- Image upload functionality
- Slider image
-  Messaging system using socket.io
-  Filtering option also 

  ## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/siddhi22rachit/real-estate.git
   cd real-estate
   
2. to run server:

   Add .env file in api folder
     DATABASE_URL=your_mongodb_url
     JWT_SECRET_KEY=your_secret_key
     CLIENT_URL="localhost"
   
    ```bash
    cd api
    npx nodemon app.js

4. to run Frontend
   
    ```bash
    cd client
    cd real-estate
    npm run dev

5. to run socket.io
   
    ```bash
    cd socket
    npx nodemon app.js
    
    


