import React from 'react';
import PropTypes from 'prop-types';

const texts = (text, fontSize) => {
  const texts = [];

  for (let i = 0; i < 40; i++) {
    texts.push(
      <div
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

const logo = ({ text = 'Самбар', fontSize = '8rem' }) => {
  return (
    <div id="logo">
      <div className="inner">{texts(text, fontSize)}</div>
    </div>
  );
};

logo.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.string
};

export default logo;
