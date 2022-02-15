import React, { useEffect } from 'react';
import Modal from 'react-modal';

// props
type OptionModalProps = {
	clearSelectedOption: () => void;
	selectedOption: string;
};

const OptionModal = ({ clearSelectedOption, selectedOption }: OptionModalProps) => {
	// this is recommended as per react-modal docs
	useEffect(() => {
		Modal.setAppElement('body');
	}, []);

	return (
		<Modal
			className='modal'
			closeTimeoutMS={200}
			contentLabel='Selected Option'
			isOpen={!!selectedOption}
			onRequestClose={clearSelectedOption}
		>
			<h3 className='modal__title'>Selected Option</h3>

			{selectedOption ? <p className='modal__text'>{selectedOption}</p> : null}

			<button className='modal__button button' onClick={clearSelectedOption} type='button'>
				Close
			</button>
		</Modal>
	);
};

export default OptionModal;
