## Project Requirements Document

Name:       Logan O'Neal
Github:     loganoneal
Group Name: ElastiQR

### Background
QR codes are used by many different business and organizations to provide an easy means of information access. One of the major problems with QR codes is that once they are created, the link stored in the code is static. This means that if the webpage hosting the linked URL were to go down or change web addresses, the QR code would no longer function properly. 

In order to solve this problem, I am want to build a SAAS service that hosts both a QR code generation tool and a backend system that allows users to update their QR codes any time after the time of creation. I also think there is potential here to monetize QR codes with advertisements which could benefit either the company themselves or the QR code service. 

This service is for individuals who plan to install QR codes for long periods of time. Some common examples of this are restaurants who use QR codes for their menus, businesses who install QR codes in public places, and individuals who use QR codes for personal branding such as business card alternatives. 

### Product Overview 
ElasticQR code is a QR management platform that helps businesses and individuals manage many QR codes at once. It helps to ensure that 
QR codes links are working and tracks usage across QR codes so that users can see where there web traffic is coming from. 

### Features 
- As an ElastiQR user I want create QR codes so that I can share links to my intended website. 
- As an ElastiQR user, I want to be able to download QR codes so that I can print them for distribution. 
- As an ElastiQR user I want to be able to fix broken QR links so that I dont have to remake existing QR codes. 
- As an ElastiQR user, I want to know when my my links are broken so that I can update them accordingly. 
- As an ElastiQR user I want to be able to login with Google so that I dont have to use my person credentials. 
- As an ElastiQR user I want to be able to see all my QR codes at once so that I can keep track of them. 
- As an ElastiQR user I want to see traffic across QR codes so that I can analyze where traffic is coming from. 
- As an ElastiQR user I want to be able to customize my QR codes by adding company logo and colors.
- As an ElastiQR user I want to use Oath to automate QR creation pipelines.
 


### Technologies
- Frontend: ReactJS, Material UI
- Backend: NodeJS
- Storage: Azure SQL Server
