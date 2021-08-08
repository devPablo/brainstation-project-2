const IconWrapperEvent = props => {
  const { clickHandler, classes } = props;

  return (
    <div onClick={clickHandler} className={`icon-wrapper-event ${classes}`}>
      {props.children}
    </div>
  );
};

export default IconWrapperEvent;
