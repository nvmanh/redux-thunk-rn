# React Native Base Project with Redux-Thunk
## I. Read before start

### 1. Redux & redux-thunk
https://redux.js.org/advanced/asyncactions

### 2. Container & Component
https://unbug.gitbooks.io/react-native-training/content/43_containers_&_components.html

### 3. I18n for support multi-languages in react-native
https://github.com/i18next/i18next

### 4. Axios fot network connection
https://github.com/axios/axios

### 5. Promise the main of any JS project
https://www.fullstackreact.com/30-days-of-react/day-15/

## II. Usage

### 1. Clone project

### 2. Run: npm install

### 3. Coding

### 4. Build
  #### a. start metro server: react-native start
  
  #### b. ios: react-native run-ios
    - if you want to run on device: react-native run-ios --device
    
  #### c. android: react-native run-android
  
  #### d. build ipa ios: 
    - debug: npm run build: ios
    - release: npm run build:ios:release
    
  #### e. build apk android
    - debug: npm run build:android
    - release: npm run build:android:release
    
## III. Other Settings    
  ### 1. Fabric 
   - After every build, command will auto deploy apk to your fabric workspace
  #### a. Android
  - Open {project}/android by Android Studio and config fabric
  #### b. IOS
  - Change your fabric config ( api key, secret key) in: {project}/xcodebuild.sh && {project)/xcodebuild.prod.sh
  
  ### 2. Release
  - Update your keystore - Android (debug and release) to {project}/keystores
  - Update your schema - IOS in {project}/ios/build.plist
  - Change logs for every build in must put in {project}/scripts/ReleaseNotes.txt
  - Tester list must be put in {project}/tester.txt ( tester emails are divided by comma)
    
