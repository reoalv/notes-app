import {StyleSheet} from 'react-native';
import Colors from '../../Utils/Color';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.brandColor.softGreen,
    flex: 1,
    padding: moderateScale(12),
  },
  containerScroll: {
    backgroundColor: Colors.neutralColor.white,
    flexGrow: 1,
    padding: moderateScale(12),
    borderRadius: moderateScale(8),
  },
});

export default styles;
