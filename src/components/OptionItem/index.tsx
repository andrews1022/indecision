import React, { useContext } from 'react';

// context
import DeciderContext from '../../context/DeciderContext';

// styled components
import * as S from './styles';
import { Button } from '../UI/Button';

// props
type OptionProps = {
  count: number;
  option: string;
};

const OptionItem = ({ count, option }: OptionProps) => {
  const deciderContext = useContext(DeciderContext);

  // event functions
  const deleteSingleOptionHandler = (optionToDelete: string) => {
    deciderContext.deciderDispatch({ type: 'DELETE_SINGLE_OPTION', payload: optionToDelete });
  };

  return (
    <>
      <S.Text>
        {count}. {option}
      </S.Text>

      <Button
        backgroundColor='blue'
        color='offWhite'
        onClick={() => deleteSingleOptionHandler(option)}
        type='button'
      >
        Remove
      </Button>
    </>
  );
};

export default OptionItem;
