React native chat app boilerplate
=======

This chat app is a boilerplate for any react native developer who wants to build a chat app.

The goal of this boilerplate is to provide a fully functional chat app which can be reused with very little to no modification.

IOS Demo
=======
<p align="center">
  <img width="250" src="./previews/ios-1.gif"><img width="250" src="./previews/ios-2.gif"><img width="250" src="./previews/ios-3.gif">
</p>
<p align="center">
  <img width="250" src="./previews/ios-4.gif"><img width="250" src="./previews/ios-5.gif"><img width="250" src="./previews/ios-6.gif">
</p>

Android Demo
=======
<p align="center">
  <img width="250" src="./previews/android-1.gif"><img width="250" src="./previews/android-2.gif"><img width="250" src="./previews/android-3.gif">
</p>
<p align="center">
  <img width="250" src="./previews/android-4.gif"><img width="250" src="./previews/android-5.gif"><img width="250" src="./previews/android-6.gif">
</p>

Packages & Libraries used
=======

* [React Native](https://www.npmjs.com/package/react-native) - A framework for building native apps with React.
* [React](https://www.npmjs.com/package/react) - A declarative, efficient, and flexible JavaScript library for building user interfaces.
* [React router native](https://www.npmjs.com/package/react-router-native) - Declarative routing for React.
* [moment](https://www.npmjs.com/package/moment) - Parse, validate, manipulate, and display dates in javascript.
* [TypeScript](https://www.npmjs.com/package/typescript) - TypeScript is a superset of JavaScript that compiles to clean JavaScript output.
* [React Vector Icons](https://www.npmjs.com/package/react-native-vector-icons) - Customizable Icons for React Native with support for NavBar/TabBar/ToolbarAndroid, image source and full styling.
* [Micro Validator](https://www.npmjs.com/package/micro-validator) - A minimalistic & extensible validation library for javascript.

Steps to Run the Project in Development Mode
=======
Use the Below Commands to Clone the project and enter inside the Directory
After that Install the Dependencies.
```
git clone git@github.com:recraftrelic/react-native-chat-app-boilerplate.git
cd react-native-chat-app-boilerplate
yarn install
```

### IOS
We can directly run the app
```
npx react-native run-ios
```

### Facing any error related to pods in ios
We need to install the pods
```
sudo gem install cocoapods
cd ios
pod install
cd ..
npx react-native run-ios
```

### Android
We can directly run the app
```
npx react-native run-android
```

Roadmap
=======

* Move all the lists to constants
* Deploy to playstore
* Implement internationalization
* Improve documentation

Contributors
=======
* [manojsinghnegiwd](https://github.com/manojsinghnegiwd) - Manoj Singh Negi
* [yashkapoor8710](https://github.com/yashkapoor8710) - Yogesh Kapoor

Sponsors
=======
[<img src="http://www.recraftstudio.com/images/logo.png" alt="Recraft Relic Private Limited" width="50"/>](http://www.recraftrelic.com)
