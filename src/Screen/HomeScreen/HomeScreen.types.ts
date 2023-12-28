import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TextStyle, ViewStyle} from 'react-native';
import {Routes, RoutesStackParams} from '../Screen.types';

export type Styles = {
  container: ViewStyle;
  textWelcome: TextStyle;
};

export type HomeScreenNavigationProps = NativeStackNavigationProp<
  RoutesStackParams,
  Routes.HomeScreen
>;

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProps;
};

export type AnySetter = React.Dispatch<React.SetStateAction<any>>;
