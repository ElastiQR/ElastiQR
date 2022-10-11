# Sprint 1

- Name: Eric Vaughan
- GitHub ID: VaughanEric
- Group Name: ElastiQR

### What I planned to do

- [#12 Design the login page in Figma](https://github.com/ElastiQR/ElastiQR/issues/12)
- [#13 Design the explore QR codes page in Figma](https://github.com/ElastiQR/ElastiQR/issues/13)
- [#10 Design the QR code details page in Figma](https://github.com/ElastiQR/ElastiQR/issues/10)
- [#11 Design the QR code creation page in Figma](https://github.com/ElastiQR/ElastiQR/issues/11)
- [#25 Explore page list item component](https://github.com/ElastiQR/ElastiQR/issues/25)
- [#26 Explore page list component](https://github.com/ElastiQR/ElastiQR/issues/26)
- [#27 Explore page headers and buttons](https://github.com/ElastiQR/ElastiQR/issues/27)

### What I did not do

I had planned on creating a theme component for our color scheme and other frequently used styles. However, I did not get to that this sprint, but it will be one of the first things I want to get done in sprint 2.

### What problems I encountered

Fortunately, I did not run into too much trouble this first sprint. The only real struggle I had was figuring out how to cleanly merge my development branch into the main branch. However, after spending some time on that, I know exactly what I need to do going forward to ensure that I do not encounter this problem again.

### Issues I worked on

- [#12](https://github.com/ElastiQR/ElastiQR/issues/12) Design the login page in Figma
- [#13](https://github.com/ElastiQR/ElastiQR/issues/13) Design the explore QR codes page in Figma
- [#10](https://github.com/ElastiQR/ElastiQR/issues/10) Design the QR code details page in Figma
- [#11](https://github.com/ElastiQR/ElastiQR/issues/11) Design the QR code creation page in Figma
- [#25](https://github.com/ElastiQR/ElastiQR/issues/25) Explore page list item component
- [#26](https://github.com/ElastiQR/ElastiQR/issues/26) Explore page list component
- [#27](https://github.com/ElastiQR/ElastiQR/issues/27) Explore page headers and buttons

### Files I worked on

- frontend/src/routes.js
- frontend/src/MOCK_DATA.json
- frontend/src/index.css
- frontend/src/components/CreatePage.js
- frontend/src/components/ExplorePage.js
- frontend/src/components/QRList.js
- frontend/src/components/QRListItem.js

### What I accomplished

This sprint I had two main goals in mind. The first one was to come up with a basic design for our website. To do this, I used Figma and crafted a design for the following pages: Login, QR List, QR Details, and QR Creation. To keep my team's code simpler for the sake of time, I made the mobile and desktop designs very similar. My second overarching goal was to focus on the QR List page. First, I linked the My QRs button in the navigation bar to the QR List page. Then, I created a component for each list item as well as a component for the whole list. I added a button base for each list item component, so that they can eventually become a button that leads to a page with details about a given QR code. Additionally, I created the Creat New QR Code button at the top of the QR List page and routed it to the Create QR Code page. Lastly, I did the styling on the QR List page with the help of Material UI.
