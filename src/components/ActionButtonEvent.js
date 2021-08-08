const ActionButtonEvent = props => {
  const { type, content, clickHandler, classes, inverted } = props;

  return (
    <button
      className={`action-button ${classes} ${
        inverted ? 'action-button--inverted' : 'action-button--default'
      }`}
      type={type}
      onClick={clickHandler}
    >
      {content}
    </button>
  );
};

export default ActionButtonEvent;
