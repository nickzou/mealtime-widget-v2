import React from 'react';
import Widget from '../Widget/Widget';
import FABButton from '../FABButton/FABButton';
import {Context} from '../../Context';

const Container = () => {
  let globalState = React.useContext(Context);
  let [state, setState] = globalState.widget;
  return (
    <div className="mealtime-container">
        {!!state.open && <Widget />}
        <FABButton />
    </div>
  );
}

export default Container;