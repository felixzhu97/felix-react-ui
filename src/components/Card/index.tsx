import React from "react";
import "./Card.css";

export interface CardProps {
  /**
   * 卡片标题
   */
  title?: React.ReactNode;
  /**
   * 卡片额外操作
   */
  extra?: React.ReactNode;
  /**
   * 卡片封面
   */
  cover?: React.ReactNode;
  /**
   * 卡片操作组
   */
  actions?: React.ReactNode[];
  /**
   * 是否有边框
   */
  bordered?: boolean;
  /**
   * 是否可悬浮
   */
  hoverable?: boolean;
  /**
   * 卡片大小
   */
  size?: "default" | "small";
  /**
   * 卡片内容
   */
  children?: React.ReactNode;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 自定义样式
   */
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  title,
  extra,
  cover,
  actions,
  bordered = true,
  hoverable = false,
  size = "default",
  children,
  className = "",
  style,
}) => {
  const baseClass = "felix-card";
  const classes = [
    baseClass,
    `${baseClass}--${size}`,
    bordered && `${baseClass}--bordered`,
    hoverable && `${baseClass}--hoverable`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} style={style}>
      {cover && <div className={`${baseClass}__cover`}>{cover}</div>}
      {(title || extra) && (
        <div className={`${baseClass}__header`}>
          {title && <div className={`${baseClass}__title`}>{title}</div>}
          {extra && <div className={`${baseClass}__extra`}>{extra}</div>}
        </div>
      )}
      {children && <div className={`${baseClass}__body`}>{children}</div>}
      {actions && actions.length > 0 && (
        <div className={`${baseClass}__actions`}>
          {actions.map((action, index) => (
            <div key={index} className={`${baseClass}__action`}>
              {action}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
