import React, { useContext } from 'react';

// context
import DeciderContext from '../../context/DeciderContext';

// styled components
import * as S from './styles';

// props
type OptionProps = {
	count: number;
	option: string;
};

const Option = ({ count, option }: OptionProps) => {
	const deciderContext = useContext(DeciderContext);

	// event functions
	const deleteSingleOptionHandler = (optionToDelete: string) => {
		deciderContext.deciderDispatch({ type: 'DELETE_SINGLE_OPTION', payload: optionToDelete });
	};

	return (
		<S.OptionItem>
			<S.OptionText>
				{count}. {option}
			</S.OptionText>

			<S.Button onClick={() => deleteSingleOptionHandler(option)} type='button'>
				Remove
			</S.Button>
		</S.OptionItem>
	);
};

export default Option;
