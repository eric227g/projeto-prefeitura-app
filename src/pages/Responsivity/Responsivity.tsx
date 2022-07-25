import React from 'react';
import { StyleSheet, View } from 'react-native';
import {} from 'react-native-iphone-x-helper';
import { RFValue as RF } from 'react-native-responsive-fontsize';

export const Responsivity = () => {
  return <View style={styles.container}>Foda-se{/* <Text style={{ fontSize: RF(20) }}>E ai!</Text> */}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    flex: 0.5,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#ff066',
  },
});
