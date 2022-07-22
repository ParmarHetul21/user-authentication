# UAT

UAT is a project which is used for integrating in any node project. It has all the user API's with swagger and proper authentication using passport.

[localhost](http://localhost:3000/)

My main inspiration for this project was that, whenever some developer start the project, they start with the user authntication, it takes time,So saving the time and buidling the project as soon as possible.

Also, I decided to bring together all my learnings into one place and analyze how I have improved and how I need to continue further in my journey.

### Technologies Used

**Backend**

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose
-   Passport-jwt
-   bcrypt-js
-   passport-js

Other related and helpful libraries are used in the project for smooth development.

## Folder Structure (src/)

| Directory | Description                                                |
| --------- | ---------------------------------------------------------- |
| `/users`  | User related logic (e.g. Login, User Profile, Wallet etc.) |

### Requirements

-   Node.js 12+ & NPM 6
-   MongoDB
-   MongoDB Compass

### Environment Variables

There are some environment variables that you need to define inside `.env` file in the project.

```
MONGO_USERNAME=mongouser
MONGO_PASSWORD=mongopassword
PORT=PORT
MONGO_URL=MONGO_URL
JWT_SECRET=JWT_SECRET
```

You can configure the database connection in `db.js` file in `src/config` folder.

### Commands

```bash
# install dependencies for backend
$ npm install

# run backend
$ npm run dev
```
