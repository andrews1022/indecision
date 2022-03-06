import React, { useContext, useEffect } from 'react';

// context
import DeciderContext from '../../context/DeciderContext';

// styled components
import * as S from './styles';
import { Button } from '../UI/Button';

const OptionModal = () => {
  const deciderContext = useContext(DeciderContext);

  // destructure state fields for cleaner jsx
  const { selectedOption } = deciderContext.deciderState;

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
      isOpen={!!selectedOption}
      onRequestClose={clearSelectedOptionHandler}
    >
      <S.Title>Selected Option:</S.Title>

      {selectedOption ? <S.Text>{selectedOption}</S.Text> : null}

      <Button
        backgroundColor='purple'
        color='white'
        onClick={clearSelectedOptionHandler}
        type='button'
      >
        Close
      </Button>
    </S.StyledModal>
  );
};

export default OptionModal;
