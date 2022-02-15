import React from 'react';

// styled components
import * as S from './styles';

// props
type OptionProps = {
	count: any;
	// eslint-disable-next-line no-unused-vars
	deleteOption: (optionToRemove: any) => void;
	optionText: any;
};

const Option = ({ count, deleteOption, optionText }: OptionProps) => (
	<S.OptionItem>
		<S.OptionText>
			{count}. {optionText}
		</S.OptionText>

		<S.Button onClick={() => deleteOption(optionText)} type='button'>
			Remove
		</S.Button>
	</S.OptionItem>
);

export default Option;
