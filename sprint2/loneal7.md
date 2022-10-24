# Sprint 1

Name:       Logan O'Neal
Github:     loganoneal
Group Name: Elastic QR

## What you planned to do
* [Create QR Code Component #78](https://github.com/ElastiQR/ElastiQR/issues/78)
* [Create User Login React Context #63](https://github.com/ElastiQR/ElastiQR/issues/63)
* [Frontend User Profile Page #64](https://github.com/ElastiQR/ElastiQR/issues/64)
* [Change Password Endpoint #65](https://github.com/ElastiQR/ElastiQR/issues/65)
* [Make Cards Shared Wrapper Component #80](https://github.com/ElastiQR/ElastiQR/issues/80)

## What you did not do
I had planned to write an endpoint to allow the user's to change their own password, but later decided that the QR code creation component was more important.
The change password endpoint will now be done later on. 

## What problems you encountered
I had some issues getting the user context ID to work across pages and had to rewrite is using a react context which solved the previous issues. 

## Issues you worked on  
* [#73](https://github.com/ElastiQR/ElastiQR/issues/78) Create QR Code Component 
* [#63](https://github.com/ElastiQR/ElastiQR/issues/63) Create User Login React Context
* [#64](https://github.com/ElastiQR/ElastiQR/issues/64) Frontend User Profile Page
* [#80](https://github.com/ElastiQR/ElastiQR/issues/80) Make Cards Shared Wrapper Component

## Files you worked on
#### Issue: Create User Login React Context #6 
* frontend\src\services\auth-header.js
* frontend\src\services\auth.service.js
* frontend\src\services\user.service.js

#### Issue: Make Cards Shared Wrapper Component #80
* frontend/src/components/shared/CardContainer.js
* frontend/src/components/shared/shared.css
  
#### Issue: Frontend User Profile Page #64
* frontend/src/components/Profile/ProfileCard.css
* frontend/src/components/Profile/ProfileCard.js

#### Issue: Create QR Code Component #78
* frontend/src/components/CreatePage.js
* frontend/src/components/CreateQRPage/CreateQRForm.css
* frontend/src/components/CreateQRPage/CreateQRForm.js
* frontend/src/components/CreateQRPage/index.js
* frontend/src/routes.js
* frontend/src/theme.js

### What you accomplished
First, I wrote the frontend service to manage the context id returned from the backend after login. This will be used to verify authentication and get a user's specific qr codes. Then, I wrote a user profile page to show the user some statistics about their usage and show that they are logged into the correct account. I also built a create QR code component on the frontend that dynamically generated the QR codes from a form input taking a link and a name for the code. Lastly, I took care of some code duplication and made the cards for the user and create qr code items a wrapper component that is used in both. 




