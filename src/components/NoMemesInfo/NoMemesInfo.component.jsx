import nomemes from "../../assets/images/nomemes.jpg";
import styles from "./NoMemesInfoStyles.module.css";

export const NoMemesInfo = () => {
  return <img className={styles.img} src={nomemes} alt="there is no memes" />;
};
