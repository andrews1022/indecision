/* eslint-disable default-param-last */

// utils
import { getRandomArrayIndex } from '../utils/getRandomArrayIndex';

export type DeciderState = {
  error: string;
  options: string[];
  selectedOption: string;
};

export type DeciderActions =
  | { type: 'ADD_OPTION'; payload: string }
  | { type: 'CLEAR_SELECTED_OPTION' }
  | { type: 'DELETE_ALL_OPTIONS' }
  | { type: 'DELETE_SINGLE_OPTION'; payload: string }
  | { type: 'PICK_OPTION' }
  | { type: 'SET_ERROR_MESSAGE'; payload: string };

// use this function so localstorage is not reset on refresh
const setOptions = (): [] => {
  const localOptions = localStorage.getItem('options');

  return localOptions ? JSON.parse(localOptions) : [];
};

export const initialDeciderState: DeciderState = {
  error: '',
  options: setOptions(),
  selectedOption: ''
};

export const deciderReducer = (
  state: DeciderState = initialDeciderState,
  action: DeciderActions
): DeciderState => {
  switch (action.type) {
    case 'ADD_OPTION': {
      return {
        ...state,
        error: '',
        options: [...state.options, action.payload]
      };
    }

    case 'CLEAR_SELECTED_OPTION': {
      return {
        ...state,
        selectedOption: ''
      };
    }

    case 'DELETE_ALL_OPTIONS': {
      return {
        ...state,
        options: []
      };
    }

    case 'DELETE_SINGLE_OPTION': {
      return {
        ...state,
        options: state.options.filter((option) => action.payload !== option)
      };
    }

    case 'PICK_OPTION': {
      return {
        ...state,
        selectedOption: state.options[getRandomArrayIndex(state.options)]
      };
    }

    case 'SET_ERROR_MESSAGE': {
      return {
        ...state,
        error: action.payload
      };
    }

    default: {
      return {
        ...state
      };
    }
  }
};
