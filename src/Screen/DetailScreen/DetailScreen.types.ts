import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Routes, RoutesStackParams} from '../Screen.types';

export type DetailScreenNavigationProps = NativeStackNavigationProp<
  RoutesStackParams,
  Routes.DetailScreen
>;

export type DetailScreenPropParams =
  | {
      title: string;
      body: string;
      isFinished: boolean;
    }
  | undefined;

export type DetailScreenProps = {
  navigation: DetailScreenNavigationProps;
  route: {
    params?: DetailScreenPropParams;
  };
};
