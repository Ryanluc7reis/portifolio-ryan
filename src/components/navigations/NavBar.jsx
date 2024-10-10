import styled from 'styled-components'
import { Link } from 'react-scroll'
import { useState } from 'react'
import NavOptions from './NavOptions'

const Container = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  background: #252525;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 1000;
`
const Name = styled.h3`
  font-size: 22px;
  font-weight: 400;
  font-family: 'Merriweather', serif;
  font-style: italic;
  cursor: pointer;
  background: linear-gradient(45deg, #fffb01, #899205);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const StyledFlexOptions = styled.div`
  display: flex;
`
const Options = styled.h3`
  cursor: pointer;
  color: white;
  font-weight: 500;
  padding: 10px;
  border-radius: 7px;
  background-color: ${({ isActive }) => (isActive ? '#606b01' : 'transparent')};
  transition: background-color 0.2s;

  :hover {
    background-color: #606b01;
  }

  @media (max-width: 540px) {
    display: none;
  }
`
const NavOptionsAlt = styled(NavOptions)`
  display: none;
  @media (max-width: 540px) {
    display: flex;
  }
`

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('one')

  return (
    <Container>
      <Name>RyanLucas.</Name>

      <StyledFlexOptions>
        <Options isActive={activeSection === 'one'}>
          <Link
            to="one"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onSetActive={() => setActiveSection('one')}
          >
            Início
          </Link>
        </Options>
        <Options isActive={activeSection === 'two'}>
          <Link
            to="two"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onSetActive={() => setActiveSection('two')}
          >
            Sobre mim
          </Link>
        </Options>
        <Options isActive={activeSection === 'three'}>
          <Link
            to="three"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onSetActive={() => setActiveSection('three')}
          >
            Projetos
          </Link>
        </Options>
        <NavOptionsAlt />
      </StyledFlexOptions>
    </Container>
  )
}
