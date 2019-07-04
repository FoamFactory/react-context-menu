import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({ item }) => {
  const {
    label,
    icon,
    onClick,
  } = item;

  return (
    <span
      className="menuItem"
      onClick={onClick}
      key={label}
      style={{"cursor":"pointer","fontSize":"14px","display":"flex","alignItems":"center","justifyContent":"flex-start","marginBottom":"7px"}}
    >
      {icon && <img className="icon" src={icon} />}
      {label}
    </span>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.string,
  }).isRequired,
};

export default MenuItem;
