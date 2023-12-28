import {View} from 'react-native';
import React from 'react';
import styles from './HomeScreen.styles';
import ListNotes from '../../Component/ListNotes';
import {AnySetter, HomeScreenProps} from './HomeScreen.types';
import {Routes} from '../Screen.types';
import HeaderHome from '../../Component/HeaderHome';
import {moderateScale} from 'react-native-size-matters';
import ModalViewFilter from '../../Component/ModalViewFilter';
import {WIDTH_WINDOW} from '../../Utils/Dimension';
import {CardProps} from '../../Component/CardNotes/CardNotes.types';
import {useSelector} from 'react-redux';
import {RootState} from '../../Redux/Store';
import EmptyView from '../../Component/EmptyView/EmptyView';

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

  const {data} = useSelector((state: RootState) => state.NotesReducers);
  const dataFilter = getDataFilter(data, filterFinish, filterNotFinish);
  const isEmpty = dataFilter.length <= 0;

  return (
    <>
      <HeaderHome
        onPressAdd={() =>
          props.navigation.navigate(Routes.DetailScreen, {isNew: true})
        }
        onPressFilter={() => onFilter(setLayoutData)}
      />
      <View style={styles.container}>
        {!isEmpty ? (
          <ListNotes
            data={dataFilter}
            onPress={val =>
              props.navigation.navigate(Routes.DetailScreen, {
                ...val,
                isNew: false,
              })
            }
          />
        ) : (
          <EmptyView />
        )}
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
