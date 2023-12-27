import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    flexGrow: 1,
    paddingBottom: moderateScale(12),
  },
});

export default styles;
