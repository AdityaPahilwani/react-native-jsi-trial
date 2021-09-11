import { JsiTrial } from 'react-native-jsi-trial';

export const uuidBenchMark = () => {
  jsiUUIDBenchmark();
  nativeUUIDBenchmark();
};

const jsiUUIDBenchmark = () => {
  const start = global.performance.now();
  const uuid = JsiTrial.getJSIRandomUUID();
  const end = global.performance.now();
  console.log(`Benchmark: JSI UUID: ${end - start}ms uuid:`, uuid);
};

const nativeUUIDBenchmark = () => {
  const start = global.performance.now();
  JsiTrial.getNativeRandomUUID((uuid) => {
    const end = global.performance.now();
    console.log(`Benchmark: native UUID: ${end - start}ms uuid:`, uuid);
  });
};
