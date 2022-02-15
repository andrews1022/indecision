import { createContext, type Dispatch } from 'react';

import {
	initialDeciderState,
	type DeciderActions,
	type DeciderState
} from '../reducer/deciderReducer';

type DeciderContextType = {
	deciderState: DeciderState;
	deciderDispatch: Dispatch<DeciderActions>;
};

const DeciderContext = createContext<DeciderContextType>({
	deciderState: initialDeciderState,
	deciderDispatch: () => null
});

export default DeciderContext;
