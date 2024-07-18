function Wrapper(props) {
  return (
    <div
      style={{
        backgroundColor: props.color,
        width: '250px',
        padding: '20px',
        margin: '20px auto',
      }}
    >
      {props.children}
    </div>
  );
}

export default Wrapper;
