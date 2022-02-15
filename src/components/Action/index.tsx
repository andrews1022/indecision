import React, { useContext } from 'react';

// context
import DeciderContext from '../../context/DeciderContext';

// styled components
import * as S from './styles';

// props
type ActionProps = {
	hasOptions: boolean;
};

const Action = ({ hasOptions }: ActionProps) => {
	const deciderContext = useContext(DeciderContext);

	const pickOptionHandler = () => {
		deciderContext.deciderDispatch({ type: 'PICK_OPTION' });
	};

	return (
		<div>
			<S.Button disabled={!hasOptions} onClick={pickOptionHandler} type='button'>
				What should I do?
			</S.Button>
		</div>
	);
};

export default Action;
