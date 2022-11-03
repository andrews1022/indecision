// styled components
import * as S from "./Action.styles";
import { Button } from "../UI/Button";

// custom hooks
import useDecider from "../../hooks/useDecider";

const Action = () => {
  const [state, dispatch] = useDecider();

  // event functions
  const pickOptionHandler = () => {
    dispatch({ type: "PICK_OPTION" });
  };

  return (
    <S.Wrapper>
      <Button
        backgroundColor="purple"
        color="white"
        disabled={!state.options.length}
        largeFontSize
        largePadding
        onClick={pickOptionHandler}
        type="button"
      >
        What should I do?
      </Button>
    </S.Wrapper>
  );
};

export default Action;
