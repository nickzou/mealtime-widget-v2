import React from 'react';
import Widget from '../Widget/Widget';
import FABButton from '../FABButton/FABButton';
import {Context} from '../../Context';

const Container = () => {
  const [widget, setWidget] = React.useState(React.useContext(Context).widget);
  return (
    <div className="mealtime-container">
      {!!widget.open && <Widget />}
      <FABButton />
    </div>
  );
}

export default Container;