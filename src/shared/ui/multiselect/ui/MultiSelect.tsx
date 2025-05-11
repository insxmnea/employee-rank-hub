import { useState } from "react";
import styles from "./MultiSelect.module.scss";

// type Option = {
//   value: string;
//   label: string;
// };

type MultiSelectProps = {
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
};

export const MultiSelect = ({
  options,
  value,
  onChange,
  placeholder,
}: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (option: string) => {
    const newValue = value.includes(option)
      ? value.filter((v) => v !== option)
      : [...value, option];
    onChange(newValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.trigger} onClick={() => setIsOpen(!isOpen)}>
        {value.length > 0 ? value.join(", ") : placeholder}
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          {options.map((option) => (
            <label key={option} className={styles.option}>
              <input
                type="checkbox"
                checked={value.includes(option)}
                onChange={() => toggleOption(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
