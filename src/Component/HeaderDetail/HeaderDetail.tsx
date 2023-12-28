import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../Header';
import {AntDesign} from '../../Utils/Icons';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Utils/Color';

const _renderLeftComponent = (onPressBack: () => void) => (
  <TouchableOpacity activeOpacity={0.5} onPress={onPressBack}>
    <AntDesign
      name="doubleleft"
      size={moderateScale(24)}
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
) => (
  <View style={{flexDirection: 'row'}}>
    {_contentIsDone(isDone, onPressDone)}
    {_contentDelete(onPressDelete)}
    {_contentSave(onPressSave)}
  </View>
);

type HeaderDetailProps = {
  onPressBack: () => void;
  onPressDelete: () => void;
  onPressSave: () => void;
  onPressDone: () => void;
  isDone: boolean;
};

const HeaderDetail = (props: HeaderDetailProps) => {
  return (
    <Header
      bgColor={Colors.brandColor.softGreen}
      leftComponent={_renderLeftComponent(props.onPressBack)}
      righComponent={_renderRightComponent(
        props.onPressSave,
        props.onPressDelete,
        props.onPressDone,
        props.isDone,
      )}
    />
  );
};

const styles = StyleSheet.create({
  containerContentSave: {
    paddingVertical: moderateScale(2),
    paddingHorizontal: moderateScale(8),
    backgroundColor: 'green',
    borderRadius: moderateScale(4),
  },
  textContentSave: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: Colors.neutralColor.white,
  },
  containerContentDelete: {
    paddingVertical: moderateScale(2),
    paddingHorizontal: moderateScale(8),
    backgroundColor: Colors.commonColor.dangerRed,
    borderRadius: moderateScale(4),
    marginRight: moderateScale(6),
  },
  textContentDelete: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: Colors.neutralColor.white,
  },
  containerIsDone: {
    paddingVertical: moderateScale(2),
    paddingHorizontal: moderateScale(8),
    borderWidth: moderateScale(1),
    borderColor: Colors.brandColor.darkGreen,
    borderRadius: moderateScale(4),
    marginRight: moderateScale(6),
  },
  containerNotDone: {
    paddingVertical: moderateScale(2),
    paddingHorizontal: moderateScale(8),
    backgroundColor: Colors.brandColor.darkGreen,
    borderRadius: moderateScale(4),
    marginRight: moderateScale(6),
  },
  textContentIsDone: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: Colors.brandColor.darkGreen,
  },
  textContentNotDone: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: Colors.neutralColor.white,
  },
});

export default HeaderDetail;
