# Sprint 2
Hayden Curl | hcurl | ElastiQR

## Planned To Do:
* Endpoints for Updating Users and QR Codes [link](https://github.com/ElastiQR/ElastiQR/issues/58)
* Endpoints for Removing Users and QR Codes [link](https://github.com/ElastiQR/ElastiQR/issues/59)
* Added functionality to only retrieve x number of QR Codes [link](https://github.com/ElastiQR/ElastiQR/issues/70)

## Did Not Do:
* n/a, was able to implement the plans above

## Problems:
* I had minor problems with JavaScript syntax for the patch request that was needed for the update controller, the delete request that was needed for the delete controller, and figuring out how to properly write the SQL statements.  I also had issues with the update controller sending multiple statuses.

## Issues:
* 58
* 59
* 70

## Files:
* backend/src/controllers/qrController.js
* backend/src/routes/updateRoute.js
* backend/src/controllers/updateController.js


## Accomplishments:
* For Sprint 2, I was able to complete the backend endpoints for updating a user’s QR code name/url/description with our SQL database.  Additionally, I was able to write the code that deletes a QR code given by the frontend from the SQL database.  Finally, I added a functionality to the qrController in the retrieveQR export that posts ‘x’ number of the given user’s QR codes.  This feature will be useful for users who have many QR codes in the database.
