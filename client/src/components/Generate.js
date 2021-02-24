import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const GenerateStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  width: 100%;
  background-color: var(--peach);
  color:white;

  h1 {
    color: white;
  }

  .displayName {
    padding-bottom: 20px;
    h3 {
      display: inline;
    }
    .orcNameHeading {
      color: var(--green);
    }
  }
`;

const NameGenCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;

const genOrcName = (data) => {
  const first = data.first[Math.floor(Math.random() * data.first.length)];

  const getConnector = () => {
    let connector = data.connector;
    let total = 0;
    for (let i = 0; i < connector.length; ++i) {
      total += connector[i][1];
    }

    const threshold = Math.random() * total;
    total = 0;

    for (let i = 0; i < connector.length - 1; ++i) {
      total += connector[i][1];
      if (total >= threshold) {
        return connector[i][0];
      }
    }

    return connector[connector.length - 1][0];
  }
  const connector = getConnector();
  const lastOne = data.lastOne[Math.floor(Math.random() * data.lastOne.length)];
  const lastTwo = data.lastTwo[Math.floor(Math.random() * data.lastTwo.length)];

  return `${first} ${connector} ${lastOne} ${lastTwo}`;
};

class Generate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orcName: ''
    }

    this.generateOrcName = this.generateOrcName.bind(this);
  }



  generateOrcName() {
    let orcName = genOrcName(this.props.titles);
    this.setState({ orcName });
  }

  render() {
    return (
      <GenerateStyle id='generate'>
        <h1>Generate an Orc Name</h1>
        <NameGenCont>
          <div className='displayName'>
            <h3>You are: </h3>
            <h3 className='orcNameHeading'>{this.state.orcName}</h3>
          </div>
          <Button variant='success' onClick={this.generateOrcName} >Generate Name</Button>
        </NameGenCont>
      </GenerateStyle>
    );
  }
}

export default Generate;
