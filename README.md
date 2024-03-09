
# BLOG POST MONGODB + EXPRESS API

Blog post api using mongodb and express.js. noSQL database a collection include title, slug and post.

## Prerequisted

- bcrypt: ^5.1.1
- connect-mongo: ^5.1.0,
- cookie-parser: ^1.4.6,
- dotenv: ^16.4.2
- express: ^4.18.2
- express-session: ^1.18.0
- jsonwebtoken: ^9.0.2
- method-override: ^3.0.0
- mongoose: ^8.1.1

## Installation

run in your terminal:
```
npm install
```
```
npm run dev
```
you can see in `localhost:5000` test it with [Postman](https://www.postman.com) or using visual studio code extenstion [Rest Client](https://vscode.dev/Huachao/vscode-restclient?from=open) with file `request.rest`

## Config Database

if you use mongodb atlas, you can create an `.env` file and put your cluster connection string in `MONGODB_URI`. 

if you dont, go to `config/database` and you can change the connect method