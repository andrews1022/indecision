/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

// styled components
import * as S from './OptionItem.styles';
import { Button } from '../UI/Button';

// custom hooks
import useDecider from '../../hooks/useDecider';

// props type
type OptionProps = {
  count: number;
  option: string;
};

const OptionItem = ({ count, option }: OptionProps) => {
  const [state, dispatch] = useDecider();

  // event functions
  const deleteSingleOptionHandler = (optionToDelete: string) => {
    dispatch({ type: 'DELETE_SINGLE_OPTION', payload: optionToDelete });
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
