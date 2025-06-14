import React from "react";
import "./Button.css";

export interface ButtonProps {
  /**
   * 按钮类型
   */
  type?: "primary" | "secondary" | "danger";
  /**
   * 按钮大小
   */
  size?: "small" | "medium" | "large";
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 是否为加载状态
   */
  loading?: boolean;
  /**
   * 按钮内容
   */
  children: React.ReactNode;
  /**
   * 点击事件
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * 自定义类名
   */
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  children,
  onClick,
  className = "",
}) => {
  const baseClass = "felix-button";
  const classes = [
    baseClass,
    `${baseClass}--${type}`,
    `${baseClass}--${size}`,
    disabled && `${baseClass}--disabled`,
    loading && `${baseClass}--loading`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      type="button"
    >
      {loading && <span className={`${baseClass}__spinner`}>⟳</span>}
      {children}
    </button>
  );
};

export default Button;
