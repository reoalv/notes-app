import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../Header';
import {AntDesign, Ionicons} from '../../Utils/Icons';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Utils/Color';

const _renderLeftComponent = (onPressAdd: () => void) => (
  <TouchableOpacity activeOpacity={0.5} onPress={onPressAdd}>
    <AntDesign
      name="addfile"
      size={moderateScale(24)}
      color={Colors.brandColor.darkGreen}
    />
  </TouchableOpacity>
);

const _renderRightComponent = (onPressFilter: () => void) => (
  <View style={{flexDirection: 'row'}}>
    <TouchableOpacity activeOpacity={0.5} onPress={onPressFilter}>
      <Ionicons
        name="filter"
        size={moderateScale(24)}
        color={Colors.brandColor.darkGreen}
      />
    </TouchableOpacity>
  </View>
);

type HeaderHomeProps = {
  onPressAdd: () => void;
  onPressFilter: () => void;
};

const HeaderHome = (props: HeaderHomeProps) => {
  return (
    <Header
      bgColor={Colors.brandColor.softGreen}
      leftComponent={_renderLeftComponent(props.onPressAdd)}
      righComponent={_renderRightComponent(props.onPressFilter)}
    />
  );
};

export default HeaderHome;
