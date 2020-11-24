import React, {useState, useEffect} from 'react';

import {StyleSheet, Text, View, Button} from 'react-native';
import Bulb from './Bulb';
export default function App() {
  const [isOn, setIson] = useState(false);
  const updateStatus = () => {
    Bulb.getStatus((error, isOn) => {
      console.log(isOn);
      setIson(isOn);
    });
  };
  useEffect(() => {
    updateStatus();
    console.log('ı am effect');
  }, []);
  const turnOn = () => {
    Bulb.turnOn();
    updateStatus();
  };
  const turnOff = () => {
    Bulb.turnOff();
    updateStatus();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Lamba Uygulaması</Text>
      <Text> Ampul {isOn ? 'AÇIK' : 'KAPALI'}</Text>
      {!isOn ? (
        <Button onPress={turnOn} title="AÇ " color="#FF6347" />
      ) : (
        <Button onPress={turnOff} title="KAPAT" color="#FF6347" />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
