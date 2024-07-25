function Button(props) {
  const { type, buttonText } = props;

  return <button type={type}>{buttonText}</button>;
}

export default Button;
