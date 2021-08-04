const ActionButton = props => {
  const { type, content, clickHandler } = props;

  return (
    <button className='action-button' type={type} onClick={clickHandler}>
      {content}
    </button>
  );
};

export default ActionButton;
