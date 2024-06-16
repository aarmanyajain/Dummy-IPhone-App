import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../components/bg5.jpg')}
      style={styles.backgroundImage}>
      <Text style={styles.timeText}>12:45</Text>
      <View style={styles.container}>
        <Image
          source={require('../components/network.png')}
          style={styles.networkIcon}
        />
        <Image
          source={require('../components/battery.png')}
          style={styles.batteryIcon}
        />

        <StatusBar backgroundColor={'blue'} barStyle={'dark-content'} />

      
        {/* First Box */}
        <View style={styles.weatherBox}>
          <Text style={styles.weatherTitle}>Delhi</Text>
          <Text style={styles.temperatureText}>13°</Text>
          <Text style={styles.weatherDetails}>Sunny</Text>
          <Text style={styles.weatherDetails}> ㅤㅤ H: 20° L: 3°</Text>
        </View>

        {/* Second Box */}
        <View style={styles.calendarBox}>
          <Text style={styles.calendarDay}>Monday</Text>
          <Text style={styles.calendarDate}>19</Text>
          <Text style={styles.calendarEvents}>No events today</Text>
          <Text style={styles.calendarEvent}>No events today</Text>
        </View>

        {/* Labels below the boxes */}
        <Text style={styles.labelText}>Weather</Text>
        <Text style={styles.labelText2}>Calendar</Text>

        <View style={styles.appIcons}>
          {/* App 1 */}
          <View style={styles.appIconContainer}>
            <Image
              source={require('../components/facetime.png')}
              style={styles.appIcon}
            />
            <Text style={styles.appText}>Facetime</Text>
          </View>

          <View style={styles.appIconContainer}>
            <Image
              source={require('../components/calendar.png')}
              style={styles.appIcon}
            />
            <Text style={styles.appText}>Calendar</Text>
          </View>

          <View style={styles.appIconContainer}>
            <Image
              source={require('../components/mail.png')}
              style={styles.appIcon}
            />
            <Text style={styles.appText}>Mail</Text>
          </View>

          <TouchableOpacity
            style={styles.appIconContainer}
            onPress={() => navigation.navigate('NoteScreen')}>
            <Image
              source={require('../components/notes.png')}
              style={styles.appIcon}
            />
            <Text style={styles.appText}>Notes</Text>
          </TouchableOpacity>

          <View style={styles.appIconContainer}>
            <Image
              source={require('../components/clock.png')}
              style={styles.appIcon}
            />
            <Text style={styles.appText}>Clock</Text>
          </View>

          <View style={styles.appIconContainer}>
            <Image
              source={require('../components/app-store.png')}
              style={styles.appIcon}
            />
            <Text style={styles.appText}>App Store</Text>
          </View>

          <View style={styles.appIconContainer}>
            <Image
              source={require('../components/files.png')}
              style={styles.appIcon}
            />
            <Text style={styles.appText}>Files</Text>
          </View>

          <View style={styles.appIconContainer}>
            <Image
              source={require('../components/apple-tv.png')}
              style={styles.appIcon}
            />
            <Text style={styles.appText}>TV</Text>
          </View>

          <View style={styles.appIcons3}>
            <View style={styles.appIconContainer}>
              <Image
                source={require('../components/wallet.png')}
                style={styles.appIcon}
              />
              <Text style={styles.appText}>Wallet</Text>
            </View>

            <View style={styles.appIconContainer}>
              <Image
                source={require('../components/calculator.png')}
                style={styles.appIcon}
              />
              <Text style={styles.appText}>Calculator</Text>
            </View>

            <View style={styles.appIconContainer}>
              <Image
                source={require('../components/weather.png')}
                style={styles.appIcon}
              />
              <Text style={styles.appText}>Weather</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomRectangle}>
          {/* Phone */}
          <View style={styles.bottomAppContainer}>
            <Image
              source={require('../components/camera.png')}
              style={styles.bottomAppIcon}
            />
          </View>

          {/* Safari */}
          <View style={styles.bottomAppContainer}>
            <Image
              source={require('../components/safari.png')}
              style={styles.bottomAppIcon}
            />
          </View>

          {/* Message */}
          <View style={styles.bottomAppContainer}>
            <Image
              source={require('../components/ios-message.png')}
              style={styles.bottomAppIcon}
            />
          </View>

          {/* Music */}
          <View style={styles.bottomAppContainer}>
            <Image
              source={require('../components/music.png')}
              style={styles.bottomAppIcon}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'transparent',
  },
  networkIcon: {
    width: 20,
    height: 20,
    tintColor: 'white',
    right: -325,
    top: -10,
  },
  batteryIcon: {
    width: 20,
    height: 20,
    tintColor: 'white',
    right: -350,
    top: -30,
  },
  timeText: {
    position: 'absolute',
    top: 10,
    left: 15,
    fontSize: 18,
    color: 'white',
  },
  weatherBox: {
    borderRadius: 20,
    padding: 15,
    marginVertical: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5D7DFF',
    width: '48%',
  },
  weatherTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    right: 47,
    bottom: 10,
  },
  temperatureText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    right: 40,
    bottom: 20,
  },
  weatherDetails: {
    fontSize: 16,
    color: 'white',
    right: 49,
  },
  calendarBox: {
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '48%',
    height: '19.4%',
    left: 188,
    bottom: 166,
  },
  calendarDay: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
    right: 47,
    bottom: 15,
  },
  calendarDate: {
    fontSize: 48,
    color: 'black',
    right: 50,
    bottom: 24,
  },
  calendarEvents: {
    fontSize: 16,
    color: 'black',
    right: 18,
    bottom: 3,
  },
  labelText: {
    fontSize: 15,
    fontWeight: 'bold',
    bottom: 183,
    left: 60,
  },
  labelText2: {
    fontSize: 15,
    fontWeight: 'bold',
    bottom: 201,
    left: 252,
  },

  bottomRectangle: {
    height: 85,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    left: 20,
    right: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
  bottomAppContainer: {
    alignItems: 'center',
  },
  bottomAppIcon: {
    width: 55,
    height: 55,
    marginBottom: 2,
  },
  bottomAppName: {
    color: 'white',
    fontSize: 12,
  },
  appIcons: {
    padding: 10,
    gap: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: -180,
  },
  appIconContainer: {
    alignItems: 'center',
    marginBottom: 15,
    gap: 5,
  },
  appIcon: {
    width: 60,
    height: 60,
  },
  appText: {
    color: 'white',
    fontSize: 15,
  },
  appIcons3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 33,
  },
});

export default HomeScreen;
