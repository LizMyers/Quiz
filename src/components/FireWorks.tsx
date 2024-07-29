import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';


export const FireWorks= () => {
  return (
   
      <LottieView
        source={require('../../assets/fireworks.json')}
        autoPlay
        loop={true}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default FireWorks;