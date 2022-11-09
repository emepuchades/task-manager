# <img align="center" width="50"  src="https://user-images.githubusercontent.com/100128850/179488136-2ed274ee-b2ef-4187-a155-ab813bf6e8fb.png"> Task Manager

Task Manager is a platform that allows the creation, edition, and overall management of your tasks.

## Tech stack

-   Reactjs
-   Firebase

## Screenshot

![Captura de Pantalla 2022-07-18 a las 11 08 50](https://user-images.githubusercontent.com/100128850/181705280-922a9dcf-9766-452b-832a-6510092a2766.png)

# HACKTOBERFEST 2022 IS HERE! 🌈🧨

Make sure to register by clicking on the image and start contributing! 😍💕

<a href ="https://hacktoberfest.com/"><img align="center" src="https://user-images.githubusercontent.com/100128850/200891792-6c88e81b-ac5c-4b8b-b819-1c229fea8186.jpeg"></img></a>

# Application setup

## Firebase setup

1. Go to [Firebase](https://firebase.google.com/) and create your Firebase account
2. Then click on Add project
3. For this project you will not need to enable Google Analytics, but it's optional
4. Click on Add Firebase

For more information, go to [First steps with Firebase](https://cloud.google.com/firestore/docs/client/get-firebase)

## Web app registration

To register an application for your project, follow [these steps](https://firebase.google.com/docs/web/setup)

The information generated in this step needs to be inserted in the [.env](https://github.com/emepuchades/task-manager/blob/main/.env.example) file and placed in the [firebase.js](https://github.com/emepuchades/task-manager/blob/main/src/firebase.js) file.

```javascript
const firebaseConfig = {
    // Your configuration and your keys
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGID,
    appId: process.env.REACT_APP_APPID,
}
```

## Enable Authentication

You will need to enable two authentication patterns

1. Google Account
2. Email and password

For more information about enabling authentication, click [here](https://firebase.google.com/docs/auth)

## Enable Firetore Database

Go to Compilation > Firestore Database and enable a cloud store database for the project (test-based)

For more information about enabling firestore database, click [here](https://firebase.google.com/docs/firestore/quickstart?hl=es&authuser=0)

## Configuration

Rename the .env.example and place the information generated in the prior step here. Also, do not forget to provide the same information in the [firebase.js](https://github.com/emepuchades/task-manager/blob/main/src/firebase.js) file.

## Start the application

1. Install the project dependencies with the npm command.

```bash
npm install
```

2. Run the application. The browser will be opened at http://localhost:3000/

```bash
npm start
```

## Start contributing 💚👇

For more information check the [CONTRIBUTING.md](https://github.com/emepuchades/task-manager/blob/main/CONTRIBUTING.md) file

## Contributors 🙌

<a href="https://github.com/emepuchades/task-manager/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=emepuchades/task-manager" />
</a>
