import { useEffect } from 'react';

// styled components
import * as S from './OptionModal.styles';
import { Button } from '../UI/Button';

// custom hooks
import useDecider from '../../hooks/useDecider';

const OptionModal = () => {
  const [state, dispatch] = useDecider();

  // event functions
  const clearSelectedOptionHandler = () => {
    dispatch({ type: 'CLEAR_SELECTED_OPTION' });
  };

  // this is recommended as per react-modal docs
  useEffect(() => {
    S.StyledModal.setAppElement('body');
  }, []);

  return (
    <S.StyledModal
      closeTimeoutMS={200}
      contentLabel='Selected Option'
      isOpen={!!state.selectedOption}
      onRequestClose={clearSelectedOptionHandler}
    >
      <S.Title>Selected Option:</S.Title>

      {state.selectedOption ? <S.Text>{state.selectedOption}</S.Text> : null}

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
