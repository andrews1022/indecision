import React, { type FormEvent } from 'react';

// styled components
import * as S from './styles';

// props
type AddOptionProps = {
	// eslint-disable-next-line no-unused-vars
	addOption: (event: FormEvent<HTMLFormElement>) => false | void;
	error: string;
};

const AddOption = ({ addOption, error }: AddOptionProps) => (
	<S.Wrapper>
		{error ? <S.Error>{error}</S.Error> : null}

		<S.Form onSubmit={addOption}>
			<S.Input type='text' name='option' />

			<S.Button type='submit'>Add Option</S.Button>
		</S.Form>
	</S.Wrapper>
);

export default AddOption;
