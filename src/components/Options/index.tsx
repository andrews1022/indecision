import React from 'react';

// components
import Option from '../Option';

// styled components
import * as S from './styles';
import { WidgetHeader, WidgetInner, WidgetMessage, WidgetTitle } from '../UI/Widget';

// props
type OptionsProps = {
	// eslint-disable-next-line no-unused-vars
	deleteOption: (optionToRemove: any) => void;
	deleteOptions: () => void;
	options: any[];
};

const Options = ({ deleteOption, deleteOptions, options }: OptionsProps) => (
	<WidgetInner>
		<WidgetHeader>
			<WidgetTitle>Your Options</WidgetTitle>

			<S.Button onClick={deleteOptions} type='button'>
				Remvove All
			</S.Button>
		</WidgetHeader>

		{options.length === 0 && <WidgetMessage>Please add an option to get started!</WidgetMessage>}

		<S.OptionsWrapper>
			{options.map((option, index) => (
				<Option key={option} count={index + 1} deleteOption={deleteOption} optionText={option} />
			))}
		</S.OptionsWrapper>
	</WidgetInner>
);

export default Options;
