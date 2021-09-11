# react-native-jsi-trial

### Exploring JSI

This repo got a minimal example of JSI of creating a multiply function in CPP and using it from JS

## How to run the example

```sh
1 cd example
2 react-native run-android
```

## If installation fails then, run this command inside example dir

```sh
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```


## Usage

```js
import { JsiTrial } from 'react-native-jsi-trial';
const result = JsiTrial.multiply(69,56);
const deviceInfo=JsiTrial.getDeviceInfo()
const jsiUUID = JsiTrial.getJSIRandomUUID();
JsiTrial.getNativeRandomUUID((uuid) => {
        console.log(uuid);
});
```

