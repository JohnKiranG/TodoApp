# React native web app
Todo App using React Native. <br>
I have used react native managed by expo <br>
You can run using gh-pages <br>

## What i did

### Make sure have installed following in your system,
* Min node-version req is 10.19.0. if you use a below node versions. Building and running app in web dont work
* Expo-cli used is 4.1.6
* git

### Created an empty project using
    expo init TodoApp
    cd TodoApp
    npm i gh-pages
    expo start --web

### Changes in package.json
    Added homepage url
    Added scripts
    "build": "expo build:web",
    "deploy": "gh-pages -d web-build"

### Created repository in git and commited the code
    
### Build the webapp using
    expo build:web

### Deploy it to gh-pages
    npm run deploy

## Now your own React-Native Web app is deployed to gh-pages and ready to use.....:-)

