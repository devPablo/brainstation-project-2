const IconWrapperEvent = props => {
  const { clickHandler } = props;

  return (
    <div onClick={clickHandler} className='icon-wrapper-event'>
      {props.children}
    </div>
  );
};

export default IconWrapperEvent;
