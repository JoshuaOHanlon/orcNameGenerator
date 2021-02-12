import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';

const NavContainer = styled.div`
  position: fixed;
  width: 95%;
  display: flex;
  justify-content: space-between;
  transition: top 0.5s;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const LinksContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ol {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  li {
    margin-left: 40px;
    color: var(--green);
  }
  span {
    color: grey;
  }
  button {
    margin-left: 40px;
    margin-top: 5px;
    color: var(--green);
    background-color: var(--slate);
    border: 1px solid;
    border-color: var(--green);
    border-radius: 5px;
    height: 40px;
    width: 80px;
  }
`;

const linksArr = [
  {
    name: 'About',
    url: 'about'
  },
  {
    name: 'Generate',
    url: 'generate'
  },
  {
    name: 'Names',
    url: 'names'
  },
  {
    name: 'Settings',
    url: 'settings'
  }
]

class Nav extends React.Component {
  constructor(props) {
    super(props)

    if (typeof window !== 'undefined') {
      let prevPos = window.pageYOffest;
      window.onscroll = () => {
        const max = document.body.clientHeight - window.innerHeight;
        let currentPos = window.pageYOffset;
        if (
          (max > 0 && prevPos > currentPos && prevPos <= max)
          || (max <= 0 && prevPos > currentPos)
            || (prevPos <= 0 && currentPos <= 0)
        ) {
          document.getElementById('nav').style.top = '0';
        } else {
          document.getElementById('nav').style.top = '-5.0rem';
        }
        prevPos = currentPos;
      }
    }
  }

  render() {
    return(
      <NavContainer id='nav'>
        <LogoContainer>
          <p>LOGO HERE</p>
        </LogoContainer>
        <LinksContainer>
          <ol>
            {linksArr.map(({ url, name }, i) => (
              <li key={i} >
                <Link to={url} smooth={true} duration={500}><span>{name}</span></Link>
              </li>
            ))}
          </ol>
          <button type='button'>TBD</button>
        </LinksContainer>
      </NavContainer>
    );
  }
}

export default Nav;
