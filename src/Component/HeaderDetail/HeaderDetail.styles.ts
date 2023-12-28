import {moderateScale} from 'react-native-size-matters';
import Colors from '../../Utils/Color';
import {StyleSheet} from 'react-native';

const {brandColor, commonColor, neutralColor} = Colors;

const styles = StyleSheet.create({
  containerContentSave: {
    paddingVertical: moderateScale(2),
    paddingHorizontal: moderateScale(8),
    backgroundColor: 'green',
    borderRadius: moderateScale(4),
  },
  textContentSave: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: neutralColor.white,
  },
  containerContentDelete: {
    paddingVertical: moderateScale(2),
    paddingHorizontal: moderateScale(8),
    backgroundColor: commonColor.dangerRed,
    borderRadius: moderateScale(4),
    marginRight: moderateScale(6),
  },
  textContentDelete: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: neutralColor.white,
  },
  containerIsDone: {
    paddingVertical: moderateScale(2),
    paddingHorizontal: moderateScale(8),
    borderWidth: moderateScale(1),
    borderColor: brandColor.darkGreen,
    borderRadius: moderateScale(4),
    marginRight: moderateScale(6),
  },
  containerNotDone: {
    paddingVertical: moderateScale(2),
    paddingHorizontal: moderateScale(8),
    backgroundColor: brandColor.darkGreen,
    borderRadius: moderateScale(4),
    marginRight: moderateScale(6),
  },
  textContentIsDone: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: brandColor.darkGreen,
  },
  textContentNotDone: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: neutralColor.white,
  },
});

export default styles;
