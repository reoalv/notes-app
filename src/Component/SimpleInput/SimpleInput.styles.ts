import {StyleSheet} from 'react-native';
import Colors from '../../Utils/Color';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  textinput: {
    color: Colors.neutralColor.black,
    flex: 1,
    textAlign: 'left',
    textAlignVertical: 'top',
    paddingTop: moderateScale(6),
    paddingBottom: moderateScale(4),
  },
  titleType: {
    fontSize: moderateScale(20),
    fontWeight: '500',
  },
  bodyType: {
    fontSize: moderateScale(16),
    fontWeight: '300',
  },
});

export default styles;
