import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Utils/Color';

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    padding: moderateScale(8),
    borderBottomWidth: moderateScale(1),
    borderColor: Colors.neutralColor.grey,
  },
  textSection: {
    marginLeft: moderateScale(6),
    fontSize: moderateScale(12),
    color: Colors.neutralColor.black,
  },
});

export default styles;
