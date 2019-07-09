This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It includes:
- [ReactJS](https://facebook.github.io/react/)
- [MaterialUI](http://www.material-ui.com)
- [react-flexbox-grid](https://roylee0704.github.io/react-flexbox-grid/)
- [react-responsive](https://github.com/contra/react-responsive)

# Usage

## Dev Setup

After cloning,
```
$ cd react-fluxbox-boilerplate
$ sudo npm install bower yarn -g
$ bower install
$ yarn
```

## Scripts

```npm run serve``` - Starts server in Development Mode at http://localhost:3000. Also starts json-server at http://localhost:3000/api/v1

```npm run build``` - Builds server

```npm start --production``` - Starts server in production mode. Always run build before starting the server in production

#go to postman
POST http://localhost:3000/auth/v1
body post {
    "username":"admin"
    "password":"password"
}

#copy token
#go to GET http://localhost:3000/api/v1/cartoons
#Content-Type and write Authorization
#then to application/json write Bearer and paste token
#then go back to GET http://localhost:3000/api/v1/cartoons

