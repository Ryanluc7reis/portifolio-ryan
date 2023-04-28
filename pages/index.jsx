import styled from 'styled-components'
import { useRef } from 'react'

import H3 from '../src/components/typography/H3'
import H4 from '../src/components/typography/H4'
import H4Cards from '../src/components/typography/H4Cards'
import H5 from '../src/components/typography/H5'
import Title from '../src/components/layout/Title'
import Subtitle from '../src/components/layout/Subtitle'
import Button from '../src/components/inputs/Button'

import ConatainerOptions from '../src/components/layout/ConatainerOptions'
import ContainerUm from '../src/components/layout/ContainerUm'
import ContainerDois from '../src/components/layout/ContainerDois'
import ContainerSkils from '../src/components/layout/ContainerSkils'
import ContainerDoisTitle from '../src/components/layout/ContainerDoisTitle'
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
const StyledImageAvatar = styled.div`
  background-image: url('${(props) => props.image}');
  background-size: cover;
  width: 40px;
  height: 35px;
  padding: 5px;
  margin-right: 4px;
`
const StyledImageClimaDev = styled.div`
  background-image: url('${(props) => props.image}');
  background-size: cover;
  width: 200px;
  height: 200px;
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 36px;
  border-radius: 8px;
`

const StyledContacts = styled.p`
  font-size: 15px;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  color: #fafafa;
`
const StyledTitleContacts = styled.p`
  font-size: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  color: #fafafa;
  margin-top: 50px;
`
const StyledNameOptions = styled.p`
  font-size: 22px;
  display: flex;
  align-items: center;
  color: #f3f3f3;
  border-radius: 15px;
  background-color: #535353;
  cursor: pointer;
  :hover {
    transition: 0.3s;
    background-color: ${(props) => props.theme.brown};
  }
`
// background-color: #be0b0b;
const StyledOptions = styled.p`
  font-size: 21px;
  display: flex;
  cursor: pointer;
  color: #797777;

  :hover {
    border-radius: 15px;
    transition: 0.3s;
    color: ${(props) => props.theme.brown};
  }
`

const StyledSobremim = styled.p`
  font-size: 20px;
  max-width: 715px;
  margin-left: 25px;
  display: flex;
  color: ${(props) => props.theme.H4};
`

function HomePage({
  image,
  imageDois,
  imageTres,
  imageAvatar,
  imageClimaDev,
  imageSocialDev,
  imageJogoDaV
}) {
  const projetosRef = useRef(null)

  const handleButtonFocus = () => {
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
            <ConatainerOptions>
              <StyledNameOptions>
                <StyledImageAvatar image={imageAvatar} />
                Ryan Lucas
              </StyledNameOptions>
              <StyledOptions onClick={handleButtonFocus}>Sobre mim</StyledOptions>
              <StyledOptions>Habilidades</StyledOptions>
              <StyledOptions>Projetos</StyledOptions>
            </ConatainerOptions>
            <ContainerUm>
              <H3>Olá, Eu sou o Ryan Lucas</H3>
              <H4>E eu sou um desenvolvedor de software fullstack focado em contruir Websites!</H4>
              <Button onClick={handleButtonFocus}>PROJETOS</Button>
              <StyledTitleContacts>Contate-me por :</StyledTitleContacts>
            </ContainerUm>
            <Contacts>
              <StyledContacts>
                Meu Currículo:<Link href="">Meu curriculo123</Link>
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
            <ContainerDoisTitle>
              <H3>Sobre mim</H3>
              <H3>Habilidades</H3>
            </ContainerDoisTitle>

            <ContainerSkils>
              <StyledSobremim>
                E eu sou um desenvolvedor de software fullstack focado em contruir
                Websites!fhedjkadksdklasdkljasdjajsdklasjdklasjdaskld
              </StyledSobremim>
              <CardsSkills>HTML</CardsSkills>
              <CardsSkills>CSS</CardsSkills>
              <CardsSkills>NextJs</CardsSkills>
              <CardsSkills>ReactJs</CardsSkills>
              <CardsSkills>JavaScript</CardsSkills>
            </ContainerSkils>
            <ContainerSkils>
              <CardsSkills>NodeJs</CardsSkills>
              <CardsSkills>MongoBD</CardsSkills>
              <CardsSkills>Mongoose</CardsSkills>
              <CardsSkills>Axios</CardsSkills>
              <CardsSkills>Router</CardsSkills>
            </ContainerSkils>
            <ContainerSkils>
              <CardsSkills>ExpressJs</CardsSkills>
              <CardsSkills>Styled Components</CardsSkills>
              <CardsSkills>SASS</CardsSkills>
              <CardsSkills>ESlint</CardsSkills>
              <CardsSkills>Prettier</CardsSkills>
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
              <StyledImageClimaDev image={imageSocialDev}>
                <H4Cards>Social Dev</H4Cards>
                <H5>
                  Foi construída uma rede social com intuito de amigos conversarem entre si por meio
                  de posts usando ReactJs,NextJs,NodeJs,MongoDb,mongoose e styled components.
                </H5>
                <Button onClick={handleClickProjetosUm}> Visitar projeito </Button>
              </StyledImageClimaDev>
            </ProjectsCards>
            <ProjectsCards>
              <StyledImageClimaDev image={imageJogoDaV}>
                <H4Cards>Jogo da velha</H4Cards>
                <H5>
                  Foi construído um jogo da velha com placar para treinar ReactJS e fazer manipulção
                  de estados dentro do ReactJs.
                </H5>
                <Button onClick={handleClickProjetosDois}>Visitar projeito</Button>
              </StyledImageClimaDev>
            </ProjectsCards>
            <ProjectsCards>
              <StyledImageClimaDev image={imageClimaDev}>
                <H4Cards>Clima dev</H4Cards>
                <H5>
                  Foi construído um jogo da velha com placar para treinar ReactJS e fazer manipulção
                  de estados dentro do ReactJS.
                </H5>
                <Button onClick={handleClickProjetosDois}>Visitar projeito</Button>
              </StyledImageClimaDev>
            </ProjectsCards>
          </ContainerProjects>
        </StyledImage>
      </>
    </>
  )
}
HomePage.defaultProps = {
  image: '/fundo1.jpg',
  imageDois: '/fundo2.jpg',
  imageTres: '/fundo3.jpg',
  imageAvatar: '/avatar3.jpg',
  imageClimaDev: '/cliimadevimage.jpg',
  imageSocialDev: '/redesocial.jpg',
  imageJogoDaV: '/jogodavelha1.jpg'
}

export default HomePage
