import styles from "./ButtonContainer.module.css";

const buttonNames = [
  "c",
  "1",
  "2",
  "*",
  "3",
  "4",
  "-",
  "5",
  "6",
  "+",
  "7",
  "8",
  "/",
  "=",
  "9",
  "0",
  ".",
];
const ButtonContainer = () => {
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonNames) => (
        <button classNames={styles.button}>{buttonNames}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;
