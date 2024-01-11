import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {HEIGHT_WINDOW, WIDTH_WINDOW} from '../../Utils/Dimension';
import Colors from '../../Utils/Color';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    minHeight: moderateScale(100),
    width: WIDTH_WINDOW * 0.6,
    top: HEIGHT_WINDOW / 3,
    position: 'absolute',
    backgroundColor: Colors.neutralColor.softGrey,
    overflow: 'hidden',
    borderRadius: moderateScale(6),
  },
  containerText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(6),
    borderWidth: moderateScale(1),
    borderColor: Colors.brandColor.darkGreen,
    borderTopLeftRadius: moderateScale(6),
    borderTopRightRadius: moderateScale(6),
  },
  textContent: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    color: Colors.neutralColor.black,
    textAlign: 'center',
  },
  containerButton: {
    flexDirection: 'row',
  },
});

export default styles;
