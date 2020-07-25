import React from 'react';

const Header = ({components}) => (
  <div className="section__header">
    <div className="heading">
      <div className="heading__primary">
        Bot Editor
      </div>
      <div className="heading__secondary heading__secondary--primary">
        Change the chat appearances of your bot
      </div>
    </div>
    <div className="button__container">
      <div className="button button--primary">
        Save
      </div>
      <div className="button">
        Live Test
      </div>
    </div>
  </div>
);

export default Header;