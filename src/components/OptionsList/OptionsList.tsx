// components
import OptionItem from "../OptionItem/OptionItem";

// styled components
import * as S from "./OptionsList.styles";
import { Button } from "../UI/Button";

// custom hooks
import useDecider from "../../hooks/useDecider";

const OptionsList = () => {
  const [state, dispatch] = useDecider();

  // event functions
  const deleteAllOptionsHandler = () => {
    dispatch({ type: "DELETE_ALL_OPTIONS" });
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Your Options</S.Title>

        <Button
          backgroundColor="lightBlue"
          color="offWhite"
          onClick={deleteAllOptionsHandler}
          type="button"
        >
          Remvove All
        </Button>
      </S.Header>

      {!state.options.length ? <S.Message>Please add an option to get started!</S.Message> : null}

      <S.List>
        {state.options.map((option, index) => (
          <S.Item key={option}>
            <OptionItem count={index + 1} option={option} />
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  );
};

export default OptionsList;
