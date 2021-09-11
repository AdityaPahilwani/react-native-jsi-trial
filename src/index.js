import { NativeModules } from 'react-native';

const { JsiTrial: NativeMethods } = NativeModules;

export const JsiTrial = {
  multiply: global.multiply,
  getDeviceInfo: global.getDeviceInfo,
  getJSIRandomUUID: global.getJSIRandomUUID,
  getNativeRandomUUID: NativeMethods.getNativeRandomUUID,
};
