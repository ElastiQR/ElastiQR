# Sprint 1

- Name: Caleb Fisher
- GitHub ID: cfisher36
- Group Name: ElastiQR

### What you planned to do
* [Create Cloud SQL instance #9](https://github.com/ElastiQR/ElastiQR/issues/9)
* [Set up Deploy Config for Cloud Run #19](https://github.com/ElastiQR/ElastiQR/issues/19)
* [Sync Login Endpoints w/ DB #28](https://github.com/ElastiQR/ElastiQR/issues/28)
* [Sync QR Endpoints with DB #50](https://github.com/ElastiQR/ElastiQR/issues/50)
* [Create QR Codes Table #49](https://github.com/ElastiQR/ElastiQR/issues/49)

### What you did not do
- Implement a secret manager to simplify the development process
- Design a more complete database schema

### What problems you encountered
I had a little trouble with establishing database connectivity since I haven't worked with Google Cloud and don't have much experience with NodeJS or the Express framework.

### Issues you worked on
- [#9](https://github.com/ElastiQR/ElastiQR/issues/9) Create Cloud SQL instance
- [#19](https://github.com/ElastiQR/ElastiQR/issues/19) Set up Deploy Config for Cloud Run
- [#28](https://github.com/ElastiQR/ElastiQR/issues/28) Sync Login Endpoints w/ DB
- [#50](https://github.com/ElastiQR/ElastiQR/issues/50) Sync QR Endpoints with DB
- [#49](https://github.com/ElastiQR/ElastiQR/issues/49) Create QR Codes Table

### Files you worked on
- backend/src/index.js
- backend/deploy.sh
- backend/src/helpers/database.js
- backend/src/controllers/authController.js
- backend/src/controllers/qrController.js
- backend/.gitignore
- backend/package.json
- backend/README.md

### What you accomplished
One of my primary objectives for this sprint was to introduce a basic database structure for testing our endpoints. We knew that we wanted to utilize GCP to store our database, so I first had to create the Cloud SQL instance and set up the database helper for all of the controllers to have access to the database. While I was working with our cloud configuration, I also created a shell script for deploying and building the API once we're ready. Once the basic structure of our endpoints was finished, I worked on developing queries with the temporary tables in Cloud SQL to make our endpoints functional. Additionally, I performed final testing on all of the endpoints and made small modifications to emulate the expected behavior.