import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const NoteScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.appText}> {'< Notes'}</Text>
        </TouchableOpacity>
        <View style={styles.topIconsContainer}>
          <Image
            source={require('../components/i6.jpg')}
            style={styles.topIcon}
          />
          <Image
            source={require('../components/i1.jpg')}
            style={styles.topIcon2}
          />
          <TouchableOpacity style={styles.doneButton}>
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Editable Content */}
      <TextInput
        style={styles.editableContent}
        multiline={true}
        placeholder="Type anything..."
        textAlignVertical="top"
      />

      {/* Bottom Icons */}
      <View style={styles.bottomIconsContainer}>
        <Image
          source={require('../components/i2.jpg')}
          style={styles.bottomIcon}
        />
        <Image
          source={require('../components/i3.jpg')}
          style={styles.bottomIcon}
        />
        <Image
          source={require('../components/i4.jpg')}
          style={styles.bottomIcon}
        />
        <Image
          source={require('../components/i5.jpg')}
          style={styles.bottomIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    width: 30,
    height: 30,
    tintColor: '#FFBF00',
  },
  topIconsContainer: {
    flexDirection: 'row',
  },
  topIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 17,
    bottom: 25,
  },
  topIcon2: {
    width: 25,
    height: 25,
    marginHorizontal: 19,
    bottom: 25,
    right: 7,
  },
  editableContent: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
    fontSize: 18,
    padding: 10,
    marginTop: 20,
    textAlignVertical: 'top',
  },
  bottomIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  bottomIcon: {
    width: 35,
    height: 35,
  },
  doneButton: {
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  doneButtonText: {
    fontSize: 18,
    color: '#FFBF00',
    bottom: 35,
  },
  appText: {
    color: '#FFBF00',
    fontSize: 18,
    bottom: 30,
  },
});

export default NoteScreen;
