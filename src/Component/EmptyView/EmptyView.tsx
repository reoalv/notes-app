import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Utils/Color';

const EmptyView = () => {
  const contentBody =
    ' Buat dan tambahkan catatan baru\natau perhatikan penerapan filter';
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Tidak ada catatan</Text>
      <Text style={styles.textDesc}>{contentBody}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textHeader: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    color: Colors.neutralColor.black,
    textAlign: 'center',
  },
  textDesc: {
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: Colors.neutralColor.grey,
    textAlign: 'center',
  },
});

export default EmptyView;
