import {createAction} from '@reduxjs/toolkit';
import {DataNotesType} from './Notes.types';

export const LIST_NOTES = {
  SET: 'SET_LIST_NOTES',
  UPDATE: 'UPDATE_LIST_NOTES',
  DELETE: 'DELETE_LIST_NOTES',
};

export const setNewNote = createAction<DataNotesType>(LIST_NOTES.SET);
export const updateNote = createAction<DataNotesType>(LIST_NOTES.UPDATE);
export const deleteNote = createAction<string>(LIST_NOTES.DELETE);
