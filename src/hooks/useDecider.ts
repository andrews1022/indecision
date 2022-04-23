import { useContext } from 'react';
import type { Dispatch } from 'react';

import DeciderContext from '../context/DeciderContext';
import type { DeciderActions, DeciderState } from '../reducers/deciderReducer';

const useDecider = (): [DeciderState, Dispatch<DeciderActions>] => {
  const { deciderDispatch: dispatch, deciderState: state } = useContext(DeciderContext);

  return [state, dispatch];
};

export default useDecider;
