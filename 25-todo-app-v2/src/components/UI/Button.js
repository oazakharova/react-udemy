import styles from './Button.module.css';

function Button(props) {
  const {
    type,
    buttonText,
    onClick,
    children,
    title,
    disabled = false,
  } = props;

  return (
    <button
      {...props} // добавление всех свойств, а следующие свойства будут перезаписаны, если они есть в объекте props - добавлено для опционального добавления type
      className={styles.button}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
