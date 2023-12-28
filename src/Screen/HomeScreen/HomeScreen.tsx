import {View} from 'react-native';
import React from 'react';
import styles from './HomeScreen.styles';
import ListNotes from '../../Component/ListNotes';
import {dummy} from '../dummyData';
import {AnySetter, HomeScreenProps} from './HomeScreen.types';
import {Routes} from '../Screen.types';
import HeaderHome from '../../Component/HeaderHome';
import {moderateScale} from 'react-native-size-matters';
import ModalViewFilter from '../../Component/ModalViewFilter';
import {WIDTH_WINDOW} from '../../Utils/Dimension';
import {CardProps} from '../../Component/CardNotes/CardNotes.types';

const onFilter = (setLayout: AnySetter) => {
  setLayout({
    _height: moderateScale(30),
    _width: moderateScale(30),
    x: WIDTH_WINDOW - moderateScale(60),
    y: moderateScale(30),
  });
};

const getDataFilter = (
  data: Array<CardProps>,
  filterFinish: boolean,
  filterNotFinish: boolean,
) => {
  let dataFilter: Array<CardProps> = [];

  if (filterFinish && filterNotFinish) {
    return data;
  }

  if (filterFinish) {
    dataFilter = data.filter(v => v.isFinished === true);
  }

  if (filterNotFinish) {
    dataFilter = data.filter(v => v.isFinished === false);
  }

  return dataFilter;
};

const HomeScreen = (props: HomeScreenProps) => {
  const [layoutData, setLayoutData] = React.useState<any>(null);
  const [filterFinish, setFilterFinish] = React.useState<boolean>(true);
  const [filterNotFinish, setFilterNotFinish] = React.useState<boolean>(true);

  const dataFilter = getDataFilter(dummy, filterFinish, filterNotFinish);

  return (
    <>
      <HeaderHome
        onPressAdd={() => props.navigation.navigate(Routes.DetailScreen)}
        onPressFilter={() => onFilter(setLayoutData)}
      />
      <View style={styles.container}>
        <ListNotes
          data={dataFilter}
          onPress={val => props.navigation.navigate(Routes.DetailScreen, val)}
        />
      </View>
      {layoutData !== null && (
        <ModalViewFilter
          layoutData={layoutData}
          close={() => {
            setLayoutData(null);
          }}
          filterFinish={filterFinish}
          filterNotFinish={filterNotFinish}
          onPressSubmit={(arg, arg2) => {
            setFilterFinish(arg);
            setFilterNotFinish(arg2);
            setLayoutData(null);
          }}
        />
      )}
    </>
  );
};

export default HomeScreen;
