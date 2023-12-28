import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Routes, RoutesStackParams} from '../Screen.types';

export type DetailScreenNavigationProps = NativeStackNavigationProp<
  RoutesStackParams,
  Routes.DetailScreen
>;

export type DetailScreenParams = {
  title: string;
  body: string;
  isFinished: boolean;
};

export type DetailScreenPropParams = DetailScreenParams | undefined;

export type DetailScreenProps = {
  navigation: DetailScreenNavigationProps;
  route: {
    params?: DetailScreenPropParams;
  };
};

export type StringSetter = React.Dispatch<React.SetStateAction<string>>;

export type RenderFieldProps = {
  value: string;
  setters: StringSetter;
  isFinish?: boolean;
};
