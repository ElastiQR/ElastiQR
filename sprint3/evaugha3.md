# Sprint 3

- Name: Eric Vaughan
- GitHub ID: VaughanEric
- Group Name: ElastiQR

### What I planned to do

- [#86 Download Button for QR Codes](https://github.com/ElastiQR/ElastiQR/issues/86)
- [#96 Improve Create QR Page UI](https://github.com/ElastiQR/ElastiQR/issues/96)
- [#114 Improve QR Details Page UI](https://github.com/ElastiQR/ElastiQR/issues/114)
- [#117 General UI Improvements](https://github.com/ElastiQR/ElastiQR/issues/117)

### What I did not do

I was able to get everything done that I had planned for this sprint.

### What problems I encountered

Fortunately, I only struggled with one issue this sprint, and I was able to resolve it without too much trouble. The problem came up when I was trying to get the download button to work for downloading a QR code. Originally, the QR code I was using was an svg element. However, after spending almost two hours try to figure out how to download the QR code, I pivoted. I switched the QR code to a canvas element, which I was easily able to figure out how to download in a matter of minutes.

### Issues I worked on

- [#86](https://github.com/ElastiQR/ElastiQR/issues/86) Download Button for QR Codes
- [#96](https://github.com/ElastiQR/ElastiQR/issues/96) Improve Create QR Page UI
- [#114](https://github.com/ElastiQR/ElastiQR/issues/114) Improve QR Details Page UI
- [#117](https://github.com/ElastiQR/ElastiQR/issues/117) General UI Improvements

### Files I worked on

- frontend/src/theme.js
- frontend/src/components/QRDetailsPage.js
- frontend/src/components/TextInput.js
- frontend/src/components/shared/shared.css
- frontend/src/components/QRStatPage/StatPage.js
- frontend/src/components/QRStatPage/index.js
- frontend/src/components/Profile/ProfileCard.js
- frontend/src/components/Profile/ProfileCard.css
- frontend/src/components/Main/LineChart.js
- frontend/src/components/Main/Main.js
- frontend/src/components/ExplorePage/ExplorePage.js
- frontend/src/components/ExplorePage/QRListItem.js
- frontend/src/components/CreateQRPage/CreateQRForm.js
- frontend/src/components/CreateQRPage/CreateQRForm.css

### What I accomplished

I essentially had two main goals this sprint. My first task was to focus on the functionality of the download button for our QR codes. Now, when users click the download button, their QR code will be converted to a PNG file and downloaded onto their device as file with a name that matches that of their QR code. My other main task, which was broken down into quite a few subtasks, was to ensure that the overall styling of our website was cleaner and more consistent. First, I redid the styling of the QR Creation page so that its header, text inputs, and button were more similar to those of the other pages. Then, I updated the styling of the QR code details page and uncovered the animated background which was being blocked. Additionally, we have stats and graphs displayed on a few pages, and I styled them to look cleaner and be more legible.
