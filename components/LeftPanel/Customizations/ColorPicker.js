import React, {useEffect, useState} from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = ({customization, changeTheme}) => {
  return (
    <>
      <div>
        <div className="heading__primary">
          {customization.name}
        </div>
        <div className="heading__secondary">
          {customization.desc}
        </div>
        <br />
        <ChromePicker color={customization.value} onChange={changeTheme} />
      </div>
    </>
  )
};

export default ColorPicker;