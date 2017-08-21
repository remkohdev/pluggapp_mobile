# About

# Release Logs

## 0.2.0
Date: TBD

Description: First prototype, minor update #2

* Enable Service Workers in Ionic2


## 0.1.0
Date: 2017-08-10

Description: First prototype release.

* Authentication using Ionic Cloud Auth service with email/password,
* Instagram Auth,
* Ionic Cloud Push notifications for Android,
* List an Detail pages for MyPlugs, Influencers, Businesses, and Campaigns and a placeholder page for Notifications.

# Installation

## Prerequisites

This is a 'tabs' starter template for [Ionic](http://ionicframework.com/docs/) projects.

* Node.js
* Apache Cordova
* Ionic

## Download

```bash
$ git clone https://github.com/remkohdev/pluggapp_mobile.git
$ cd pluggapp_mobile
```

## Run

### Web Browser

Push notifications will not work in a Web Browser as these require native functionality.

```bash
$ ionic serve
```

### Android

You must have an Android emulator configured and added the platform to the ionic cordova installation.

```bash
$ ionic serve emulate android
```

## Build

Done:

1. Create a new Ionic app with the tabs template
```bash
$ ionic create pluggapp_mobile tabs
```
2. Link to Ionic Cloud
```bash
$ ionic link
```
You can manage Ionic apps that are linked to the Ionic Cloud service in the [Ionic Apps Dashboard](https://apps.ionic.io/apps/). In the Ionic Apps Dashboard, click the Auth tab to add authenticated users.
3. Add [Ionic Services Auth](https://docs.ionic.io/services/auth/). [Basic navigation in Ionic2](https://www.joshmorony.com/a-simple-guide-to-navigation-in-ionic-2/) uses NavController. The Auth service is well explained in this blog [An example of the Ionic Auth service with Ionic2](https://www.raymondcamden.com/2016/11/04/an-example-of-the-ionic-auth-service-with-ionic-2) by Raymond Camden.
4. Follow the instructions to add [Ionic Push](https://docs.ionic.io/services/push/) service to your application. The Push plugin is native and only works on a phone or emulators.
```
ionic cordova plugin add phonegap-plugin-push --variable SENDER_ID=86595768696 --save
npm install --save @ionic-native/push
```

# Author

Remko de Knikker (@remkohdev, remkohdev@gmail.com)
https://github.com/remkohdev/

# License
