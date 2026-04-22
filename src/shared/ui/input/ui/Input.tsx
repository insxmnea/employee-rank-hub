import { classnames } from "@shared/lib/classnames";
import * as styles from "./Input.module.css";
import React, { InputHTMLAttributes, memo, useEffect, useRef } from "react";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  placeholder?: string;
  autofocus?: boolean;
  onChange?: (value: string) => void;
}

export const Input = memo(
  ({
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autofocus,
    ...props
  }: InputProps) => {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (autofocus) {
        ref.current?.focus();
      }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <div className={classnames(styles.inputWrapper, {}, [className])}>
        <span className={styles.placeholder}>{placeholder}</span>
        <input
          className={styles.input}
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          autoFocus={autofocus}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";
