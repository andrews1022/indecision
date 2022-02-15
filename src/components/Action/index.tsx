import React from 'react';

// props
type ActionProps = {
	hasOptions: boolean;
	pickOption: () => void;
};

const Action = ({ hasOptions, pickOption }: ActionProps) => (
	<div>
		<button className='big-button' disabled={!hasOptions} onClick={pickOption} type='button'>
			What should I do?
		</button>
	</div>
);

export default Action;
