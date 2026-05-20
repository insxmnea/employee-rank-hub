import { classnames } from "@shared/lib/classnames";
import styles from "./Select.module.css";
import React, { ChangeEvent, memo } from "react";

type SelectValue = string | number;

type OptionItem = { value: SelectValue; label: string } | string;

interface SelectProps {
  options: OptionItem[];
  value: SelectValue;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  error?: boolean;
  onChange: (value: SelectValue) => void;
}

export const Select = memo(
  ({
    className,
    value,
    defaultValue,
    placeholder,
    error = false,
    disabled = false,
    options,
    onChange,
    ...props
  }: SelectProps) => {
    const normalizedOptions = options.map((option) =>
      typeof option === "string" ? { value: option, label: option } : option,
    );

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
      const newValue = event.target.value;

      const isNumeric = normalizedOptions.some(
        (option) => typeof option.value === "number",
      );
      const finalValue: SelectValue = isNumeric ? Number(newValue) : newValue;
      onChange(finalValue);
    };

    return (
      <div className={classnames(styles.wrapper, {}, [className])}>
        <span
          className={classnames(
            styles.placeholder,
            {
              [styles.placeholderError]: error,
            },
            [],
          )}
        >
          {placeholder}
        </span>
        <select
          value={String(value)}
          onChange={handleChange}
          disabled={disabled}
          className={classnames(
            styles.select,
            {
              [styles.selectError]: error,
            },
            [],
          )}
          {...props}
        >
          {defaultValue && <option value="">{defaultValue}</option>}

          {normalizedOptions.map((option) => (
            <option key={option.value} value={String(option.value)}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  },
);

Select.displayName = "Select";
