import styled from 'styled-components'
import { useRef } from 'react'

import H3 from '../src/components/typography/H3'
import H4 from '../src/components/typography/H4'
import H4Cards from '../src/components/typography/H4Cards'
import H5 from '../src/components/typography/H5'
import Title from '../src/components/layout/Title'
import Subtitle from '../src/components/layout/Subtitle'
import Button from '../src/components/inputs/Button'

import ContainerInit from '../src/components/layout/ContainerInit'
import ConatainerOptions from '../src/components/layout/ConatainerOptions'
import ContainerContacts from '../src/components/layout/ContainerContacts'
import ContainerUm from '../src/components/layout/ContainerUm'
import ContainerDois from '../src/components/layout/ContainerDois'
import ContainerSkils from '../src/components/layout/ContainerSkils'
import ContainerSobreMim from '../src/components/layout/ContainerSobreMim'
import ContainerHabilidades from '../src/components/layout/ContainerHabilidades'
import ContainerProjects from '../src/components/layout/ContainerProjects'
import NavOptions from '../src/components/navigations/NavOptions'
import ContNavOptions from '../src/components/layout/ContNavOptions'

import Contacts from '../src/components/layout/Contacts'
import ProjectsCards from '../src/components/cards/ProjectsCards'
import CardsSkills from '../src/components/cards/CardsSkills'

import WhatzImage from '../src/components/contacts-image/whtaz'
import GitImage from '../src/components/contacts-image/git'
import LinkeImage from '../src/components/contacts-image/linkedin'
import Link from 'next/link'

const StyledImage = styled.div`
  background: url('${(props) => props.image}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`
const StyledImageDois = styled.div`
  background: url('${(props) => props.image}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`
const StyledImageTres = styled.div`
  background: url('${(props) => props.image}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  @media (max-width: 600px) {
    width: 100%;
    height: 100vh;
  }
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
  width: 60%;
  height: 200px;
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 38px;
  border-radius: 8px;
`

const StyledContacts = styled.div`
  font-size: 15px;
  display: flex;
  gap: 15px;
  text-align: center;
  color: #fafafa;
`
const StyledTitleContacts = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  color: #fafafa;
  margin-top: 50px;
`
const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }
`
const StyledContactsimage = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 2px solid #3d3b3b;
  border-radius: 50%;
  width: 43px;
  height: 43px;

  :hover {
    transition: 0, 8s;
    background-color: #b1b1b1;
  }
`

const StyledNameOptions = styled.div`
  font-size: 25px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-right: 200px;
  color: #393838;
  border-radius: 15px;
  cursor: pointer;
`
// background-color: #be0b0b;

const StyledSobremim = styled.div`
  font-size: 20px;
  max-width: 650px;
  font-weight: 500;
  gap: 10px;
  color: ${(props) => props.theme.H4};
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    line-break: 100px;
    margin-top: 10px;
  }
`
const StyledSobremimP = styled.p`
  font-size: 20px;
  font-weight: 500;
  max-width: 650px;
  color: ${(props) => props.theme.H4};
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    line-break: 100px;
    margin-top: 10px;
  }
`

const StyledContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const StyledSkils = styled.div`
  font-weight: bold;
  font-size: 55px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.title};
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
  const handleClickGit = (url) => {
    window.open(url, '_blank', 'noreferrer')
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
        <ContainerInit>
          <StyledImage image={image}>
            <ConatainerOptions>
              <StyledNameOptions>
                <StyledImageAvatar image={imageAvatar} />
                Ryan.
              </StyledNameOptions>
              <NavOptions />
              <ContNavOptions />
            </ConatainerOptions>
            <ContainerContacts>
              <ContainerUm>
                <H3>Olá, Eu sou o Ryan </H3>
                <H4>
                  E eu sou um desenvolvedor de software fullstack focado em contruir Websites!
                </H4>
                <Button onClick={handleButtonFocus}>PROJETOS</Button>
              </ContainerUm>
              <StyledTitleContacts>Contate-me por :</StyledTitleContacts>
              <Contacts>
                <StyledContacts>
                  Meu currículo:<Link href="">Meu curriculo123</Link>
                  E-mail: ryandev18@outlook.com
                </StyledContacts>
                <ContainerImage>
                  <StyledContactsimage>
                    <WhatzImage onClick={handleClickWpp} />
                  </StyledContactsimage>
                  <StyledContactsimage>
                    <GitImage onCLick={() => handleClickGit('https://github.com/Ryanluc7reis')} />
                  </StyledContactsimage>
                  <StyledContactsimage>
                    <LinkeImage onCLick={handleClickLinke} />
                  </StyledContactsimage>
                </ContainerImage>
              </Contacts>
            </ContainerContacts>
          </StyledImage>
        </ContainerInit>
      </>
      <>
        <StyledImageDois image={imageDois}>
          <ContainerDois>
            <ContainerSobreMim>
              <StyledSkils>
                Sobre mim
                <StyledSobremim>
                  Olá,sou o Ryan.Sou um desenvolvedor fullstack que sempre presa muito pela
                  qualidade e a eficacia de um website.Há 10 meses começei meus estudos na area de
                  desenvolvimento de software e me apaixonei por tal ,sigo até hoje os estudos para
                  continuar aperfeiçuando minhas habilidades e um dia me tornar um sênior.
                  <StyledSobremimP>
                    No 2 mês de estudo iniciei um curso ,e nele participei de vários projetos junto
                    com colegas do curso para conseguir experiência e melhorar de fato minhas
                    habilidades,e com isso passei a desenvolver projetos sozinhos ,cujo você
                    encontrará 3 deles logo abaixo.E não vejo a hora de ingressar nesse mundo o
                    quanto antes e iniciar minha longa carreira profissional na programação! Caso
                    tenha gostado do que viu nao deixe de <Link href="#">Contatar-me</Link>.
                  </StyledSobremimP>
                </StyledSobremim>
              </StyledSkils>
            </ContainerSobreMim>
            <ContainerHabilidades>
              <StyledSkils>
                Habilidades
                <ContainerSkils>
                  <CardsSkills>HTML</CardsSkills>
                  <CardsSkills>CSS</CardsSkills>
                  <CardsSkills>NextJs</CardsSkills>
                </ContainerSkils>
                <ContainerSkils>
                  <CardsSkills>JavaScript</CardsSkills>
                  <CardsSkills>NodeJs</CardsSkills>
                  <CardsSkills>MongoBD</CardsSkills>
                </ContainerSkils>
                <ContainerSkils>
                  <CardsSkills>Mongoose</CardsSkills>
                  <CardsSkills>Axios</CardsSkills>
                  <CardsSkills>SASS</CardsSkills>
                </ContainerSkils>
                <ContainerSkils>
                  <CardsSkills>ESlint</CardsSkills>
                  <CardsSkills>Prettier</CardsSkills>
                  <CardsSkills>Router</CardsSkills>
                </ContainerSkils>
                <ContainerSkils>
                  <CardsSkills>ExpressJs</CardsSkills>
                  <CardsSkills>Styled Components</CardsSkills>
                  <CardsSkills>ReactJs</CardsSkills>
                </ContainerSkils>
              </StyledSkils>
            </ContainerHabilidades>
          </ContainerDois>
        </StyledImageDois>
      </>
      <>
        <StyledImageTres image={imageTres}>
          <StyledContainerTitle>
            <Title ref={projetosRef}>PROJETOS</Title>
            <Subtitle>Aqui está alguns de meus projetos pessoais!</Subtitle>
          </StyledContainerTitle>
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
        </StyledImageTres>
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
