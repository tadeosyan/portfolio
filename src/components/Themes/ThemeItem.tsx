import styles from './Themes.module.css';

type ThemeItemProps = {
  color: string;
  img: string;
  onChangeColor: (color: string) => void;
};

export const ThemeItem = ({
  color,
  img,
  onChangeColor,
}: ThemeItemProps) => {
  return (
    <img
      src={img}
      alt="Theme img"
      className={styles.themeImg}
      onClick={() => {
        onChangeColor(color);
      }}
    />
  );
};
