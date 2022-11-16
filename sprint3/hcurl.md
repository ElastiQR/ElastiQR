# Sprint 3
Hayden Curl | hcurl | ElastiQR

## Planned To Do:
* User Update Controller [link](https://github.com/ElastiQR/ElastiQR/issues/91)
* User Delete Controller [link]( https://github.com/ElastiQR/ElastiQR/issues/92)
* Backend/Frontend for “Get Notifications” button [link]( https://github.com/ElastiQR/ElastiQR/issues/95)

## Did Not Do:
* n/a, was able to implement the plans above

## Problems:
* I had to rewrite some of my code to improve speed and performance due to unnecessary queries.  Afterwards, I was able to fit all my functionality into one query, more specifically one SQL statement.  A minor problem was learning some frontend syntax since I have previously been exclusively on the backend.

## Issues:
* 91
* 92
* 95

## Files:
* backend/src/controllers/authController.js
* backend/src/routes/userRoute.js
* backend/src/controllers/userController.js
* backend/src/index.js
* frontend/src/components/Signup/SignupForm.js
* frontend/src/services/auth.service.js


## Accomplishments:
* For Sprint 3, I wrote the userUpdate and userDelete controllers, as well as the appropriate routes and requests. The userUpdate controller allows the user to change their username, password, and/or notifications preferences, and updates the SQL database with the new information.  The userDelete controller simply deletes the user from the users table in the SQL database.  I also added minor functionalities to connect the frontend code for notifications to the backend.