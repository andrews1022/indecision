// this is hook to used in part with useEffect 'componentDidUpdate' in app.tsx
// we use it to reference the previous state value...
// ...because we don't get access to prevState as a function parameter in componentDidUpdate

import { useRef, useEffect, type MutableRefObject } from 'react';

const usePrevious = <T>(value: T): MutableRefObject<T | undefined>['current'] => {
	const ref = useRef<T>();

	useEffect(() => {
		ref.current = value;
	}, [value]);

	return ref.current;
};

export default usePrevious;
