import React, { useContext } from 'react';

// context
import DeciderContext from '../../context/DeciderContext';

// styled components
import * as S from './styles';

const Action = () => {
	const deciderContext = useContext(DeciderContext);

	const hasOptions = deciderContext.deciderState.options.length > 0;

	// event functions
	const pickOptionHandler = () => {
		deciderContext.deciderDispatch({ type: 'PICK_OPTION' });
	};

	return (
		<S.Button disabled={!hasOptions} onClick={pickOptionHandler} type='button'>
			What should I do?
		</S.Button>
	);
};

export default Action;
