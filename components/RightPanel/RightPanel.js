import React, {useState, useEffect} from 'react';
import Widget from './Fragments/Widget';
import Chat from './Fragments/Chat';
import { lighten } from '../../utils/util';

const previewSection = (selected, colorrgb) => {
  switch(selected) {
    case "Widget":
      return <Widget />
    case "Chat":
      return <Chat color={colorrgb} />
  }
}

const RightPanel = ({components, color}) => {
  const [selected, setSelected] = useState("Chat");
  const [colorrgb, setColorrgb] = useState(`rgba(${color.r},${color.g},${color.b},${color.a})`);

  useEffect(() => {
    setColorrgb(`rgba(${color.r},${color.g},${color.b},${color.a})`);
  }, [color]);

  return (
    <div style={{backgroundColor: lighten(color, 87)}} className="section__widget">
      <div className="widget__tabs">
        <div style={{border: `2px solid ${colorrgb}`, color: colorrgb}} className={["button button--rounded", selected === "Widget" ? "button--primary" : " "].join(" ")}>
          Widget
        </div>
        <div style={{border: `2px solid ${colorrgb}`, backgroundColor: colorrgb}} className={["button button--rounded", selected === "Chat" ? "button--primary" : " "].join(" ")}>
          Chat
        </div>
      </div>
      {previewSection(selected, color)}
    </div>
  );
}
export default RightPanel;