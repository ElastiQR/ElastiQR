# Sprint 3

- Name: Caleb Fisher
- GitHub ID: cfisher36
- Group Name: ElastiQR

### What you planned to do
* [Authenticate JWT for backend routes](https://github.com/ElastiQR/ElastiQR/issues/89)
* [Backend logger](https://github.com/ElastiQR/ElastiQR/issues/90)
* [Link backend with QR update page](https://github.com/ElastiQR/ElastiQR/issues/93)
* [Actions for backend qr tracking service](https://github.com/ElastiQR/ElastiQR/issues/98)
* [Create Distinct User Flows for Logged In/Out](https://github.com/ElastiQR/ElastiQR/issues/102)
* [Link Profile Page with Current User](https://github.com/ElastiQR/ElastiQR/issues/115)

### What you did not do
* [Backend logger](https://github.com/ElastiQR/ElastiQR/issues/90)

### What problems you encountered
I encountered a few bugs with creating distinct user flows and managing render timing for the routes, navbar, and login page. Other than that, I didn't face too many other troublesome issues. I ended up ignoring the backend logger for now since there were other issues of higher priority.

### Issues you worked on
- [#89](https://github.com/ElastiQR/ElastiQR/issues/89) Authenticate JWT for backend routes
- [#93](https://github.com/ElastiQR/ElastiQR/issues/93) Link backend with QR update page
- [#98](https://github.com/ElastiQR/ElastiQR/issues/98) Actions for backend qr tracking service
- [#102](https://github.com/ElastiQR/ElastiQR/issues/102) Create Distinct User Flows for Logged In/Out
- [#115](https://github.com/ElastiQR/ElastiQR/issues/115) Link Profile Page with Current User

### Files you worked on
- frontend/src/components/Menu.js
- frontend/src/components/Login/GoogleLoginButton.js
- frontend/src/routes.js
- frontend/src/components/Login/LoginForm.js
- frontend/src/components/Navbar.js
- frontend/src/components/Profile/ProfileCard.js
- frontend/src/components/Signup/SignupForm.js
- frontend/src/components/shared/LoadingButton.js
- frontend/src/components/ExplorePage/QRList.js
- frontend/src/components/ExplorePage/QRListItem.js
- frontend/src/components/QRDetailsPage.js
- frontend/src/components/TextInput.js
- frontend/src/services/user.service.js
- frontend/src/components/CreateQRPage/CreateQRForm.js
- frontend/src/services/auth-header.js
- frontend/src/services/auth.service.js
- backend/src/controllers/qrController.js
- backend/src/controllers/updateController.js
- backend/src/routes/qrRoute.js
- backend/src/controllers/authController.js
- backend/src/middlewares/auth.js
- backend/src/routes/updateRoute.js

### What you accomplished
For this sprint, I wanted to promote security in our application by integrating JWT, create backend services to support our core functionality, and link remaining frontend features to the backend. To utilize JWT for authenticating requests, I first needed to separate the standard logged in user flow from the new user flow. Once this was done, it became practical to build the backend middleware to verify that requests have a valid JWT. For the backend QR tracking service, I needed to update our database to store redirects (QR scans) and caller information. This was helpful for providing depth to user insights. Later, I made the profile and QR update pages functional by utilizing our backend endpoints.
