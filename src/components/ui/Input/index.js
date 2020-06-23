import React from "react";
import TextField from "@material-ui/core/TextField";

/* Component for the Input field, a wrapper around MUI TextField */
class Input extends React.Component {
  render() {
    const { error, helperText, autoFocus,label, required, type, value, onChange, name } = this.props;

    return (
      <TextField
          error={error}
          autoFocus={autoFocus}
          variant="outlined"
          margin="normal"
          required={required}
          fullWidth
          name={name}
          autoComplete={name}
          value={value || ""}
          onChange={onChange}
          type={type || "text"}
          label={label}
          helperText={helperText}
      />
    );
  }
}

export default Input;
