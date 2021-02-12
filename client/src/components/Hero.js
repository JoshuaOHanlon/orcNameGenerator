import React from 'react';
import styled from 'styled-components';

const HeroStyling = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .fade-in-first {
    animation: fade 0.9s ease-in;
  }

  @keyframes fade {
    0% {
      opacity: 0;
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

  h3 {
    margin-top: 10px;
    color: grey;
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;
  }
`;

const EmailStyling = styled.div`
  margin-top: 50px;
  border: 1px solid var(--green);
  border-radius: 3px;
  height: 50px;
  width: 140px;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(0, 254, 222, 0.3);
  }
  a {
    color: var(--green);
    text-decoration: none;
  }
`;

class Hero extends React.Component {
  constructor(props) {
    super(props)

    this.first = <h1 className={
                  this.props.isLoaded ? 'fade-in-first' : ''
                }>This is the</h1>;
    this.second = <h2>Orc Name Generator.</h2>;
    this.third = <h3>It is the product of a combination of minds.</h3>;
    this.desc = (
      <p>
        blahahablahaha
      </p>
    );
    this.contactBtn = (
      <EmailStyling>
        <a >
          TBD
        </a>
      </EmailStyling>
    );
    this.renderArr = [this.first, this.second, this.third, this.desc, this.contactBtn];
  }

  render() {
    return (
      <HeroStyling>
        <div className='container'>
          {this.renderArr.map((item, i) => (
            <div key={i} >{item}</div>
          ))}
        </div>
      </HeroStyling>
    )
  }

}

export default Hero;
