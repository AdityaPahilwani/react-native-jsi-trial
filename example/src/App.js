import React, { useState, useEffect } from 'react';

import { StyleSheet, View, Text, Platform } from 'react-native';
import { JsiTrial } from 'react-native-jsi-trial';

export default function App() {
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (Platform.OS === 'android') {
      return setResult(JsiTrial.multiply(39,54));
    }
    setResult('Only works in android');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>STRAIGHT OUTTA CPP: {result}</Text>
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
  },
});
