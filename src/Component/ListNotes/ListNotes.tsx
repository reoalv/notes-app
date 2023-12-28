import {FlatList, View} from 'react-native';
import * as React from 'react';
import CardNotes from '../CardNotes';
import {ListNotesProps} from './ListNotes.types';
import styles from './ListNotes.styles';

const _renderList = (
  data: ListNotesProps['data'],
  onPress: ListNotesProps['onPress'],
) => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatlist}
        data={data}
        renderItem={({item}) => (
          <CardNotes
            title={item.title}
            body={item.body}
            isFinished={item.isFinished}
            onPress={() => onPress(item)}
          />
        )}
        keyExtractor={(_, idx) => idx.toString()}
        numColumns={2}
      />
    </View>
  );
};

const ListNotes = (props: ListNotesProps) => {
  const RenderList = React.useMemo(
    () => _renderList(props.data, props.onPress),
    [props.data, props.onPress],
  );

  return RenderList;
};

export default ListNotes;
