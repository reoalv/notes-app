import {createReducer} from '@reduxjs/toolkit';
import {setNewNote} from '../Action/Notes';
import {DataNotesType} from '../Action/Notes/Notes.types';
import {deleteNote, updateNote} from '../Action/Notes/Notes';

export type InitialState = {
  data: Array<DataNotesType>;
};

export const initialState: InitialState = {
  data: [],
};

const NotesReducers = createReducer(initialState, builder => {
  builder.addCase(setNewNote, (state, {payload}) => {
    return {...state, data: [payload, ...state.data]};
  });

  builder.addCase(updateNote, (state, {payload}) => {
    const existData = state.data.filter(v => v.id !== payload.id);
    const newData = [payload, ...existData];
    return {...state, data: newData};
  });

  builder.addCase(deleteNote, (state, {payload}) => {
    return {...state, data: state.data.filter(v => v.id !== payload)};
  });
});

export default NotesReducers;
