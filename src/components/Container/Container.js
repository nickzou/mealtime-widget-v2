import React from 'react';
import Widget from '../Widget/Widget';
import FABButton from '../FABButton/FABButton';
import {Context} from '../../Context';

const Container = () => {
  let [state, setState] = React.useContext(Context).widget;
  return (
    <div className="mealtime-container">
        {!!state.open && <Widget />}
        <FABButton />
    </div>
  );
}

export default Container;