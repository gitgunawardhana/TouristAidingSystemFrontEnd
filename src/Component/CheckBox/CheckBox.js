import React from "react";
import "./CheckBox.css";

function CheckBox(props) {
  const inputRef = React.useRef(null);

  const onChange = () => {
    if (props.onChange) {
      props.onChange(inputRef.current);
    }
  };

  return (
    <div>
      <label className="custom-checkbox">
        <input
          type="checkbox"
          ref={inputRef}
          onChange={onChange}
          checked={props.checked}
          class="checkbox-input regular-checkbox"
          id="checkbox"
        />
        <span className="custom-checkbox checkmark">
          <i className="bx bx-check"></i>
        </span>
        {props.label}
      </label>
    </div>
  );
}

export default CheckBox;
