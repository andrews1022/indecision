import React, { type FormEvent, useEffect, useState } from 'react';

// components
import Action from '../Action';
import AddOption from '../AddOption';
import Header from '../Header';
import OptionModal from '../OptionModal';
import Options from '../Options';

// custom hooks
import usePrevious from '../../hooks/usePrevious';

// state type
type State = {
	error: string;
	options: string[];
	selectedOption: string;
};

const App = () => {
	// state
	const initialState = {
		error: '',
		options: [],
		selectedOption: ''
	};

	const [state, setState] = useState<State>(initialState);

	// equivalent of componentDidMount
	useEffect(() => {
		// get localStorage data
		const localStorageData = localStorage.getItem('options');

		if (localStorageData) {
			setState({ ...state, options: JSON.parse(localStorageData) });
		}
	}, []);

	// equivalent of componentDidUpdate
	const previousValue = usePrevious(state.options.length);

	useEffect(() => {
		// check to see if the options array length actually changes
		if (previousValue !== state.options.length) {
			// convert our options array to string data for local storage and set it
			localStorage.setItem('options', JSON.stringify(state.options));
		}
	}, [state.options]);

	// pick a random option
	const pickOption = () => {
		const randomIndex = Math.floor(Math.random() * state.options.length);
		const randomOption = state.options[randomIndex];

		setState({ ...state, selectedOption: randomOption });
	};

	// delete a single option
	const deleteOption = (optionToRemove: string) => {
		setState((prevState) => ({
			...state,
			options: prevState.options.filter((option) => optionToRemove !== option)
		}));
	};

	// delete all options
	const deleteOptions = () => {
		setState({ ...state, options: [] });
	};

	const addOption = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formElements = Array.from((event.target as HTMLFormElement).elements);
		const input = formElements[0] as HTMLInputElement;
		const inputValue = input.value;

		// check if falsy value
		if (!inputValue) {
			setState({ ...state, error: 'Enter a valid value' });
			return false;
		}

		// check for duplicate
		if (state.options.indexOf(inputValue) > -1) {
			setState({ ...state, error: 'This option already exists' });
			return false;
		}

		// clear the input
		input.value = '';

		// otherwise, add to options array
		return setState((prevState) => ({
			...state,
			error: '',
			options: prevState.options.concat(inputValue)
		}));
	};

	// reset modal state (to allow it to be closed)
	const clearSelectedOption = () => {
		setState({ ...state, selectedOption: '' });
	};

	return (
		<div>
			<Header subtitle='Put your life in the hands of a computer!' title='Indecision' />

			<div className='container'>
				<Action hasOptions={state.options.length > 0} pickOption={pickOption} />

				<div className='widget'>
					<Options
						deleteOption={deleteOption}
						deleteOptions={deleteOptions}
						options={state.options}
					/>

					<AddOption addOption={addOption} error={state.error} />
				</div>
			</div>

			<OptionModal
				clearSelectedOption={clearSelectedOption}
				selectedOption={state.selectedOption}
			/>
		</div>
	);
};

export default App;
