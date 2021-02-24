import React from 'react';
import styled from 'styled-components';

import Hero from './Hero.js';
import About from './About.js';
import Generate from './Generate.js';
import Settings from './Settings.js';
import Footer from './Footer.js';

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
        <Generate titles={this.props.titles} />
        <Settings titles={this.props.titles} addTitle={this.props.addTitle} editTitle={this.editTitle} deleteTitle={this.deleteTitle} />
        <Footer />
      </LayoutStyle>
    )
  }
}

export default Layout;