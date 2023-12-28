import {StyleSheet} from 'react-native';
import Colors from '../../Utils/Color';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.brandColor.softGreen,
    flexGrow: 1,
    padding: moderateScale(18),
  },
});

export default styles;
