import React from "react";
import Star from "./Star";
import PropTypes from 'prop-types';

const propTypes = {
  count: PropTypes.number.isRequired,
};

const defaultProps = {
  count: 0,
};

const Stars = (props) => {
  let li = [];
  if (!(props.count >= 0 && props.count <= 5)) {
    return null;
  }  
    
  for (let i = 0; i < props.count; i++) {
    li.push(<Star key={i} />);
  }
  return <ul className="ulStar">{li}</ul>;
};

Stars.propTypes = propTypes;
Stars.defaultProps = defaultProps;

export default Stars;
