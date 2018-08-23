#http://masarufuruya.hatenadiary.jp/entry/2017/08/15/073125

mkdir android/app/src/main/assets
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
pwd
cd ./android && ./gradlew clean && ./gradlew assembleDebug crashlyticsUploadDistributionDebug
