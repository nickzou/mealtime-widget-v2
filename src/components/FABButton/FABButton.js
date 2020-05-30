import React from 'react';
import './FABButton.scss';
import {Context} from '../../Context';

const FABButton = () => {
	let [state, setState] = React.useContext(Context).widget;
	return (
		<button
			className="fab-button"
			disabled={state.open}
			onClick={() => setState({...state, open: true})}
			>
			order now
		</button>
	);
}

export default FABButton;