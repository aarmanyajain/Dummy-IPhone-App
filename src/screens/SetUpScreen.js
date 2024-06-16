import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SetUpScreen = () => {
  const navigation = useNavigation();

  const handlesetup = () => {
    navigation.navigate('ModeScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        {/* Back button with left arrow */}
        <Text style={styles.backButton}>{'< Back'}</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Set Up iPhone</Text>
      <Text style={styles.subHeading}>
        You can set up this iPhone for yourself or for a child in your Family.
        Child accounts can be created by a parent or legal guardian for children
        12 or younger.
      </Text>

      <Image source={require('../components/setup.png')} style={styles.image} />

      {/* setup button */}
      <TouchableOpacity style={styles.setupButton}>
        <Text style={styles.setupButtonText}>Set Up for Myself</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlesetup} style={styles.setupButton2}>
        <Text style={styles.setupButton2}>Skip Set Up just Start Fast</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  backButton: {
    color: '#0285FF',
    fontSize: 18,
    marginBottom: 20,
  },
  heading: {
    marginLeft: 60,
    fontSize: 42,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    marginTop: 50,
  },
  subHeading: {
    fontSize: 18,
    color: 'black',
    marginBottom: 20,
    marginLeft: 20,
  },
  image: {
    width: '55%',
    height: 350,
    resizeMode: 'contain',
    marginLeft: 80,
    marginBottom: 70,
  },
  setupButton: {
    backgroundColor: '#0285FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  setupButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  setupButton2: {
    color: '#0285FF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 40,
  },
});

export default SetUpScreen;
