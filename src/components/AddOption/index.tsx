import React, { useContext, type FormEvent } from 'react';

// context
import DeciderContext from '../../context/DeciderContext';

// styled components
import * as S from './styles';
import { Button } from '../UI/Button';

const AddOption = () => {
	const deciderContext = useContext(DeciderContext);

	// destructure state fields for cleaner jsx
	const { error, options } = deciderContext.deciderState;

	// event functions
	const addOptionHandler = (event: FormEvent<HTMLFormElement>): false | void => {
		event.preventDefault();

		const formElements = Array.from((event.target as HTMLFormElement).elements);
		const input = formElements[0] as HTMLInputElement;
		const inputValue = input.value;

		const falsyValueMessage = 'Enter a valid value';
		const duplicateValueMessage = 'This option already exists';

		// check if falsy value
		if (!inputValue) {
			deciderContext.deciderDispatch({ type: 'SET_ERROR_MESSAGE', payload: falsyValueMessage });

			return false;
		}

		// check for duplicate
		if (options.indexOf(inputValue) > -1) {
			deciderContext.deciderDispatch({ type: 'SET_ERROR_MESSAGE', payload: duplicateValueMessage });

			return false;
		}

		// clear the input
		input.value = '';

		return deciderContext.deciderDispatch({ type: 'ADD_OPTION', payload: inputValue });
	};

	return (
		<S.Wrapper>
			{error ? <S.Error>{error}</S.Error> : null}

			<S.Form onSubmit={addOptionHandler}>
				<S.Input type='text' name='option' />

				<S.ButtonWrapper>
					<Button backgroundColor='purple' color='white' type='submit'>
						Add Option
					</Button>
				</S.ButtonWrapper>
			</S.Form>
		</S.Wrapper>
	);
};

export default AddOption;
