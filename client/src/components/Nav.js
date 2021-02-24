import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';

const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transition: top 0.5s;
  background-color: var(--blue);
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 5px;
  padding-left: 50px;
  color: white;
`;

const LinksContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 15px;
  padding-right: 50px;
  font-size: 15pt;

  ol {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  li {
    margin-left: 40px;
    color: var(--green);
    list-style-type: none;
  }
  span {
    color: white;
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
          <h1>OrcGen</h1>
        </LogoContainer>
        <LinksContainer>
          <ol>
            {linksArr.map(({ url, name }, i) => (
              <li key={i} >
                <Link to={url} smooth={true} duration={500}><span>{name}</span></Link>
              </li>
            ))}
          </ol>
        </LinksContainer>
      </NavContainer>
    );
  }
}

export default Nav;
