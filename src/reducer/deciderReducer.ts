/* eslint-disable default-param-last */

// utils
import { getRandomArrayIndex } from '../utils/getRandomArrayIndex';

export type DeciderState = {
	error: string;
	options: string[];
	selectedOption: string;
};

export type DeciderActions = { type: 'PICK_OPTION' };

export const initialDeciderState: DeciderState = {
	error: '',
	options: [],
	selectedOption: ''
};

export const deciderReducer = (
	state: DeciderState = initialDeciderState,
	action: DeciderActions
): DeciderState => {
	switch (action.type) {
		case 'PICK_OPTION': {
			return {
				...state,
				selectedOption: state.options[getRandomArrayIndex(state.options)]
			};
		}

		default: {
			return {
				...state
			};
		}
	}
};
