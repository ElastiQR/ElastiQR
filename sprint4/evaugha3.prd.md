# Product Requirements Document

Name: Eric Vaughan
Product Name: ElastiQR

## Background

QR codes are an easy way for individuals to quickly provide information to others. However, the problem with QR codes is that they tend to be static. This means that a QR code is created with a link to a certain location, the link cannot be updated. As a result, whenever someone wants to change where their QR codes take others or if the link they are using becomes invalid, they would have to craete a whole new QR code. This can be a hassle in many ways. For instance, if you had QR codes on menus or business cards that you wanted to update, you would have to remake every single one, which would cost time and money. 

The simple solution to this issue would be to create dynamic QR codes. These would enable individuals to keep the same QR code for as long as they desired. If they wanted to update where a QR code takes others, they would simply update the link associated with the QR code. This process is drastically faster and cheaper than updating a static QR code. Our target audience would be anyone who desires to use QR codes for extended periods. For example, in business settings, this would include restaurants that use QR codes on menus, companies that have QR codes on their website, and businesspeople that use QR codes on their buisness cards. In a more casual setting, this could include anyone wanting to include QR codes on posters or flyers, such as for an event or a club.

## Project Overview

ElastiQR will be a webiste that allows individuals to create and manage dynamic QR codes. During the creation process, users will provide a name, link, and descrpition for a QR code. This information will then be stored in a database and can be updated at any time. Additionally, users will be provided with various information about their QR codes, such as usage stats and whether the links of their QR codes are broken.

## Features

- **Create Account.** As an ElastiQR user, I want to create and resigter an account with a username and password, so that ElastiQR will remember me and save my QR codes and their data.
- **Create QR Code.** As an ElastiQR user, I want to create a dynamic QR code, so that I can have a QR code that not only takes individuals to the link of my choice but that also has a link that can be easily updated.
- **Update QR Code.** As an ElastiQR user, I want to be able to update a QR code, so that I can change where the QR code takes individuals without having to create a whole new QR code.
- **Customize QR Code.** As an ElastiQR user, I want to be able to customize a QR code, so that the QR code can have a color and or logo that matches the setting in which the QR code is being used.
- **Download QR Code.** As an ElastiQR user, I want to download a QR code, so that I can provide others with my QR code.
- **QR Code List.** As an ElastiQR user, I want to have a list of all of my QR codes, so that I can easily see and keep track of all of my QR codes on one page.
- **QR Code Stats.** As an ElastiQR user, I want to see stats pertaining to the usage of my QR codes, so that I can determine how useful my QR codes are to others.
- **QR Code Link Status.** As an ElastiQR user, I want to know when my QR code links are broken, so that I know when to update the links to keep my QR codes functioning properly.
- **Navigation Bar.** As an ElastiQR user, I want to have a navigation bar, so that I can easily maneuver between various pages on the ElastiQR website.

## Technologies to be used

- Frontend: ReactJS (and Material UI for styling)
- Backend: NodeJS
- Database: Azure SQL Server