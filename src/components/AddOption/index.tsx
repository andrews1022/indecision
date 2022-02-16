import React, { useContext, type FormEvent } from 'react';

// context
import DeciderContext from '../../context/DeciderContext';

// styled components
import * as S from './styles';

const AddOption = () => {
	const deciderContext = useContext(DeciderContext);

	// event functions
	const addOptionHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formElements = Array.from((event.target as HTMLFormElement).elements);
		const input = formElements[0] as HTMLInputElement;
		const inputValue = input.value;

		// check if falsy value
		if (!inputValue) {
			deciderContext.deciderDispatch({ type: 'SET_ERROR_MESSAGE', payload: 'Enter a valid value' });

			return false;
		}

		// check for duplicate
		if (deciderContext.deciderState.options.indexOf(inputValue) > -1) {
			deciderContext.deciderDispatch({
				type: 'SET_ERROR_MESSAGE',
				payload: 'This option already exists'
			});

			return false;
		}

		// clear the input
		input.value = '';

		return deciderContext.deciderDispatch({ type: 'ADD_OPTION', payload: inputValue });
	};

	return (
		<S.Wrapper>
			{deciderContext.deciderState.error ? (
				<S.Error>{deciderContext.deciderState.error}</S.Error>
			) : null}

			<S.Form onSubmit={addOptionHandler}>
				<S.Input type='text' name='option' />

				<S.Button type='submit'>Add Option</S.Button>
			</S.Form>
		</S.Wrapper>
	);
};

export default AddOption;
