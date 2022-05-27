import React from "react";
import classNames from "classnames";
import { Button } from "@mui/material";

import styles from "./customButton.module.scss"

interface CustomButtonProps {
  className?: string;
  disabled?: boolean;
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "inherit" | "secondary" | "success" | "error" | "info" | "warning";
  children: React.ReactNode;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const {
    children,
    disabled = false,
    className = "",
    variant = "contained",
    color = "primary",
    onClick,
   } = props;

  const buttonClass = classNames(styles.button, className)

  return (
    <Button
      className={buttonClass}
      disabled={disabled}
      variant={variant}
      color={color}
      onClick={onClick}
    >
      {children}
    </Button>
  )
};

export default CustomButton;