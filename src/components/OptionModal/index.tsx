import React, { useEffect } from 'react';

// styled components
import * as S from './styles';

// props
type OptionModalProps = {
	clearSelectedOption: () => void;
	selectedOption: string;
};

const OptionModal = ({ clearSelectedOption, selectedOption }: OptionModalProps) => {
	// this is recommended as per react-modal docs
	useEffect(() => {
		S.StyledModal.setAppElement('body');
	}, []);

	return (
		<S.StyledModal
			closeTimeoutMS={200}
			contentLabel='Selected Option'
			isOpen={!!selectedOption}
			onRequestClose={clearSelectedOption}
		>
			<S.Title>Selected Option</S.Title>

			{selectedOption ? <S.Text>{selectedOption}</S.Text> : null}

			<S.Button onClick={clearSelectedOption} type='button'>
				Close
			</S.Button>
		</S.StyledModal>
	);
};

export default OptionModal;
