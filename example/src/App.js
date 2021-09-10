import React, { useState, useEffect } from 'react';

import { StyleSheet, View, Text, Platform } from 'react-native';
import { JsiTrial } from 'react-native-jsi-trial';

export default function App() {
  const [result, setResult] = useState(0);
  const [deviceName, setDeviceName] = useState('');
  useEffect(() => {
    if (Platform.OS === 'android') {
      setDeviceName(JsiTrial.getDeviceInfo());
      setResult(JsiTrial.multiply(22, 87));
      return;
    }
    setResult('Only works in android');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        STRAIGHT OUTTA CPP: <Text style={styles.result}>{result}</Text>
      </Text>
      <Text style={styles.text}>DEVICE INFO STRAIGHT OUTTA JAVA WITHOUT BRIDGE</Text>
      <Text style={styles.result}>{deviceName}</Text>
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
