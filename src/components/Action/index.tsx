import React from 'react';

// styled components
import * as S from './styles';

// props
type ActionProps = {
	hasOptions: boolean;
	pickOption: () => void;
};

const Action = ({ hasOptions, pickOption }: ActionProps) => (
	<div>
		<S.Button disabled={!hasOptions} onClick={pickOption} type='button'>
			What should I do?
		</S.Button>
	</div>
);

export default Action;
