import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, PanResponder, Appearance} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = ({selectedMode}) => {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [textColor, setTextColor] = useState('black');
  const [swipeBarColor, setSwipeBarColor] = useState(); // Default color for light mode

  const navigation = useNavigation();

  const handleSwipe = () => {
    navigation.navigate('HomeScreen');
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderRelease: (event, gestureState) => {
      // Check if the swipe is in the upward direction
      if (gestureState.dy < -50) {
        handleSwipe();
      }
    },
  });

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={styles.textContainer}>
        <Text style={[styles.welcomeText, {color: textColor}]}>
          Welcome to iPhone
        </Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={[styles.swipeText, {color: textColor}]}>
          Swipe up to get started
        </Text>
      </View>

      <View
        style={[styles.swipeBarContainer, {backgroundColor: swipeBarColor}]}
        {...panResponder.panHandlers}>
        <View style={[styles.swipeBar, {backgroundColor: textColor}]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: -480,
  },
  swipeText: {
    fontSize: 18,
    marginBottom: -760,
    zIndex: 1,
  },
  swipeBarContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  swipeBar: {
    width: 140,
    height: 5,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default WelcomeScreen;
