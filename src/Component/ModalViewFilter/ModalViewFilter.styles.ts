import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Utils/Color';
import {WIDTH_WINDOW} from '../../Utils/Dimension';

const styles = StyleSheet.create({
  submit: {
    alignSelf: 'flex-end',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerContent: {
    backgroundColor: Colors.neutralColor.softGrey,
    overflow: 'hidden',
    borderWidth: moderateScale(1),
    borderColor: Colors.neutralColor.grey,
    borderRadius: moderateScale(6),
    borderTopRightRadius: 0,
  },
  containerExpand: {
    minHeight: moderateScale(200),
    width: WIDTH_WINDOW / 2,
    top: moderateScale(30),
    right: moderateScale(30),
    position: 'absolute',
  },
});

export default styles;