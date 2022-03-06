import React, { useContext } from 'react';

// context
import DeciderContext from '../../context/DeciderContext';

// styled components
import * as S from './styles';
import { Button } from '../UI/Button';

const Action = () => {
  const deciderContext = useContext(DeciderContext);

  // destructure state fields for cleaner jsx
  const { options } = deciderContext.deciderState;

  // event functions
  const pickOptionHandler = () => {
    deciderContext.deciderDispatch({ type: 'PICK_OPTION' });
  };

  return (
    <S.Wrapper>
      <Button
        backgroundColor='purple'
        color='white'
        disabled={!options.length}
        largeFontSize
        largePadding
        onClick={pickOptionHandler}
        type='button'
      >
        What should I do?
      </Button>
    </S.Wrapper>
  );
};

export default Action;
