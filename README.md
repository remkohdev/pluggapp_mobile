# PlugApp Mobile

## Requirements

This is a 'tabs' starter template for [Ionic](http://ionicframework.com/docs/) projects.

* Node.js
* Apache Cordova
* Ionic

## Run

```bash
$ git clone https://github.com/remkohdev/pluggapp_mobile.git
$ cd pluggapp_mobile
$ ionic serve
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
5. Use the generator to create an AuthService,
```bash
$ ionic generate provider AuthService
```
to create a new provider in the ''~/src/providers' directory

## To be done:

* Add [Angular Testing](https://angular.io/guide/testing) framework to Ionic2 app:
  * [Jasmine](https://jasmine.github.io) for basic tests
  * [Karma](https://karma-runner.github.io) for writing and running unit tests
  * [Protractor](http://www.protractortest.org/) for e2e user experience tests
  * Optional: Appium, Selenium, Mocha, Istanbul Code coverage, et al
* Use separate Ionic Modals for both Signup as Login.
* Add Signup/Login Options
  1. Add Facebook Signup/Login
  2. Add Instagram Signup/Login
  3. Add Twitter Signup/Login
  4. Add Loopback.io Signup/Login
* Add IBM MobileFirst Authentication
* Add IBM MobileFirst Push Notifications
* Try Google Firebase services
* Try AWS mobile services
* Try Azure mobile services
