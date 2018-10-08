import React from "react";
import PropTypes from "prop-types";

const texts = (text, fontSize) => {
  const texts = [];

  for (let i = 0; i < 40; i++) {
    texts.push(
      <div
        key={i}
        className="text"
        style={{ fontSize: fontSize, lineHeight: fontSize }}
      >
        <div className="text_inner1">
          <div className="text_inner2">{text}</div>
        </div>
      </div>
    );
  }

  return texts;
};

const floatingText = ({
  text = "Самбар",
  fontSize = "8rem",
  style,
  classes
}) => {
  return (
    <div className={`floating-text ${classes}`} style={style}>
      <div className="inner">{texts(text, fontSize)}</div>
    </div>
  );
};

floatingText.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.string,
  style: PropTypes.object,
  classes: PropTypes.string
};

export default floatingText;
