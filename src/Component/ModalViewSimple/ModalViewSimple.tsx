import {View, Text, Modal, Animated, StyleSheet, Button} from 'react-native';
import React from 'react';
import Colors from '../../Utils/Color';
import {
  ModalViewSimpleProps,
  RenderContentProps,
} from './ModalViewSimple.types';
import styles from './ModalViewSimple.styles';

const _renderContent = (props: RenderContentProps) => (
  <View style={styles.container}>
    <View style={styles.containerText}>
      <Text style={styles.textContent}>
        Catatan yang anda hapus akan hilang, Yakin?
      </Text>
    </View>
    <View style={styles.containerButton}>
      <View style={{flex: 1}}>
        <Button
          title="Batal"
          color={Colors.brandColor.darkGreen}
          onPress={props.onRequestClose}
        />
      </View>
      <View style={{flex: 1}}>
        <Button
          title="Ya, Hapus"
          color={Colors.commonColor.dangerRed}
          onPress={props.onPressDelete}
        />
      </View>
    </View>
  </View>
);

const ModalViewSimple = (props: ModalViewSimpleProps) => {
  const {isVisible, onRequestClose, onPressDelete} = props;

  return (
    <Modal visible={isVisible} onRequestClose={onRequestClose} transparent>
      <View style={styles.center}>
        {isVisible && (
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              {backgroundColor: Colors.transparent.black035},
            ]}
          />
        )}
        {_renderContent({onPressDelete, onRequestClose})}
      </View>
    </Modal>
  );
};

export default ModalViewSimple;
