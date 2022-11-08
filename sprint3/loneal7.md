# Sprint 1

Name:       Logan O'Neal
Github:     loganoneal
Group Name: Elastic QR

## What you planned to do
* [Fix Navbar Double Click Bug #94](https://github.com/ElastiQR/ElastiQR/issues/94)
* [Create QR Static Link Endpoint #100](https://github.com/ElastiQR/ElastiQR/issues/100)
* [Improve background look and new logo #111](https://github.com/ElastiQR/ElastiQR/issues/111)
* [Reduce redundant components on frontend and clean up UI #107](https://github.com/orgs/ElastiQR/projects/1/views/1)
* [Change password endpoint #65](https://github.com/ElastiQR/ElastiQR/issues/6)

## What you did not do
I had planned on making a change password endpoint but then switched it out for creating the QR link endpoint because that seemed more important. 

## What problems you encountered
I encountered a few issue while fixing the UI with the way the theme had been implemented. I essentially had to rework the theme and put all of the styling into a global file. This simplified the code quite a bit. 

## Issues you worked on  
* [#94](https://github.com/ElastiQR/ElastiQR/issues/94) Fix Navbar Double Click Bug 
* [#100](https://github.com/ElastiQR/ElastiQR/issues/100) Create QR Static Link Endpoint
* [#111](https://github.com/ElastiQR/ElastiQR/issues/111) Improve background look and new logo
* [#107](https://github.com/ElastiQR/ElastiQR/issues/107) Reduce redundant components on frontend and clean up UI

## Files you worked on
* backend/src/controllers/qrController.js
* backend/src/index.js
* backend/src/routes/qrRoute.js
* frontend/src/components/CreateQRPage/index.js
* frontend/src/components/ExplorePage/ExplorePage.js
* frontend/src/components/ExplorePage/QRListItem.js
* frontend/src/components/Login/GoogleLoginButton.js
* frontend/src/components/Login/index.js
* frontend/src/components/Login/LoginForm.js
* frontend/src/components/Main/Main.js
* frontend/src/components/Navbar.js
* frontend/src/components/Profile/index.js
* frontend/src/components/shared/AnimatedBackground/AnimatedBackground.css
* frontend/src/components/shared/AnimatedBackground/AnimatedBackground.js
* frontend/src/components/Signup/index.js
* frontend/src/components/Signup/SignupForm.js
* frontend/src/routes.js
* frontend/src/services/user.service.js
* frontend/src/theme.js

### What you accomplished
First, I added a get endpoint that would redirect from a QR's id to the actual link stored in the database. AFter that, I spent a lot of time fixing various issues with the UI and theme. While doing this, I was able to solve a bug we had regarding the navbar losing context across page clicks. I moved a lot of the theming into a higher order component and simplified the frontend code as a whole. I also removed a lot of unnecesary filed that were consolidated in the UI changes. 