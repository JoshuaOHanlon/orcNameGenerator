import React from 'react';
import styled from 'styled-components';

const AboutStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 45vh;
  width: 100%;

  .aboutContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h1 {
      color: var(--grey);
    }
  }
`;

class About extends React.Component {
  constructor(props) {
    super(props);

    this.title = <h1>About</h1>
  }

  render() {
    return (
      <AboutStyle id='about'>
        <div className='aboutContainer'>
          <h1>About</h1>
          <p>To be filled...</p>
        </div>
      </AboutStyle>
    )
  }
};

export default About;
