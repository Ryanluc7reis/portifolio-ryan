import styled from 'styled-components'
import { useRef } from 'react'

import H3 from '../src/components/typography/H3'
import H4 from '../src/components/typography/H4'
import H5 from '../src/components/typography/H5'
import Title from '../src/components/layout/Title'
import Subtitle from '../src/components/layout/Subtitle'
import Button from '../src/components/inputs/Button'

import ContainerUm from '../src/components/layout/ContainerUm'
import ContainerDois from '../src/components/layout/ContainerDois'
import ContainerSkils from '../src/components/layout/ContainerSkils'
import ContainerSobremim from '../src/components/layout/ContainerSobremim'
import ContainerProjects from '../src/components/layout/ContainerProjects'

import Contacts from '../src/components/layout/Contacts'
import ProjectsCards from '../src/components/cards/ProjectsCards'
import CardsSkills from '../src/components/cards/CardsSkills'

import WhatzImage from '../src/components/contacts-image/whtaz'
import GitImage from '../src/components/contacts-image/git'
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
const StyledContacts = styled.p`
  font-size: 15px;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  color: white;
`
const StyledTitleContacts = styled.p`
  font-size: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  color: white;
  margin-top: 90px;
`
const StyledHabilidades = styled.p`
  font-weight: bold;
  font-size: 55px;
  margin-top: 25px;
  margin-left: 100px;
  color: ${(props) => props.theme.white};
  display: flex;
  justify-content: end;
  text-align: end;
`

function HomePage({ image, imageDois, imageTres }) {
  const projetosRef = useRef(null)

  const handleButtonFocus = () => {
    projetosRef.current
    console.log('retornou aqui')
  }

  const handleClickWpp = () => {
    window.location.replace(
      'https://wa.me/5534998069617?text=Oi%20Ryan,tenho%20uma%20oportunidade%20para%20voc%C3%AA!'
    )
  }
  const handleClickLinke = () => {
    window.location.replace('https://www.linkedin.com/in/ryan-lucas-9387b1244/')
  }
  const handleClickGit = () => {
    window.location.replace('https://github.com/Ryanluc7reis')
  }
  const handleClickProjetosUm = () => {
    window.location.replace('https://social-dev-wine.vercel.app/login')
  }
  const handleClickProjetosDois = () => {
    window.location.replace('https://social-dev-wine.vercel.app/login')
  }
  return (
    <>
      <>
        <StyledFlex>
          <StyledImage image={image}>
            <ContainerUm>
              <H3>Olá, Eu sou o Ryan Lucas</H3>
              <H4>E eu sou um desenvolvedor de software fullstack focado em contruir Websites!</H4>
              <Button onClick={handleButtonFocus}>PROJETOS</Button>
              <StyledTitleContacts>Contate-me por :</StyledTitleContacts>
            </ContainerUm>
            <Contacts>
              <StyledContacts>
                Currículo: <Link href="">Meu curriculo123</Link>
              </StyledContacts>
              <StyledContacts>E-mail: ryandev18@outlook.com</StyledContacts>
              <WhatzImage onClick={handleClickWpp} />
              <GitImage onCLick={handleClickGit} />
              <LinkeImage onCLick={handleClickLinke} />
            </Contacts>
          </StyledImage>
        </StyledFlex>
      </>
      <>
        <StyledImage image={imageDois}>
          <ContainerDois>
            <ContainerSobremim>
              <H3>Sobre mim</H3>
              <H4>
                No ano de 2021 começei a me interessar com programação,e desde então venho estudando
                nfdksdkjfnjsdnfjsdnfj lalaalalalaffdfsdfsdfsd{' '}
              </H4>
            </ContainerSobremim>
            <ContainerSkils>
              <StyledHabilidades>Habilidades</StyledHabilidades>
              <CardsSkills>HTML</CardsSkills>
              <CardsSkills>ReactJs</CardsSkills>
              <CardsSkills>NextJs</CardsSkills>
              <CardsSkills>NodeJs</CardsSkills>
              <CardsSkills>JavaScipt</CardsSkills>
              <CardsSkills>JavaScipt</CardsSkills>
            </ContainerSkils>
          </ContainerDois>
        </StyledImage>
      </>
      <>
        <StyledImage image={imageTres}>
          <Title ref={projetosRef}>PROJETOS</Title>
          <Subtitle>Aqui está alguns de meus projetos pessoais!</Subtitle>
          <ContainerProjects>
            <ProjectsCards>
              <H4>Social Dev</H4>
              <H5>
                Foi construída uma rede social usando ReactJs,NextJs,NodeJs,MongoDb,mongoose e
                styled components.
              </H5>
              <Button onClick={handleClickProjetosUm}> Visitar projeito </Button>
            </ProjectsCards>
            <ProjectsCards>
              <H4>Jogo da velha</H4>
              <H5>
                Foi construído um jogo da velha com placar para treinar ReactJS e fazer manipulção
                de estados dentro do ReactJS.
              </H5>
              <Button onClick={handleClickProjetosDois}>Visitar projeito</Button>
            </ProjectsCards>
            <ProjectsCards>
              <H4>Clima dev</H4>
              <H5>
                Foi construído um jogo da velha com placar para treinar ReactJS e fazer manipulção
                de estados dentro do ReactJS.
              </H5>
              <Button onClick={handleClickProjetosDois}>Visitar projeito</Button>
            </ProjectsCards>
          </ContainerProjects>
        </StyledImage>
      </>
    </>
  )
}
HomePage.defaultProps = {
  image: '/telapreta-background.jpg',
  imageDois: '/original-4ab4debcd15404252b095da71afc6b65.jpg',
  imageTres: '/telapreta-background.jpg'
}

export default HomePage
