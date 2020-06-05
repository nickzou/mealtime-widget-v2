import React from 'react';
import './FABButton.scss';
import {Context} from '../../Context';

const FABButton = () => {
	let [widget, setWidget] = React.useState(React.useContext(Context).widget);
	return (
		<button
			className="fab-button"
			disabled={widget.open}
			onClick={() => {return setWidget({...widget, open: true})}}
		>
			{console.log(widget)}
			order now
		</button>
	);
}

export default FABButton;