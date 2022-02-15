import React from 'react';
import Modal from 'react-modal';

// return shorthand for stateless functional components
const OptionModal = (props) => (
	// React modal REQUIRES these two props: isOpen & contentLabel
	// we can use our trick to flip truthy/falsy values into true boolean true/values to dynamically open/close the modal in isOpen prop
	// we also used onRequestClose, which allows the modal to be closed via the esc key or clicking outside the modal
	// we use closeTimeoutMS for transitioning out when closing
	// we can pass in our own className prop, which allows us to override default styles
	<Modal
		isOpen={!!props.selectedOption}
		onRequestClose={props.clearSelectedOption}
		contentLabel='Selected Option'
		closeTimeoutMS={200}
		className='modal'
	>
		<h3 className='modal__title'>Selected Option</h3>
		{props.selectedOption && <p className='modal__text'>{props.selectedOption}</p>}
		<button className='modal__button button' onClick={props.clearSelectedOption}>
			Close
		</button>
	</Modal>
);

export default OptionModal;
