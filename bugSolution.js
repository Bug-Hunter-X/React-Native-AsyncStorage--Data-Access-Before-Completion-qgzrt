// bug.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    // Incorrect: Accessing data immediately
    const retrievedData = await AsyncStorage.getItem(key);
    console.log('Retrieved data (incorrect):', retrievedData);
  } catch (e) {
    console.error('Error storing data:', e);
  }
};

// bugSolution.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    // Correct: Accessing data after storage is complete
    const retrievedData = await AsyncStorage.getItem(key);
    console.log('Retrieved data (correct):', retrievedData);
  } catch (e) {
    console.error('Error storing data:', e);
  }
};
const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      return null;
    }
  } catch (e) {
    console.error('Error getting data:', e);
  }
};

export { storeData, getData };