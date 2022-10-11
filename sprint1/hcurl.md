# Sprint 1
Hayden Curl | hcurl | ElastiQR

## Planned To Do:
* POST Request for QR Codes [link](https://github.com/ElastiQR/ElastiQR/issues/18)
* GET Request for QR Codes [link](https://github.com/ElastiQR/ElastiQR/issues/41)
* CreateQRController [link](https://github.com/ElastiQR/ElastiQR/issues/18)
* RetrieveQRController Codes [link](https://github.com/ElastiQR/ElastiQR/issues/41)
* logging and http response statuses for retrieveQR [link](https://github.com/ElastiQR/ElastiQR/issues/52)

## Did Not Do:
* n/a, was able to implement the plans above

## Problems:
* Having zero previous experience with JavaScript, it took me a long time to figure out exactly what to do and fix the many errors I encountered.

## Issues:
* 18
* 41
* 52

## Files:
* backend/src/controllers/qrController.js
* backend/src/routes/authRoute.js

## Accomplishments:
I wrote the POST request to add a new QR code to the SQL database.  If the QR name is already found in the SQL database, it flags it.  Else, it inserts the name into the QR code database.  For writing the GET request, I wrote the controller to retrieve the name entered on the server. I also wrote the code for logging and database response statuses for get requests. createQRController and retrieveQRController are called by the get/post requests to search the SQL database to add a new qr code and find a qr code, respectively.