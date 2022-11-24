# Product Requirements Document
Name: Caleb Fisher

Product Name: ElastiQR

## Background
QR Codes have become a popular way for businesses to send URLs digitally or provide a touch-free solution to viewing documents. One of the shortcomings of QR codes is their static nature. The URL can never be altered which makes it difficult for businesses who may want preserve investments in their marketing campaigns and freely manipulate the QR that is referenced. To handle this and the many other issues with static QR codes, we are proposing a dynamic QR code service.

A dynamic QR service will provide users with an interface to freely manipulate their QR codes while we handle the redirection for them. There is also a signifcant number of services that we can provide to users such as a variety of user insights and customization options. Additionally, businesses often want to automate the process of QR code generation so we plan to provide an OAuth CLI for businesses to directly integrate our API into their own applications.

## Project Overview
ElastiQR provides a dynamic QR solution so that users are able to alter the link that is stored in their QR codes. We give users a range of applications from elastic marketing campaigns to business cards that can change between positions. ElastiQR also aims to provide a collection of user insights such as origin tracking, scan activity, and link validation. For businesses wanting to heavily utilize our services, we provide functionality to automate interactions with our services so that their QR Codes can shape around everchanging business needs.

## Features
1. **OAuth2 CLI** As a user, I want to be able to integrate the ElastiQR API with my business applications so that I can automate dynamic QR code generation.
2. **QR Scan Insights** As a user, I want to have access to insights relating to scan frequency and origin so that I can better understand my marketing trends.
3. **JWT Authentication** As a user, I want to know that nobody else can manipulate my account or QR collection so that my business or personal interests are secured.
4. **Google Login** As a user, I want to be able to login and register with Google to simplify my account experience and know that my login credentials are secure.
5. **Frontend Dynamic QRs** As a user, I want to have access to the dynamic QR codes in my QR details page so that I can download and directly test them.
6. **Smooth Page Transitions** As a user, I want to have smooth page transitions with loading buttons so that I can know my actions are being processed.
7. **Distinct User Flows** As a user, I want to have the correct UI corresponding with my logged in status so that I my experience is as simplified as possible.
8. **Cloud SQL** As a user, I want my data to be secured and persist between sessions so that I can pick up where I left off at a later date and coordinate with other members of my team.

## Technologies to be used
Frontend: JavaScript, React, Material UI
Backend & OAuth CLI: JavaScript, Node.js, Express
Database: MySQL, GCP Cloud SQL
