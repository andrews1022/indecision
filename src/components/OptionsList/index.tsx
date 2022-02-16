import React, { useContext } from 'react';

// context
import DeciderContext from '../../context/DeciderContext';

// components
import OptionItem from '../OptionItem';

// styled components
import * as S from './styles';
import { Button } from '../UI/Button';

const OptionsList = () => {
	const deciderContext = useContext(DeciderContext);

	// destructure state fields for cleaner jsx
	const { options } = deciderContext.deciderState;

	// event functions
	const deleteAllOptionsHandler = () => {
		deciderContext.deciderDispatch({ type: 'DELETE_ALL_OPTIONS' });
	};

	return (
		<S.Wrapper>
			<S.Header>
				<S.Title>Your Options</S.Title>

				<Button
					backgroundColor='lightBlue'
					color='offWhite'
					onClick={deleteAllOptionsHandler}
					type='button'
				>
					Remvove All
				</Button>
			</S.Header>

			{options.length === 0 ? <S.Message>Please add an option to get started!</S.Message> : null}

			<S.List>
				{options.map((option, index) => (
					<S.Item key={option}>
						<OptionItem count={index + 1} option={option} />
					</S.Item>
				))}
			</S.List>
		</S.Wrapper>
	);
};

export default OptionsList;
