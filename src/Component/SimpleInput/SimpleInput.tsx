import {TextInput} from 'react-native';
import React from 'react';
import {SimpleInputProps} from './SimpleInput.types';
import styles from './SimpleInput.styles';
import Colors from '../../Utils/Color';

const SimpleInput = (props: SimpleInputProps) => {
  const {InputType, onChangeText, placeholder, value, editable = true} = props;
  const typeInputStyle =
    InputType === 'title' ? styles.titleType : styles.bodyType;

  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      multiline
      style={[styles.textinput, typeInputStyle]}
      placeholderTextColor={Colors.neutralColor.softGrey}
      editable={editable}
    />
  );
};

export default SimpleInput;
