import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Utils/Color';

const {neutralColor, brandColor, transparent} = Colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: moderateScale(120),
    padding: moderateScale(8),
    borderRadius: moderateScale(6),
    borderWidth: moderateScale(1.5),
    borderColor: brandColor.primaryGreen,
    backgroundColor: neutralColor.white,
    margin: moderateScale(4),
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
