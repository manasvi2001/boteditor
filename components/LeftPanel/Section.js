import React from 'react';
import ColorPicker from './Customizations/ColorPicker';
import ImagePicker from './Customizations/ImagePicker';

const chooseBody = (customization, changeTheme, changeAvatar) => {
  switch(customization.type) {
    case "Color Picker":
      return <ColorPicker customization={customization} changeTheme={changeTheme}/>
    case "Image Picker":
      return <ImagePicker customization={customization} changeAvatar={changeAvatar}/>
    default:
      return null;
  }
}

const Section = ({config, changeTheme, changeAvatar}) => (
  <>
    <div className="section__config">
      <div className="config__heading">
        <div className="heading__primary">
          {config.heading}
        </div>
        <div className="heading__secondary">
          {config.desc}
        </div>
      </div>
      {config.isEditing ? <div className="h-divider"></div> : null}
      {config.isEditing ? 
        config.customizations.map(customization => {
          return chooseBody(customization, changeTheme, changeAvatar);
        })
        :
        null
      }
    </div>
  </>
);

export default Section;