# MERN Authentication

## Introduction

This is a simple authentication project where the user can register, login and logout.
<br>
The app is developed using MERN stack.

## Technologies

Project is created with `Vite + ReactJS`, `NodeJS`, `Express` and `MongoDB`.

Frontend dependencies

```
- react-router-dom
```

Backend dependencies

```
- express
- nodemon
- mongoose
- dotenv
- cors
- bcrypt
- jsonwebtoken
- cookie-parser
```

## Live Demo

Frontend is deployed on Vercel.
<br>
Since the server is deployed on Render, you may have to wait a minute for the first POST request to happen.
<br>
You can check it here: [https://kvcspat-mern-authentication.vercel.app/](https://kvcspat-mern-authentication.vercel.app/)

## Setup

Create a `.env` file inside the client directory and create the following variables

```
VITE_ENV = development
VITE_PROD_BASE_URL = Deployed backend server
VITE_DEV_BASE_URL = http://localhost:4000
VITE_LOGIN_ROUTE = '/api/auth/login'
VITE_SIGNUP_ROUTE = '/api/auth/signup'
```

Create a `.env` file inside the server directory and create the following variables

```
NODE_ENV = development
ORIGIN = Deployed frontend page
MONGODB_URI = Your mongodb URI
PORT = 4000
```

Install dependencies and run the project

```
$ cd server
$ npm install
$ npm run dev
```

```
$ cd client
$ npm install
$ npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Screenshots

![mern-auth-error-mail](https://github.com/kvcsPat/mern-register-login/assets/102482465/bfdd4fb4-a2f3-4ed9-84c4-936f75dd70d8)

![mern-auth-error-password](https://github.com/kvcsPat/mern-register-login/assets/102482465/37f797b7-f5d7-4293-a807-60b893febd11)

![mern-auth-register-success](https://github.com/kvcsPat/mern-register-login/assets/102482465/9ef1aa48-3f7a-4adb-9ae9-6dc33acd6e8d)

![mern-auth-error-login](https://github.com/kvcsPat/mern-register-login/assets/102482465/ac498c08-907e-4ecd-a61d-c709a70c03c0)

![mern-auth-login-success](https://github.com/kvcsPat/mern-register-login/assets/102482465/4095d644-f833-4f40-9b95-15466f6df5cb)

![mern-auth-logout-success](https://github.com/kvcsPat/mern-register-login/assets/102482465/a7236bb8-e7e2-404e-b51f-38848a3df011)
