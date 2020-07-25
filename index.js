import React, { Component } from 'react';
import { render } from 'react-dom';
import LeftPanel from './components/LeftPanel/LeftPanel';
import RightPanel from './components/RightPanel/RightPanel';
import './styles/index.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      botConfig: [{
        heading: "Bot Settings",
        desc: "Choose the name and a description for your bot",
        isEditing: false,
        customizations: []
      },{
        heading: "Bot Appearance",
        desc: "Change the look and color of your chat",
        isEditing: true,
        customizations: [{
          name: "Theme Color",
          desc: "Copy an HEX code",
          type: "Color Picker",
          value: {
            r: 50,
            g: 35,
            b: 171,
            a: 1
          }
        },{
          name: "Bot Avatar",
          desc: "Choose your bot avatar",
          type: "Image Picker",
          value: "someurl"
        }]
      },{
        heading: "Bot Position",
        desc: "Choose the position of your bot's widget",
        isEditing: false,
        customizations: []
      }],
      color: {
        r: 50,
        g: 35,
        b: 171,
        a: 1
      }
    };
  }

  changeTheme = (color) => {
    this.setState({
      botConfig: [
        ...this.state.botConfig.slice(0,1),
        {
          ...this.state.botConfig[1],
          customizations: [
            {
              ...this.state.botConfig[1].customizations[0],
              value: color.rgb
            },
            ...this.state.botConfig[1].customizations.slice(1)
          ]
        }
      ],
      color: color.rgb
    })
  }

  changeAvatar = (img) => {

  }

  render() {
    return (
      <div className="container">
        <div>
          <LeftPanel botConfig={this.state.botConfig} changeTheme={this.changeTheme} changeAvatar={this.changeAvatar} />
        </div>
        <div>
          <RightPanel color={this.state.color} />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
