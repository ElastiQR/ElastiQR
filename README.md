# ElastiQR

[<img src="./frontend/public/../src/images/qr_logo.png" width="250"/>](./frontend/public/../src/images/qr_logo.png.png)
## Contributors
- Eric Vaughan (VaughanEric)
- Logan O'Neal (LoganOneal)
- Jacob King (Jacobking61)
- Hayden Curl (hcurl)
- Caleb Fisher (cfisher36)

## Product Description

ElastiQR provides a dynamic QR solution so that users are able to alter the link that is stored in their QR codes. We give users a range of applications from elastic marketing campaigns to business cards. ElastiQR also aims to provide a collection of user insights such as origin tracking, scan activity, and link validation. For businesses wanting to heavily utilize our services, we provide functionality to automate interactions with our services so that their QR Codes can shape around everchanging business needs.

## Instructions about how to download, install, and run the product

[ Need to figure out how we're distributing .env files. ]

### Standard Method: NPM

```shell
# Need to have Node.js installed. We're testing and stable at v16.13.0.

# Install dependencies and run backend
$ cd backend
$ npm i
$ npm start

# Install dependencies and run frontend
$ cd frontend
$ npm i
$ npm start

# Install dependencies and run the OAuth CLI
$ cd oauth-cli
$ npm i
$ node src/index.js --file FILE --expiresIn TIME[ex: 10h, 1d]
```

### Alternative Method: Docker

```shell
# Build docker images and start containers
$ docker compose up --build

# Install dependencies and run the OAuth CLI
$ cd oauth-cli
$ npm i
$ node src/index.js --file FILE --expiresIn TIME[ex: 10h, 1d]
```

## Instructions on how to use the product



## License Information

[MIT License](https://github.com/ElastiQR/ElastiQR/blob/main/LICENSE.txt)
