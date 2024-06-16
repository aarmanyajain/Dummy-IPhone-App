import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import {useNavigation} from '@react-navigation/native';

const AppearScreen = () => {
  const [selectedSize, setSelectedSize] = useState('default');

  const navigation = useNavigation();

  const handleSizeChange = size => {
    setSelectedSize(size);
  };

  const handleContinue = () => {
    navigation.navigate('SetUpScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.backButton}>{'< Back'}</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => {}} style={styles.iconContainer}>
        <Image source={require()} style={styles.icon} />
      </TouchableOpacity> */}

      <Text style={styles.heading}>Appearance</Text>
      <Text style={styles.subHeading}>
        Choose the size of text and icons on iPhone.
      </Text>

      <Image
        source={require('../components/appear.png')}
        style={styles.image}
      />

      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={2}
          step={1}
          value={
            selectedSize === 'default' ? 0 : selectedSize === 'medium' ? 1 : 2
          }
          onValueChange={value => {
            if (value === 0) handleSizeChange('default');
            else if (value === 1) handleSizeChange('medium');
            else handleSizeChange('large');
          }}
          minimumTrackTintColor="#0285FF"
          maximumTrackTintColor="gray"
          thumbTintColor="#0285FF"
        />
      </View>

      {/* Labels for Default, Medium, and Large */}
      <View style={styles.labelsContainer}>
        <Text style={styles.label}>Default</Text>
        <Text style={styles.label}>Medium</Text>
        <Text style={styles.label}>Large</Text>
      </View>

      {/* Continue button */}
      <TouchableOpacity onPress={handleContinue} style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
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
  iconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
  heading: {
    marginLeft: 78,
    fontSize: 42,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    marginTop: 50,
  },
  subHeading: {
    fontSize: 18,
    color: 'black',
    marginBottom: 60,
    marginLeft: 20,
  },
  image: {
    width: '55%',
    height: 350,
    resizeMode: 'contain',
    marginLeft: 80,
    marginBottom: 30,
  },
  barContainer: {
    flexDirection: 'row',
    height: 5,
    marginBottom: 50,
  },
  barPart: {
    flex: 1,
    height: '100%',
    backgroundColor: 'lightgray',
    marginRight: 5,
  },

  continueButton: {
    backgroundColor: '#0285FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  slider: {
    borderRadius: 25,
    height: 30,

    width: '90%',
    alignSelf: 'center',
    marginTop: 0,
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    color: 'black',
  },
});

export default AppearScreen;
