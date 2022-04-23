import { createContext } from 'react';
import type { Dispatch } from 'react';

import { initialDeciderState } from '../reducers/deciderReducer';
import type { DeciderActions, DeciderState } from '../reducers/deciderReducer';

type DeciderContextType = {
  deciderState: DeciderState;
  deciderDispatch: Dispatch<DeciderActions>;
};

const DeciderContext = createContext<DeciderContextType>({
  deciderState: initialDeciderState,
  deciderDispatch: () => null
});

export default DeciderContext;
