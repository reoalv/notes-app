import {View, Text} from 'react-native';
import React from 'react';
import styles from './HomeScreen.styles';
import ListNotes from '../../Component/ListNotes';
import {dummy} from '../dummyData';
import {HomeScreenProps} from './HomeScreen.types';
import {Routes} from '../Screen.types';

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textWelcome}>Welcome!</Text>
      <ListNotes
        data={dummy}
        onPress={val => props.navigation.navigate(Routes.DetailScreen, val)}
      />
    </View>
  );
};

export default HomeScreen;
