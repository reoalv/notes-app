import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Routes, RoutesStackParams} from '../Screen.types';
import {AnyActionFn} from '../../Redux/Store';

export type DetailScreenNavigationProps = NativeStackNavigationProp<
  RoutesStackParams,
  Routes.DetailScreen
>;

export type DetailScreenParams = {
  id?: string;
  title?: string;
  body?: string;
  isFinished?: boolean;
  isNew: boolean;
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

export type OnSaveData = {
  dispatch: AnyActionFn;
  navigation: DetailScreenNavigationProps;
  userId: string;
  textTitle: string;
  textBody: string;
  isFinish: boolean;
  isNew?: boolean;
};
