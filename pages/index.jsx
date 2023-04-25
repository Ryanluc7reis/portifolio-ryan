import styled from 'styled-components'

import H3 from '../src/components/typography/H3'
import H4 from '../src/components/typography/H4'
import ContainerUm from '../src/components/layout/ContainerUm'
import ContainerDois from '../src/components/layout/ContainerDois'
import ContainerSkils from '../src/components/layout/ContainerSkils'
import ContainerSobremim from '../src/components/layout/ContainerSobremim'
import Button from '../src/components/inputs/Button'
import Contacts from '../src/components/layout/Contacts'

import WhatzImage from '../src/components/contacts-image/whtaz'
import GitImage from '../src/components/contacts-image/git'
import EmailImage from '../src/components/contacts-image/email'
import LinkeImage from '../src/components/contacts-image/linkedin'
import Link from 'next/link'

const StyledFlex = styled.div`
  display: flex;
`
const StyledImage = styled.div`
  background: url('${(props) => props.image}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`
const handleClick = () => {
  return <Link href="/google.com">i</Link>
}
function HomePage({ image, imageDois }) {
  return (
    <>
      <>
        <StyledFlex>
          <StyledImage image={image}>
            <ContainerUm>
              <Contacts>
                <WhatzImage onClick={handleClick} />
                <GitImage onCLick={''} />
                <EmailImage onCLick={''} />
                <LinkeImage onCLick={''} />
              </Contacts>
              <H3>Olá, Eu sou o Ryan Lucas</H3>
              <H4>E eu sou um desenvolvedor de software fullstack focado em contruir Websites!</H4>
              <Button>PROJETOS</Button>
            </ContainerUm>
          </StyledImage>
        </StyledFlex>
      </>
      <>
        <StyledImage image={imageDois}>
          <ContainerDois>
            <ContainerSobremim>
              <H3>Sobre mim</H3>
              <H4>
                No ano de 2021 começei a me interessar com programação,e desde então venho estudando{' '}
              </H4>
            </ContainerSobremim>
            <ContainerSkils>
              <H3>Habilidades</H3>
              <H4>HTML,JavaScipt,React,moongose</H4>
            </ContainerSkils>
          </ContainerDois>
        </StyledImage>
      </>
    </>
  )
}
HomePage.defaultProps = {
  image: '/aa416637aae576fc9f1dde64c8b17816.jpg',
  imageDois: '/original-4ab4debcd15404252b095da71afc6b65.jpg'
}

export default HomePage
