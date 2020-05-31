import React from 'react';
import './FABButton.scss';
import {Context} from '../../Context';

const FABButton = () => {
	let [widget, setWidget] = React.useContext(Context).widget;
	return (
		<button
			className="fab-button"
			disabled={widget.open}
			onClick={() => setWidget({...widget, open: true})}
			>
			order now
		</button>
	);
}

export default FABButton;