import React from 'react';

// individual option component
const Option = (props) => (
	<li className='option__item'>
		<p className='option__text'>
			{props.count}. {props.optionText}
		</p>
		{/* we cannot call deleteOption directly, as we get the event object from the button click, so we need to use this setup with the inline arrow function */}
		<button
			className='button button--link'
			onClick={(e) => {
				props.deleteOption(props.optionText);
			}}
		>
			Remove
		</button>
	</li>
);

export default Option;
