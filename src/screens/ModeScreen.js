import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Appearance,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ModeScreen = () => {
  const navigation = useNavigation();

  const [selectedMode, setSelectedMode] = useState('light');

  const handleModeChange = mode => {
    setSelectedMode(mode);
  };

  const handlesetup = () => {
    navigation.navigate('WelcomeScreen', {selectedMode});
  };

  const isDarkMode = () => {
    return selectedMode === 'auto'
      ? Appearance.getColorScheme() === 'light'
      : selectedMode === 'dark';
  };

  return (
    <View style={[styles.container, isDarkMode() && styles.darkModeContainer]}>
      <TouchableOpacity onPress={() => {}}>
        <Text style={[styles.backButton, isDarkMode() && styles.darkModeText]}>
          {'< Back'}
        </Text>
      </TouchableOpacity>

      <Text style={[styles.heading, isDarkMode() && styles.darkModeText]}>
        ㅤLight or ㅤDark Display
      </Text>
      <Text style={[styles.subHeading, isDarkMode() && styles.darkModeText]}>
        Select a light or dark appearance and see how iPhone adjusts depending
        on which one you choose.
      </Text>

      <View style={styles.imageContainer}>
        <Image
          source={require('../components/1mode.png')}
          style={styles.image}
        />
        <Image
          source={require('../components/2mode.png')}
          style={styles.image}
        />
        <Image
          source={require('../components/2mode.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.modeOptions}>
        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => handleModeChange('light')}>
          <Text style={[styles.radioText, isDarkMode() && styles.darkModeText]}>
            Light
          </Text>
          <View style={styles.radioIndicator}>
            {selectedMode === 'light' && (
              <View style={styles.selectedIndicator} />
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => handleModeChange('dark')}>
          <Text style={[styles.radioText, isDarkMode() && styles.darkModeText]}>
            Dark
          </Text>
          <View style={styles.radioIndicator}>
            {selectedMode === 'dark' && (
              <View style={styles.selectedIndicator} />
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => handleModeChange('auto')}>
          <Text style={[styles.radioText, isDarkMode() && styles.darkModeText]}>
            Auto
          </Text>
          <View style={styles.radioIndicator}>
            {selectedMode === 'auto' && (
              <View style={styles.selectedIndicator} />
            )}
          </View>
        </TouchableOpacity>
      </View>

      {/* Continue button */}
      <TouchableOpacity onPress={handlesetup} style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  darkModeContainer: {
    backgroundColor: 'black',
  },
  backButton: {
    color: '#0285FF',
    fontSize: 18,
    marginBottom: 20,
  },
  darkModeText: {
    color: 'white',
  },
  heading: {
    marginLeft: 80,
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
  imageContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    width: '33%',
    height: 250,
    resizeMode: 'cover',
    marginRight: 3,
  },
  modeOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioText: {
    fontSize: 18,
    marginRight: 10,
    color: 'black',
    marginTop: 20,
  },
  radioIndicator: {
    marginTop: 20,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#0285FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#0285FF',
  },
  continueButton: {
    backgroundColor: '#0285FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 50,
  },
  darkModeButton: {
    backgroundColor: '#CCCCCC',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ModeScreen;
