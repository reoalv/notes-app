import {ScrollView, View} from 'react-native';
import React from 'react';
import uuid from 'react-native-uuid';
import {CommonActions} from '@react-navigation/native';
import {
  DetailScreenNavigationProps,
  DetailScreenProps,
  OnSaveData,
  RenderFieldProps,
} from './DetailScreen.types';
import styles from './DetailScreen.styles';
import SimpleInput from '../../Component/SimpleInput/SimpleInput';
import Constants from '../../Constants/Input';
import SeparatorHorizontal from '../../Component/SeparatorHorizontal';
import HeaderDetail from '../../Component/HeaderDetail/HeaderDetail';
import {useDispatch} from 'react-redux';
import {deleteNote, setNewNote, updateNote} from '../../Redux/Action/Notes';
import {Routes} from '../Screen.types';
import {AnyActionFn} from '../../Redux/Store';
import ModalViewSimple from '../../Component/ModalViewSimple';

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

const resetToHome = (navigation: DetailScreenNavigationProps) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: Routes.HomeScreen}],
    }),
  );
};

const onSaveData = (props: OnSaveData) => async () => {
  const {
    dispatch,
    navigation,
    userId,
    textTitle,
    textBody,
    isFinish,
    isNew = false,
  } = props;

  if (isNew) {
    await dispatch(
      setNewNote({
        id: userId,
        title: textTitle,
        body: textBody,
        isFinished: isFinish,
      }),
    );
  } else {
    await dispatch(
      updateNote({
        id: userId,
        title: textTitle,
        body: textBody,
        isFinished: isFinish,
      }),
    );
  }

  resetToHome(navigation);
};

const onDelete =
  (
    dispatch: AnyActionFn,
    userId: string,
    navigation: DetailScreenNavigationProps,
  ) =>
  async () => {
    await dispatch(deleteNote(userId));
    resetToHome(navigation);
  };

const DetailScreen = (props: DetailScreenProps) => {
  const {
    route: {params},
    navigation,
  } = props;
  const dispatch = useDispatch();
  const [popupDelete, setIsPopupDelete] = React.useState<boolean>(false);
  const [textTitle, setTextTitle] = React.useState<string>(params?.title || '');
  const [textBody, setTextBody] = React.useState<string>(params?.body || '');
  const [isFinish, setIsFinish] = React.useState<boolean>(
    params?.isFinished || false,
  );
  const userId = params?.id || uuid.v4().toString();
  const isNew = params?.isNew;
  const paramSave = {
    dispatch,
    navigation,
    userId,
    textTitle,
    textBody,
    isFinish,
    isNew,
  };

  return (
    <>
      <HeaderDetail
        onPressBack={() => navigation.goBack()}
        onPressDelete={() => setIsPopupDelete(true)}
        onPressSave={onSaveData(paramSave)}
        onPressDone={() => setIsFinish(v => !v)}
        isDone={isFinish}
        isNew={params?.isNew}
      />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.containerScroll}>
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
      </View>
      {popupDelete && (
        <ModalViewSimple
          isVisible={popupDelete}
          onRequestClose={() => setIsPopupDelete(false)}
          onPressDelete={onDelete(dispatch, userId, navigation)}
        />
      )}
    </>
  );
};

export default DetailScreen;
