# Sprint 1

Name:       Logan O'Neal
Github:     loganoneal
Group Name: Elastic QR

### What you planned to do
* [Start Google Cloud Linux Server Instance #4](https://github.com/ElastiQR/ElastiQR/issues/4)
* [Start React Project #16](https://github.com/ElastiQR/ElastiQR/issues/16)
* [Write basic frontend navigation in React Material UI](https://github.com/ElastiQR/ElastiQR/issues/32)
* [Write controller for login #24](https://github.com/ElastiQR/ElastiQR/issues/24)
* [Create controller for and register #20](https://github.com/ElastiQR/ElastiQR/issues/20)
* [Connect login and signup controller to DB #46](https://github.com/ElastiQR/ElastiQR/issues/46)
* [DB Create Users Table #45](https://github.com/ElastiQR/ElastiQR/issues/45)


### What you did not do
I had planned on writing the endpoint to get a user's individual QR codes, but it had to be moved to the backlog due to work on prerequisites with other QR endpoints. 

### What problems you encountered
Overall, this sprint went very smoothly. I did encounter one issue with the backend failing to find the .env file with the login for the DB, but I resolved it after some trial and error. 

### Issues you worked on
* [#4](https://github.com/ElastiQR/ElastiQR/issues/4) Start Google Cloud Linux Server Instance 
* [#16](https://github.com/ElastiQR/ElastiQR/issues/16) Start React Project 
* [#32](https://github.com/ElastiQR/ElastiQR/issues/32) Write basic frontend navigation in React Material UI 
* [#24](https://github.com/ElastiQR/ElastiQR/issues/24) Write controller for login 
* [#20](https://github.com/ElastiQR/ElastiQR/issues/20) Create controller for and register 
* [#46](https://github.com/ElastiQR/ElastiQR/issues/46) Connect login and signup controller to DB 
* [#45](https://github.com/ElastiQR/ElastiQR/issues/45) DB Create Users Table 

### Files you worked on
* backend/src/config.js
* backend/src/controllers/authController.js
* backend/src/index.js
* backend/src/routes/authRoute.js
* frontend/.gitignore
* frontend/package.json
* frontend/package-lock.json
* frontend/public/favicon.ico
* frontend/public/index.html
* frontend/public/logo192.png
* frontend/public/logo512.png
* frontend/public/manifest.json
* frontend/public/robots.txt
* frontend/README.md
* frontend/src/App.css
* frontend/src/App.js
* frontend/src/App.test.js
* frontend/src/components/Main.js
* frontend/src/components/Menu.js
* frontend/src/components/Navbar.js
* frontend/src/components/ScrollTop.js
* frontend/src/images/back-arrow.svg
* frontend/src/images/logo.svg
* frontend/src/images/shape.svg
* frontend/src/index.css
* frontend/src/index.js
* frontend/src/logo.svg
* frontend/src/reportWebVitals.js
* frontend/src/routes.js
* frontend/src/serviceWorker.js
* frontend/src/setupTests.js

### What you accomplished

First, I started the GCP instance and create the generated the initial React code / backend structure (controllers, routes, etc). Then, I wrote the routes for login and register and the controllers to handle these requests. Later on once Jacob finished the form components for the login and register user pages I added the frontend functionality to use these endpoints. These endpoints were both POST requests accepting a json object with a username and password. The login endpoint will return a context ID that can be verified later on against the same endpoint when a user uses a authenticated route. I had to use SQL manager quite a bit during this process to create the tables for the users and set the requirements for usernames and passwords. I also wrote the React / Material UI code for the basic nav on the frontend. I also wrote the basic structure for the backend as far as file organization, startup processes / loading in .env variables, and routes / controllers. 
