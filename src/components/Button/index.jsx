import React from "react";
import "./styles.scss";
import { Button } from "antd";

function ButtonCustom({
  value,
  className,
  icon,
  onClick,
  disabled,
  style,
  htmlType,
}) {
  return (
    <Button
      style={style}
      onClick={onClick}
      disabled={disabled}
      htmlType={htmlType}
      className={`button ${className}`}
    >
      {value}
      {icon === undefined ? "" : <i className={icon}></i>}
    </Button>
  );
}

export default ButtonCustom;
