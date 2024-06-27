# Snackbar Bug Minimum Reproducible Example

This bug is only reproducible on the Android platform.

## Building and running the app

This app is a managed Expo app with React Native Paper and minimal dependencies to build on RN New Architecture.

### Clone the repo

`git clone https://github.com/bpeltonc/snackbar-bug-mre.git`

### Install dependencies and generate native projects

`npm install`
`npx expo prebuild --clean`

### Build and run the app

`npx expo run:ios`

### Actual behavior

- Press the "Toggle Snackbar" button
- Note that the text is updated to show "Snackbar is visible"
- Press the "Toggle Snackbar" button
- Snackbar "flashes" as it hides

### Expected behavior
- Press the "Toggle Snackbar" button
- Note that the text is updated to show "Snackbar is visible"
- Snackbar is visible

### System info

react-native-paper v. 5.12.3

expo-env-info 1.2.0 environment info:
System:
    OS: macOS 14.5
    Shell: 5.9 - /bin/zsh
Binaries:
    Node: 20.13.0 - ~/.nvm/versions/node/v20.13.0/bin/node
    Yarn: 1.22.22 - /opt/homebrew/bin/yarn
    npm: 10.5.2 - ~/.nvm/versions/node/v20.13.0/bin/npm
    Watchman: 2024.01.22.00 - /opt/homebrew/bin/watchman
Managers:
    CocoaPods: 1.14.3 - /Users/brandon/.rbenv/shims/pod
SDKs:
    iOS SDK:
    Platforms: DriverKit 23.5, iOS 17.5, macOS 14.5, tvOS 17.5, visionOS 1.2, watchOS 10.5
    Android SDK:
    API Levels: 27, 30, 31, 33, 34
    Build Tools: 28.0.2, 30.0.2, 30.0.3, 31.0.0, 33.0.0, 33.0.1, 34.0.0
    System Images: android-30 | Google APIs ARM 64 v8a, android-34 | Google APIs ARM 64 v8a, android-UpsideDownCakePrivacySandbox | Google Play ARM 64 v8a, android-VanillaIceCream | Google Play ARM 64 v8a
IDEs:
    Android Studio: 2024.1 AI-241.15989.150.2411.11948838
    Xcode: 15.4/15F31d - /usr/bin/xcodebuild
npmPackages:
    expo: ~51.0.14 => 51.0.14 
    react: 18.2.0 => 18.2.0 
    react-native: 0.74.2 => 0.74.2 
Expo Workflow: managed
