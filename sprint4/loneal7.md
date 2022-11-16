# Sprint 4

Name:       Logan O'Neal
Github:     loganoneal
Group Name: Elastic QR

### Files you worked on
* backend/src/index.js
* backend/src/services/qrService.js

* frontend/src/components/ExplorePage/QRList.js
* frontend/src/components/ExplorePage/QRListItem.js
* frontend/src/components/Main/Main.js
* frontend/src/components/Profile/ProfileCard.js
* frontend/src/images/qr_pattern.jpg
  
### What you accomplished
This sprint I implemented a feature to allow users to keep track of how many of their QR links are currently set to unreachable links. I 
did this by creating both a number ont he home page and user page to count to total broken links and by adding a toggle to the QR list
page to label which ones were broken. In order to find these links, I wrote a service that runs using a scheduling library called node-cron
every 15 minutes to check all the links in the database and update which ones are currently broken or reachable. I also fixed a few random 
code quality issues. 