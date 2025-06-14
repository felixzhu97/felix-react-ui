import React, { forwardRef } from "react";
import "./Input.css";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> {
  /**
   * 输入框大小
   */
  size?: "small" | "medium" | "large";
  /**
   * 输入框状态
   */
  status?: "normal" | "error" | "warning";
  /**
   * 标签文本
   */
  label?: string;
  /**
   * 错误信息
   */
  error?: string;
  /**
   * 是否显示清除按钮
   */
  allowClear?: boolean;
  /**
   * 前缀图标
   */
  prefix?: React.ReactNode;
  /**
   * 后缀图标
   */
  suffix?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "medium",
      status = "normal",
      label,
      error,
      allowClear = false,
      prefix,
      suffix,
      className = "",
      disabled,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const baseClass = "felix-input";
    const wrapperClass = [`${baseClass}-wrapper`, className]
      .filter(Boolean)
      .join(" ");

    const inputClass = [
      baseClass,
      `${baseClass}--${size}`,
      `${baseClass}--${status}`,
      disabled && `${baseClass}--disabled`,
      prefix && `${baseClass}--with-prefix`,
      suffix && `${baseClass}--with-suffix`,
    ]
      .filter(Boolean)
      .join(" ");

    const handleClear = () => {
      if (onChange) {
        const event = {
          target: { value: "" },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
    };

    return (
      <div className={wrapperClass}>
        {label && <label className={`${baseClass}-label`}>{label}</label>}
        <div className={`${baseClass}-container`}>
          {prefix && <span className={`${baseClass}-prefix`}>{prefix}</span>}
          <input
            ref={ref}
            className={inputClass}
            disabled={disabled}
            value={value}
            onChange={onChange}
            {...props}
          />
          {allowClear && value && (
            <span className={`${baseClass}-clear`} onClick={handleClear}>
              ×
            </span>
          )}
          {suffix && <span className={`${baseClass}-suffix`}>{suffix}</span>}
        </div>
        {error && <div className={`${baseClass}-error`}>{error}</div>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
