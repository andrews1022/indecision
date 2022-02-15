import React, { type FormEvent } from 'react';

// props
type AddOptionProps = {
	// eslint-disable-next-line no-unused-vars
	addOption: (event: FormEvent<HTMLFormElement>) => false | void;
	error: string;
};

const AddOption = ({ addOption, error }: AddOptionProps) => (
	<div className='add-option'>
		{error ? <p className='add-option__error'>{error}</p> : null}

		<form className='add-option__form' onSubmit={addOption}>
			<input className='add-option__input' type='text' name='option' />

			<button className='add-option__button button' type='submit'>
				Add Option
			</button>
		</form>
	</div>
);

export default AddOption;
