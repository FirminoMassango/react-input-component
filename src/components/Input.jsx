import "../assets/input.css";
export function Input(props) {
  var computedClassName = props.error;
  var inputWidth = {
    width: "200px",
  };

  if (props.error) {
    computedClassName = "error error-focus";
  } else {
    computedClassName = "default";
  }

  if (props.fullWidth) {
    inputWidth = { width: "95%" };
  }

  if (props.error && !props.fullWidth) {
    inputWidth = {
      width: "200px",
      border: "1px solid #D32F2F",
    };
  } else if (props.error && props.fullWidth) {
    inputWidth = {
      width: "95%",
      border: "1px solid #D32F2F",
    };
  }

  if (props.size === "sm") {
    inputWidth = {
      width: "200px",
      height: "35px",
    };
  } else if (props.size === "md") {
    inputWidth = {
      width: "200px",
      height: "56px",
    };
  }

  if (props.multiline) {
    const totalRows = 100 / props.row;

    inputWidth = {
      width: "200px",
      height: totalRows + "vh",
    };
  }

  console.log(computedClassName);

  return (
    <div className="form-group">
      <label>Label</label>
      <input
        type="text"
        className="full-width"
        disabled={props.disabled}
        value={props.value}
        placeholder="placeholder"
        style={inputWidth}
      />
      <span className="helper-text">{props.helperText}</span>
    </div>
  );
}
