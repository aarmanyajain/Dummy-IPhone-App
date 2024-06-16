import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  PanResponder,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import 'react-native-gesture-handler';

const HelloScreen = () => {
  const navigation = useNavigation();

  const [isOpen, setIsOpen] = useState(false);

  const handleSwipeUp = () => {
    setIsOpen(true);
    navigation.navigate('AppearScreen');
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dy < -50 && gestureState.vy < -1) {
        handleSwipeUp();
      }
    },
    onPanResponderRelease: (_, gestureState) => {},
  });
  return (
    <View style={styles.container}>
      <Image source={require('../components/blur.jpg')} style={styles.image} />
      <LottieView
        source={require('../assets/white.json')}
        autoPlay={true}
        loop={true}
        style={styles.animation}
      />
      <View style={styles.swipeBarContainer} {...panResponder.panHandlers}>
        <TouchableOpacity onPress={handleSwipeUp}>
          <Text style={styles.swipeText}>Swipe up to open</Text>
        </TouchableOpacity>
        <View style={[styles.swipeBar, styles.swipeArea]} />
      </View>
      {isOpen && <View style={styles.newScreen}></View>}

      <View style={styles.statusBarIcons}>
        <Image
          source={require('../components/network.png')}
          style={styles.icon}
        />
        <Image
          source={require('../components/battery.png')}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  animation: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    fontSize: 2,
  },
  swipeBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    gap: 20,
  },

  swipeArea: {
    flex: 1,
  },
  swipeText: {
    fontSize: 17,
    color: '#fff',
  },
  swipeBar: {
    height: 4,
    width: 150,
    backgroundColor: '#fff',
    marginLeft: 0,
    borderRadius: 5,
  },

  statusBarIcons: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    tintColor: 'white',
  },

  newScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default HelloScreen;
