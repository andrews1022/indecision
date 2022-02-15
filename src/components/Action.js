import React from 'react';

// Action component as 'stateless functional component'
const Action = (props) => (
	<div>
		<button className='big-button' disabled={!props.hasOptions} onClick={props.pickOption}>
			What should I do?
		</button>
	</div>
);

export default Action;
