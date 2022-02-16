import React, { useContext } from 'react';

// context
import DeciderContext from '../../context/DeciderContext';

// components
import Option from '../Option';

// styled components
import * as S from './styles';
import { WidgetHeader, WidgetInner, WidgetMessage, WidgetTitle } from '../UI/Widget';

const Options = () => {
	const deciderContext = useContext(DeciderContext);

	// destructure state fields for cleaner jsx
	const { options } = deciderContext.deciderState;

	// event functions
	const deleteAllOptionsHandler = () => {
		deciderContext.deciderDispatch({ type: 'DELETE_ALL_OPTIONS' });
	};

	return (
		<WidgetInner>
			<WidgetHeader>
				<WidgetTitle>Your Options</WidgetTitle>

				<S.Button onClick={deleteAllOptionsHandler} type='button'>
					Remvove All
				</S.Button>
			</WidgetHeader>

			{options.length === 0 ? (
				<WidgetMessage>Please add an option to get started!</WidgetMessage>
			) : null}

			<S.OptionsWrapper>
				{options.map((option, index) => (
					<Option key={option} count={index + 1} option={option} />
				))}
			</S.OptionsWrapper>
		</WidgetInner>
	);
};

export default Options;
