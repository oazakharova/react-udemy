import './Info.css';
import styles from './Info.module.css';

function Info() {
  return (
    <div className={styles.info}>
      <h1>hello from the Info component</h1>
      <button className="my-button ">click me</button>
      <button className={styles.myOtherButton}>press me</button>
    </div>
  );
}

export default Info;
