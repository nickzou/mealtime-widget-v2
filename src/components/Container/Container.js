import React from 'react';
import Widget from '../Widget/Widget';
import FABButton from '../FABButton/FABButton';
import {Context} from '../../contexts/Context';

const Container = () => {
  let [widget, setWidget] = React.useContext(Context).widget;
  return (
    <div className="mealtime-container">
        {!!widget.open && <Widget />}
        <FABButton />
    </div>
  );
}

export default Container;