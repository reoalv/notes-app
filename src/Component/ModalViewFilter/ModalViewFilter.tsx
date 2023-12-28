import React, {useCallback, useEffect, useState} from 'react';
import {
  Animated,
  LayoutAnimation,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Colors from '../../Utils/Color';
import {ModalViewProps} from './ModalViewFilter.types';
import styles from './ModalViewFilter.styles';
import FilterChoices from '../FilterChoices';

const ModalViewAnimate = (props: ModalViewProps) => {
  const {layoutData, close, onPressSubmit, filterFinish, filterNotFinish} =
    props;
  const {x, y, _width, _height} = layoutData;
  const [expanded, setExpanded] = useState(false);

  const openIt = useCallback(() => {
    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      setExpanded(true);
    }, 5);
  }, []);

  useEffect(openIt, [openIt]);

  const onRequestClose = useCallback(() => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        100,
        LayoutAnimation.Types.easeInEaseOut,
        LayoutAnimation.Properties.opacity,
      ),
      () => {
        close();
      },
    );
    setExpanded(false);
  }, [close]);

  return (
    <Modal visible onRequestClose={onRequestClose} transparent>
      <View style={styles.center}>
        {expanded && (
          <TouchableWithoutFeedback onPress={onRequestClose}>
            <Animated.View
              style={[
                StyleSheet.absoluteFill,
                {backgroundColor: Colors.transparent.clear},
              ]}
            />
          </TouchableWithoutFeedback>
        )}
        <View
          style={[
            expanded
              ? styles.containerExpand
              : {
                  height: _height,
                  width: _width,
                  left: x,
                  top: y,
                  position: 'absolute',
                },
            styles.containerContent,
          ]}>
          {expanded && (
            <FilterChoices
              onPressSubmit={(arg, arg2) => onPressSubmit(arg, arg2)}
              filterFinish={filterFinish}
              filterNotFinish={filterNotFinish}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ModalViewAnimate;
