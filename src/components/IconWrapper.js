const IconWrapper = props => {
  const { toLink, target } = props;

  return (
    <a href={toLink} target={target} className='icon-wrapper'>
      {props.children}
    </a>
  );
};

export default IconWrapper;
