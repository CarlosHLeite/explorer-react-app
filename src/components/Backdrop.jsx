const Backdrop = (props) => {
  console.log(props);
  return <div className="backdrop" onClick={props.onCancel} />;
};

export default Backdrop;
