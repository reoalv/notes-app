import {ScrollView, View} from 'react-native';
import React from 'react';
import {DetailScreenProps, RenderFieldProps} from './DetailScreen.types';
import styles from './DetailScreen.styles';
import SimpleInput from '../../Component/SimpleInput/SimpleInput';
import Constants from '../../Constants/Input';
import SeparatorHorizontal from '../../Component/SeparatorHorizontal';
import HeaderDetail from '../../Component/HeaderDetail/HeaderDetail';

const _renderTitleField = ({setters, value, isFinish}: RenderFieldProps) => {
  return (
    <View>
      <SimpleInput
        InputType={Constants.INPUT_TYPE.TITLE}
        placeholder="Judul"
        value={value}
        onChangeText={(txt: string) => setters(txt)}
        editable={!isFinish}
      />
    </View>
  );
};

const _renderBodyField = ({setters, value, isFinish}: RenderFieldProps) => {
  return (
    <View style={{flex: 1}}>
      <SimpleInput
        InputType={Constants.INPUT_TYPE.BODY}
        placeholder="... .. ."
        value={value}
        onChangeText={(txt: string) => setters(txt)}
        editable={!isFinish}
      />
    </View>
  );
};

const DetailScreen = (props: DetailScreenProps) => {
  const {
    route: {params},
    navigation,
  } = props;
  const [textTitle, setTextTitle] = React.useState<string>(params?.title || '');
  const [textBody, setTextBody] = React.useState<string>(params?.body || '');
  const [isFinish, setIsFinish] = React.useState<boolean>(
    params?.isFinished || false,
  );

  return (
    <>
      <HeaderDetail
        onPressBack={() => navigation.goBack()}
        onPressDelete={() => {}}
        onPressSave={() => {}}
        onPressDone={() => setIsFinish(v => !v)}
        isDone={isFinish}
      />
      <ScrollView contentContainerStyle={styles.container}>
        {_renderTitleField({
          value: textTitle,
          setters: setTextTitle,
          isFinish: isFinish,
        })}
        <SeparatorHorizontal />
        {_renderBodyField({
          value: textBody,
          setters: setTextBody,
          isFinish: isFinish,
        })}
      </ScrollView>
    </>
  );
};

export default DetailScreen;
