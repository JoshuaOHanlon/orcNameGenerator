import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 30vh;
width: 100%;
background-color: var(--blue);
color: white;

.footerContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    color: var(--green);
  }
}
`;

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <FooterStyle>
        <h1>OrcGen</h1>
      </FooterStyle>
    );
  }
}

export default Footer;
