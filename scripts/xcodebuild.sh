xcodebuild \
  clean \
  -project "ios/ReduxThunkRN.xcodeproj"

xcodebuild \
  -project "ios/ReduxThunkRN.xcodeproj" \
  -scheme "ReduxThunkRN" \
  archive \
  -archivePath "./ios-build/archive/ReduxThunkRN.xcarchive"

#sudo gem install sqlite3 -- --with-sqlite3-lib=/usr/lib
#https://github.com/NativeScript/nativescript-dev-webpack/issues/325
#Step failed: <IDEDistributionPackagingStep: 0x7ff295c71520>: Error Domain=NSCocoaErrorDomain Code=3840 "No value." UserInfo={NSDebugDescription=No value., NSFilePath=/var/folders/kt/7h9884y95pdd4zpxh2cfvhy40000gn/T/ipatool-json-filepath-qRzYkR}

xcodebuild \
  -allowProvisioningUpdates \
  -exportArchive \
  -archivePath "./ios-build/archive/ReduxThunkRN.xcarchive" \
  -exportPath "./ios-build/" \
  -exportOptionsPlist "./ios/build.plist"

ios/Crashlytics.framework/submit YOUR_FABRIC_KEY YOUR_FABRIC_SECRET \
  -ipaPath ios-build/ReduxThunkRN.ipa \
  -groupAliases aztester \
  -notesPath './scripts/ReleaseNotes.txt' \
  -notifications YES

