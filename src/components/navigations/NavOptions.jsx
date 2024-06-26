import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const Container = styled.div`
  width: 100%;
  height: auto;
`
const Dots = styled.img`
  padding: 1px;
  cursor: pointer;
`

const Option = styled.div`
  font-size: 32px;
  color: white;
  font-weight: 500px;
  display: flex;
  text-decoration: underline;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.gray};
  }
`
const ContainerMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: #30302ded;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
`

export default function NavOptions({ ...props }) {
  const [show, setShow] = useState(false)

  return (
    <Container {...props}>
      <Dots src="/menu.png" height="45px" onClick={() => setShow(!show)} />
      {show && (
        <ContainerMenu onClick={() => setShow(false)}>
          <Option>
            <Link
              onClick={() => setShow(false)}
              to="one"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Início
            </Link>
          </Option>
          <Option>
            <Link
              onClick={() => setShow(false)}
              to="two"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Sobre mim
            </Link>
          </Option>
          <Option>
            <Link
              onClick={() => setShow(false)}
              to="three"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projetos
            </Link>
          </Option>
        </ContainerMenu>
      )}
    </Container>
  )
}
