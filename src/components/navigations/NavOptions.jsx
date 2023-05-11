import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const ContainerDots = styled.div`
  height: max-content;
  display: flex;
  justify-content: end;
  align-items: end;
`
const Dots = styled.img`
  cursor: pointer;
  background-color: transparent;
`
const StyledMenu = styled.div`
  position: relative;
  width: 130px;
  height: 160px;
  box-shadow: 6px 5px 15px 5px rgba(0, 0, 0, 0.15);
  background-color: ${(props) => props.theme.white};
  display: ${(props) => (props.show ? 'block' : 'none')};
  margin-top: 130px;
`
const StyledOption = styled.div`
  font-size: 18px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.gray};
  }
`
const StyledContainerMenu = styled.div`
  display: none;
  margin-left: 50px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;

  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    position: relative;
    margin: 0 20px;
  }
`
//'onBlur' = qunado clicar em algum deck de opçoes e sair clicando fora
const NavOptions = () => {
  const [show, setShow] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShow(false)
      }
    }
    document.addEventListener('click', handleClickOutSide, true)

    return () => {
      document.removeEventListener('click', handleClickOutSide, true)
    }
  }, [menuRef])
  return (
    <>
      <StyledContainerMenu>
        <ContainerDots>
          <Dots src="/Hamburger_icon.svg.png" height="45px" onClick={() => setShow(!show)} />
        </ContainerDots>
        <StyledMenu show={show} ref={menuRef} onBlur={() => setShow(false)}>
          <StyledOption>
            <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
              Início
            </Link>
          </StyledOption>
          <StyledOption>
            <Link to="ContainerDois" spy={true} smooth={true} offset={-100} duration={500}>
              Sobre mim
            </Link>
          </StyledOption>
          <StyledOption>
            <Link to="StyledContainerTitle" spy={true} smooth={true} offset={-100} duration={500}>
              Projetos
            </Link>
          </StyledOption>
        </StyledMenu>
      </StyledContainerMenu>
    </>
  )
}

export default NavOptions
