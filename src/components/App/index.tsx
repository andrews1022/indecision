import React, { useEffect, useReducer } from 'react';

// context
import DeciderContext from '../../context/DeciderContext';
import { deciderReducer, initialDeciderState } from '../../reducer/deciderReducer';

// components
import Action from '../Action';
import AddOption from '../AddOption';
import Header from '../Header';
import OptionModal from '../OptionModal';
import Options from '../Options';

// styled components
import { Container } from '../UI/Container';
import { Widget } from '../UI/Widget';

// custom hooks
import usePrevious from '../../hooks/usePrevious';

const App = () => {
	const [state, dispatch] = useReducer(deciderReducer, initialDeciderState);

	// equivalent of 'componentDidUpdate'
	const previousValue = usePrevious(state.options.length);

	useEffect(() => {
		if (previousValue !== state.options.length) {
			localStorage.setItem('options', JSON.stringify(state.options));
		}
	}, [state]);

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<DeciderContext.Provider value={{ deciderState: state, deciderDispatch: dispatch }}>
			<Header />

			<Container>
				<Action />

				<Widget>
					<Options />

					<AddOption />
				</Widget>
			</Container>

			<OptionModal />
		</DeciderContext.Provider>
	);
};

export default App;
