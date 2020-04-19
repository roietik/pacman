import React from "react";

import "header/style.css";

function Header({ score }) {
  return (
    <div className="header">
      <span className="left title">PACMAN</span>
      <span className="right score">
        SCORE: <span className="points">{score}</span>
      </span>
    </div>
  );
}

Header.defaultProps = {
  score: 0,
};

export default Header;
