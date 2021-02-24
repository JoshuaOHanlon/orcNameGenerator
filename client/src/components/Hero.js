import React from 'react';
import styled from 'styled-components';

const HeroStyling = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100%;
  background-color: var(--blue);

  .heroContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .fade-in-first {
    animation: fade 0.9s ease-in;
  }

  .fade-in-second {
    animation: fade 0.9s ease-in 0.9s forwards;
    visibility: visible;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  h1 {
    margin: 0 0 5px 4px;
    color: var(--green);
    font-size: clamp(14px, 5vw, 16px);

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h2 {
    visibility: hidden;
    color: white;
  }

  h3 {
    margin-top: 10px;
    color: var(--grey);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;
  }
`;

class Hero extends React.Component {
  constructor(props) {
    super(props)

    this.first = <h1 className={
                    this.props.isLoaded ? 'fade-in-first' : ''
                  }>It had to be done.</h1>;
    this.second = <h2 className={
                    this.props.isLoaded ? 'fade-in-second' : ''
                  }>The Orc Name Generator.</h2>;
    this.third = <h3>Who doesn't want an orc name?</h3>;

    this.renderArr = [this.first, this.second, this.third];
  }

  render() {
    return (
      <HeroStyling>
        <div className='heroContainer'>
          {this.renderArr.map((item, i) => (
            <div key={i} >{item}</div>
          ))}
        </div>
      </HeroStyling>
    )
  }

}

export default Hero;
