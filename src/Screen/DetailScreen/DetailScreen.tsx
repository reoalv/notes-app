import {View, Text} from 'react-native';
import React from 'react';
import {DetailScreenProps} from './DetailScreen.types';

const DetailScreen = (props: DetailScreenProps) => {
  console.log(props.route.params);
  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;
