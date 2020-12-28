fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew install fastlane`

# Available Actions
## Android
### android show_all_version
```
fastlane android show_all_version
```
Get list of version on build gradle
### android bumpup_version
```
fastlane android bumpup_version
```
Bump up version for production based on semver rules
### android codepush_prod
```
fastlane android codepush_prod
```
Code Push Release Production
### android codepush_staging
```
fastlane android codepush_staging
```
Code Push Release Staging
### android firebase_beta
```
fastlane android firebase_beta
```
Distribute to firebase app distribution
### android gplay
```
fastlane android gplay
```
Upload to internal test google play
### android build
```
fastlane android build
```
Build Bundle Android App

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
