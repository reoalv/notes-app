import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Utils/Color';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: Colors.neutralColor.grey,
  },
});

export default styles;
