// SplashScreen.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({LoggedIn}) => {
  return (
    <View style={styles.container}>
      <Image
        source={LoggedIn ? require('../../assets/images/bgTask.jpg') :   require('../../assets/images/bgJ.jpg')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Set your desired background color
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // or 'contain' based on your preference
  },
});

export default SplashScreen;
