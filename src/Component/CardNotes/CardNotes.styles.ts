import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Utils/Color';
import {WIDTH_WINDOW} from '../../Utils/Dimension';

const {neutralColor, brandColor, transparent} = Colors;

const styles = StyleSheet.create({
  container: {
    width: (WIDTH_WINDOW - WIDTH_WINDOW / moderateScale(7)) / 2,
    alignSelf: 'flex-start',
    height: moderateScale(120),
    padding: moderateScale(8),
    borderRadius: moderateScale(6),
    borderWidth: moderateScale(1.5),
    borderColor: brandColor.primaryGreen,
    backgroundColor: neutralColor.white,
    marginVertical: moderateScale(6),
    shadowColor: neutralColor.black,
    elevation: 2,
  },
  title: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: neutralColor.black,
  },
  body: {
    fontSize: moderateScale(14),
    marginTop: moderateScale(4),
    color: neutralColor.black,
  },
  containerFinish: {
    backgroundColor: transparent.black025,
    position: 'absolute',
    top: 0,
    right: 0,
    borderTopEndRadius: moderateScale(4),
    borderBottomStartRadius: moderateScale(4),
    paddingVertical: moderateScale(2),
    paddingHorizontal: moderateScale(4),
  },
  finishText: {
    fontSize: moderateScale(10),
    fontWeight: '600',
    color: neutralColor.black,
  },
});

export default styles;
