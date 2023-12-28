import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../Header';
import {AntDesign} from '../../Utils/Icons';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Utils/Color';
import {HeaderDetailProps} from './HeaderDetail.types';
import styles from './HeaderDetail.styles';

const _renderLeftComponent = (onPressBack: () => void) => (
  <TouchableOpacity activeOpacity={0.5} onPress={onPressBack}>
    <AntDesign
      name="doubleleft"
      size={moderateScale(28)}
      color={Colors.brandColor.darkGreen}
    />
  </TouchableOpacity>
);

const _contentSave = (onPressSave: () => void) => (
  <TouchableOpacity
    style={styles.containerContentSave}
    activeOpacity={0.5}
    onPress={onPressSave}>
    <Text style={styles.textContentSave}>Simpan</Text>
  </TouchableOpacity>
);

const _contentDelete = (onPressDelete: () => void) => (
  <TouchableOpacity
    style={styles.containerContentDelete}
    activeOpacity={0.5}
    onPress={onPressDelete}>
    <Text style={styles.textContentDelete}>Hapus</Text>
  </TouchableOpacity>
);

const _contentIsDone = (isDone: boolean, onPressDone: () => void) => (
  <TouchableOpacity
    style={isDone ? styles.containerIsDone : styles.containerNotDone}
    activeOpacity={0.5}
    onPress={onPressDone}>
    <Text style={isDone ? styles.textContentIsDone : styles.textContentNotDone}>
      {isDone ? 'Ubah Kembali' : 'Tandai Selesai'}
    </Text>
  </TouchableOpacity>
);

const _renderRightComponent = (
  onPressSave: () => void,
  onPressDelete: () => void,
  onPressDone: () => void,
  isDone: boolean,
  isNew: boolean,
) => (
  <View style={{flexDirection: 'row'}}>
    {_contentIsDone(isDone, onPressDone)}
    {!isNew && _contentDelete(onPressDelete)}
    {_contentSave(onPressSave)}
  </View>
);

const HeaderDetail = (props: HeaderDetailProps) => {
  const {
    isDone,
    isNew = true,
    onPressBack,
    onPressDelete,
    onPressDone,
    onPressSave,
  } = props;
  return (
    <Header
      bgColor={Colors.brandColor.softGreen}
      leftComponent={_renderLeftComponent(onPressBack)}
      righComponent={_renderRightComponent(
        onPressSave,
        onPressDelete,
        onPressDone,
        isDone,
        isNew,
      )}
    />
  );
};

export default HeaderDetail;
