import React, { useContext, useEffect } from 'react';

// context
import DeciderContext from '../../context/DeciderContext';

// styled components
import * as S from './styles';

const OptionModal = () => {
	const deciderContext = useContext(DeciderContext);

	// event functions
	const clearSelectedOptionHandler = () => {
		deciderContext.deciderDispatch({ type: 'CLEAR_SELECTED_OPTION' });
	};

	// this is recommended as per react-modal docs
	useEffect(() => {
		S.StyledModal.setAppElement('body');
	}, []);

	return (
		<S.StyledModal
			closeTimeoutMS={200}
			contentLabel='Selected Option'
			isOpen={!!deciderContext.deciderState.selectedOption}
			onRequestClose={clearSelectedOptionHandler}
		>
			<S.Title>Selected Option</S.Title>

			{deciderContext.deciderState.selectedOption ? (
				<S.Text>{deciderContext.deciderState.selectedOption}</S.Text>
			) : null}

			<S.Button onClick={clearSelectedOptionHandler} type='button'>
				Close
			</S.Button>
		</S.StyledModal>
	);
};

export default OptionModal;
