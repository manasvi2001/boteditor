import React from 'react';
import Header from './Header';
import Section from './Section';

const LeftPanel = ({botConfig, changeTheme, changeAvatar}) => (
  <>
    <Header />
    {
      botConfig.length && botConfig.map((config) => {
        return <Section config={config} changeAvatar={changeAvatar} changeTheme={changeTheme} />
      })
    }
  </>
);

export default LeftPanel;