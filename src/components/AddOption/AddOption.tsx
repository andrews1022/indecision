import type { FormEvent } from "react";

// styled components
import * as S from "./AddOption.styles";
import { Button } from "../UI/Button";

// custom hooks
import useDecider from "../../hooks/useDecider";

const AddOption = () => {
  const [state, dispatch] = useDecider();

  // event functions
  const addOptionHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElements = Array.from((event.target as HTMLFormElement).elements);
    const input = formElements[0] as HTMLInputElement;
    const { value } = input;

    const falsyValueMessage = "Enter a valid value";
    const duplicateValueMessage = "This option already exists";

    // check if falsy value
    if (!value) {
      dispatch({ type: "SET_ERROR_MESSAGE", payload: falsyValueMessage });

      return false;
    }

    // check for duplicate
    if (state.options.indexOf(value) > -1) {
      dispatch({ type: "SET_ERROR_MESSAGE", payload: duplicateValueMessage });

      return false;
    }

    // clear the input
    input.value = "";

    return dispatch({ type: "ADD_OPTION", payload: value });
  };

  return (
    <S.Wrapper>
      {state.error ? <S.Error>{state.error}</S.Error> : null}

      <S.Form onSubmit={addOptionHandler}>
        <S.Input type="text" name="option" />

        <S.ButtonWrapper>
          <Button backgroundColor="purple" color="white" type="submit">
            Add Option
          </Button>
        </S.ButtonWrapper>
      </S.Form>
    </S.Wrapper>
  );
};

export default AddOption;
