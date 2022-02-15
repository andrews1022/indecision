import React from 'react';

// components
import Option from '../Option';

// props
type OptionsProps = {
	// eslint-disable-next-line no-unused-vars
	deleteOption: (optionToRemove: any) => void;
	deleteOptions: () => void;
	options: any[];
};

const Options = ({ deleteOption, deleteOptions, options }: OptionsProps) => (
	<div className='widget__inner'>
		<div className='widget__header'>
			<h3 className='widget__title'>Your Options</h3>
			<button className='button button--link' onClick={deleteOptions} type='button'>
				Remvove All
			</button>
		</div>

		{options.length === 0 && (
			<p className='widget__message'>Please add an option to get started!</p>
		)}

		<ul className='option'>
			{options.map((option, index) => (
				// pass down deleteOption prop one more time!
				<Option key={option} count={index + 1} deleteOption={deleteOption} optionText={option} />
			))}
		</ul>
	</div>
);

export default Options;
