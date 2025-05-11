import styles from "./Slider.module.scss";

type SliderProps = React.ComponentProps<"input"> & {
  min: number;
  max: number;
  value: number[];
  onValueChange: (value: number[]) => void;
};

export const Slider = ({ min, max, value, ...props }: SliderProps) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value[0]}
      onChange={(e) => props.onValueChange([+e.target.value])}
      className={styles.slider}
      {...props}
    />
  );
};
