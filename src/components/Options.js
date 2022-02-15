import React from 'react';
import Option from './Option';

// options parent component
const Options = (props) => (
	<div className='widget__inner'>
		<div className='widget__header'>
			<h3 className='widget__title'>Your Options</h3>
			<button className='button button--link' onClick={props.deleteOptions}>
				Remvove All
			</button>
		</div>
		{props.options.length === 0 && (
			<p className='widget__message'>Please add an option to get started!</p>
		)}
		<ul className='option'>
			{props.options.map((option, index) => (
				// pass down deleteOption prop one more time!
				<Option
					key={option}
					optionText={option}
					count={index + 1}
					deleteOption={props.deleteOption}
				/>
			))}
		</ul>
	</div>
);

export default Options;
