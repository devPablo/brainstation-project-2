import { Link } from 'react-router-dom';

const ActionButton = props => {
  const { type, content, clickHandler, toLink, classes, inverted } = props;

  return (
    <Link className={`action-button ${classes} ${inverted  ? 'action-button--inverted' : 'action-button--default'}`} to={toLink} type={type} onClick={clickHandler}>
      {content}
    </Link>
  );
};

export default ActionButton;
