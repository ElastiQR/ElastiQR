# Sprint 2

- Name: Caleb Fisher
- GitHub ID: cfisher36
- Group Name: ElastiQR

### What you planned to do
* [Link Users with QR Codes in Database](https://github.com/ElastiQR/ElastiQR/issues/54)
* [Process QR Characteristics in QR Endpoints](https://github.com/ElastiQR/ElastiQR/issues/55)
* [Connect QR Backend with List Page](https://github.com/ElastiQR/ElastiQR/issues/60)
* [Implement a Secret Manager](https://github.com/ElastiQR/ElastiQR/issues/67)
* [Google Login](https://github.com/ElastiQR/ElastiQR/issues/76)
* [Link CreateQR page with backend](https://github.com/ElastiQR/ElastiQR/issues/82)

### What you did not do
* [Implement a Secret Manager](https://github.com/ElastiQR/ElastiQR/issues/67)
* [Process QR Characteristics in QR Endpoints](https://github.com/ElastiQR/ElastiQR/issues/55)

### What problems you encountered
With the respect to the secret manager, it ultimately was going to be a much more involved transition than I was expecting. It required that the whole team get the Google CLI and have set permissions, which I didn't want to burden the team with since it wasn't strictly necessary. Other than that, there weren't many problems.

### Issues you worked on
- [#54](https://github.com/ElastiQR/ElastiQR/issues/54) Link Users with QR Codes in Database
- [#60](https://github.com/ElastiQR/ElastiQR/issues/60) Connect QR Backend with List Page
- [#76](https://github.com/ElastiQR/ElastiQR/issues/76) Google Login
- [#82](https://github.com/ElastiQR/ElastiQR/issues/82) Link CreateQR page with backend

### Files you worked on
- frontend/src/components/ExplorePage/QRList.js
- frontend/src/components/Login/GoogleLoginButton.js
- frontend/src/components/Login/index.js
- frontend/src/services/auth.service.js
- frontend/src/services/user.service.js
- frontend/src/components/CreateQRPage/CreateQRForm.js
- frontend/src/components/shared/LoadingButton.js
- backend/src/controllers/authController.js
- backend/src/controllers/qrController.js
- backend/src/controllers/updateController.js
- backend/src/routes/authRoute.js
- backend/src/index.js
- backend/package.json
- frontend/package.json

### What you accomplished
For this sprint, my primary objective was to link our backend services to the frontend. This first required that some maintenance and optimization be done to our database schema. This involved setting up indexing and building relationships between users and their QR codes with fast query times. With this accomplished, I was able to link the QR explore page with the backend. After Logan had set up a user context to preserve user data after login, I was able to make this functional for the user currently logged in. Additionally, I linked the Create QR page with the backend so that users can create and view their own QR codes. Lastly, after Jonathan mentioned Google login, I thought that would be a great addition to our signup/login flow since we are already utilizing GCP services. So, I implemented a Google login option and created a backend controller to handle that login method.
