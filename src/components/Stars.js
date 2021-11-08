import React from "react";
import Star from "./Star";

const Stars = (props) => {
  let li = [];
  if (typeof props.count === "number" && props.count >= 0 && props.count <= 5) {
    for (let i = 0; i < props.count; i++) {
      li.push(<Star key={i} />);
    }

    return <ul className="ulStar">{li}</ul>;
  } else {
    return null;
  }
};

Stars.defaultProps = {
  count: 0,
};

export default Stars;
