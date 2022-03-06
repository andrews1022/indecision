import { createContext } from 'react';
import type { Dispatch } from 'react';

import { initialDeciderState } from '../reducer/deciderReducer';
import type { DeciderActions, DeciderState } from '../reducer/deciderReducer';

type DeciderContextType = {
  deciderState: DeciderState;
  deciderDispatch: Dispatch<DeciderActions>;
};

const DeciderContext = createContext<DeciderContextType>({
  deciderState: initialDeciderState,
  deciderDispatch: () => null
});

export default DeciderContext;
