import React from "react";

const Button = ({
  variant,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  color,
}) => {
  return (
    <button
      type="button"
      data-variant={variant}
      data-shadow={disableShadow}
      data-size={size}
      data-color={color}
      disabled={disabled === true ? "disabled" : ""}
    >
      {startIcon && <span className="material-icons">{startIcon}</span>}
      Default
      {endIcon && <span className="material-icons">{endIcon}</span>}
    </button>
  );
};

export default Button;
