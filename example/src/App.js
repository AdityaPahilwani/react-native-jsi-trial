import React, { useState, useEffect } from 'react';

import { StyleSheet, View, Text, Platform } from 'react-native';
import { uuidBenchMark } from './benchmarks';
import { JsiTrial } from 'react-native-jsi-trial';

export default function App() {
  const [result, setResult] = useState(0);
  const [deviceName, setDeviceName] = useState('');
  const [jsiUUID, setJsiUUID] = useState();
  const [nativeUUID, setNativeUUID] = useState();
  useEffect(() => {
    if (Platform.OS === 'android') {
      uuidBenchMark()
      setDeviceName(JsiTrial.getDeviceInfo());
      setResult(JsiTrial.multiply(22, 87));
      JsiTrial.getNativeRandomUUID((uuid) => {
        setNativeUUID(uuid);
      });
      const jsiUUID = JsiTrial.getJSIRandomUUID();
      setJsiUUID(jsiUUID);
      return;
    }
    setResult('Only works in android');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        STRAIGHT OUTTA CPP: <Text style={styles.result}>{result}</Text>
      </Text>
      <Text style={styles.text}>
        DEVICE INFO STRAIGHT OUTTA JAVA WITHOUT BRIDGE
      </Text>
      <Text style={styles.result}>{deviceName}</Text>
      <Text style={styles.text}>
        JSI UUID: <Text style={styles.result}>{jsiUUID}</Text>
      </Text>
      <Text style={styles.text}>
        Native UUID: <Text style={styles.result}>{nativeUUID}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
  result: {
    fontSize: 30,
    textAlign: 'center',
    color: '#2f89fc',
  },
});
