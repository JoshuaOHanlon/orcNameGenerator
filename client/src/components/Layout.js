import React from 'react';
import styled from 'styled-components';

import Hero from './Hero.js';
import About from './About.js';
import Settings from './Settings.js';

const LayoutStyle = styled.div`

`;

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LayoutStyle>
        <Hero isLoaded={this.props.animate}/>
        <About />
        <Settings titles={this.props.titles} addTitle={this.props.addTitle} editTitle={this.editTitle} deleteTitle={this.deleteTitle} />
      </LayoutStyle>
    )
  }
}

export default Layout;