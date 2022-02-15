import React from 'react';

// props
type OptionProps = {
	count: any;
	// eslint-disable-next-line no-unused-vars
	deleteOption: (optionToRemove: any) => void;
	optionText: any;
};

const Option = ({ count, deleteOption, optionText }: OptionProps) => (
	<li className='option__item'>
		<p className='option__text'>
			{count}. {optionText}
		</p>

		<button className='button button--link' onClick={() => deleteOption(optionText)} type='button'>
			Remove
		</button>
	</li>
);

export default Option;
