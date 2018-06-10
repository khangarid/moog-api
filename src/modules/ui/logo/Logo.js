import React from 'react';

const texts = () => {
  const texts = [];

  for (let i = 0; i < 40; i++) {
    texts.push(
      <div className="text">
        <div className="text_inner1">
          <div className="text_inner2">САМБАР</div>
        </div>
      </div>
    );
  }

  return texts;
};

const logo = () => {
  return (
    <div id="logo">
      <div className="inner">{texts()}</div>
    </div>
  );
};

export default logo;
