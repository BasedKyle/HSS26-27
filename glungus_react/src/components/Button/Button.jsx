import styles from './Button.module.scss';

export default function Button({ onClick, children, id }) {
  return (
    <button id={id} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}