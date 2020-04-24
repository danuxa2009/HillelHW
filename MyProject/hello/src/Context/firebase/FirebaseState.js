import React, { useReducer } from 'react';
import axios from 'axios';
import { FireBaseContext } from './firebaseContext';
import { firebaseReducer } from './firebaseReducer';
import { SHOW_LOADER, REMOVE_NOTE, ADD_NOTE, FETCH_NOTES } from '../types';

const url = 'https://myfirst-firebase-project-6f6a5.firebaseio.com';

export const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const fetchNotes = async () => {
    showLoader();
    const res = await axios.get(`${url}/notes.json`);
    const payload = Object.keys(res.data).map((key) => {
      return {
        ...res.data[key],
        id: key,
      };
    });
    dispatch({
      type: FETCH_NOTES,
      payload,
    });
  };

  const addNote = async (title) => {
    const note = {
      title,
      date: new Date().toJSON(),
    };

    try {
      const res = await axios.post(`${url}/notes.json`, note);
      console.log('addNote', res.data);
      const payload = {
        ...note,
        id: res.data.name,
      };
      dispatch({
        type: ADD_NOTE,
        payload,
      });
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const removeNote = async (id) => {
    await axios.delete(`${url}/notes/${id}.json`);

    dispatch({
      type: REMOVE_NOTE,
      payload: id,
    });
  };

  return (
    <FireBaseContext.Provider
      value={{
        showLoader,
        addNote,
        removeNote,
        fetchNotes,
        loading: state.loading,
        notes: state.notes,
      }}>
      {children}
    </FireBaseContext.Provider>
  );
};
