import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../Utils/Color';
import {Feather} from '../../Utils/Icons';
import {moderateScale} from 'react-native-size-matters';
import {FilterChoicesProps} from './FilterChoices.types';
import styles from './FilterChoices.styles';

const FilterChoices = (props: FilterChoicesProps) => {
  const {onPressSubmit, filterFinish, filterNotFinish} = props;
  const [finish, setFinish] = React.useState<boolean>(filterFinish);
  const [notFinish, setNotFinish] = React.useState<boolean>(filterNotFinish);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.section}
          onPress={() => setFinish(v => !v)}>
          <Feather
            name={finish ? 'check-square' : 'square'}
            size={moderateScale(18)}
            color={Colors.neutralColor.black}
          />
          <Text style={styles.textSection}>Tampilkan Selesai</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.section}
          onPress={() => setNotFinish(v => !v)}>
          <Feather
            name={notFinish ? 'check-square' : 'square'}
            size={moderateScale(18)}
            color={Colors.neutralColor.black}
          />
          <Text style={styles.textSection}>Tampilkan Belum Selesai</Text>
        </TouchableOpacity>
      </View>
      <Button
        title="Terapkan"
        onPress={() => onPressSubmit(finish, notFinish)}
        color={Colors.brandColor.darkGreen}
      />
    </View>
  );
};

export default FilterChoices;
