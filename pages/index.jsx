import styled from 'styled-components'
import { Link } from 'react-scroll'

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
import Sinalizador from '../src/components/layout/Sinalizador'

import Contacts from '../src/components/layout/Contacts'
import ProjectsCards from '../src/components/cards/ProjectsCards'
import CardsSkills from '../src/components/cards/CardsSkills'

import WhatzImage from '../src/components/contacts-image/whtaz'
import GitImage from '../src/components/contacts-image/git'
import LinkeImage from '../src/components/contacts-image/linkedin'
import ScrollGif from '../src/components/contacts-image/ScrollGif'

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
  height: 100%;
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
  height: 100%;
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
  @media screen and (max-width: 500px) {
    min-width: 50px;
    height: 35px;
    margin-left: 15px;
  }
`
const StyledImageClimaDev = styled.div`
  background-image: url('${(props) => props.image}');
  background-size: cover;
  width: 70%;
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
  font-size: 17px;
  font-weight: 500;
  color: #3e3e99;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.blackBackground};
  }
`
const StyledTitleContacts = styled.div`
  font-size: 20px;
  display: flex;
  font-weight: bold;
  justify-content: center;
  text-align: center;
  color: #363535;
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
    margin-bottom: 60px;
  }
`
const StyledContactsimage = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 2px solid #3f3d3d;
  border-radius: 50%;
  width: 43px;
  height: 43px;

  :hover {
    transition: 0, 8s;
    background-color: #615f5f;
  }
`

const StyledNameOptions = styled.div`
  font-size: 25px;
  font-weight: 600;
  min-width: 20px;
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
  height: 400px;
  font-weight: 500;
  color: ${(props) => props.theme.H4};
  margin-top: 20px;
`

const StyledContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const StyledSkils = styled.div`
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 15px;
  color: ${(props) => props.theme.title};
`
const StyledContateme = styled.u`
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  color: #180d77;

  :hover {
    color: #5a558d;
  }
`
const StyledTitleAbout = styled.div`
  font-weight: bold;
  font-size: 40px;
  width: 100%;
  color: ${(props) => props.theme.title};
  display: flex;
  justify-content: space-between;
  @media (max-width: 842px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 80px;
    margin-right: 70px;
  }
`
const StyledContactFooter = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`
const ButtonContato = styled.button`
  padding: 15px 35px;
  border-radius: 7px;
  border: 0;
  font-weight: 600;
  color: #04003a;
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: #a3a2a2;
  box-shadow: 0px 4px 4px rgba(46, 46, 44, 0.25);

  cursor: pointer;

  :hover {
    transition: 0.6s;
    background-color: ${(props) => props.theme.blackBackground};
  }
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
  const handleWpp = () => {
    window.open(
      'https://wa.me/5534998069617?text=Oi%20Ryan,tenho%20uma%20oportunidade%20para%20voc%C3%AA!',
      '_blank'
    )
  }
  const handleGit = () => {
    window.open('https://github.com/Ryanluc7reis', '_blank')
  }
  const handleLinke = () => {
    window.open('https://www.linkedin.com/in/ryan-lucas-9387b1244/', '_blank')
  }
  const handleJdv = () => {
    window.open('https://react-jogo-da-velha-orpin.vercel.app/', '_blank')
  }
  const handleSdv = () => {
    window.open(' https://social-dev-wine.vercel.app/login', '_blank')
  }
  const handleCurriculo = () => {
    window.open(
      'https://docs.google.com/document/d/1GAqQqogr_xPIbQh4GZ_k4xjjdL8kMPr2NjEJlKXiVYU/edit#',
      '_blank'
    )
  }

  return (
    <>
      <>
        <ContainerInit id="hero">
          <StyledImage image={image}>
            <ConatainerOptions>
              <StyledNameOptions>
                <StyledImageAvatar image={imageAvatar} />
                <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
                  Ryan.
                </Link>
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
                <Button>
                  <Link
                    to="StyledContainerTitle"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    PROJETOS
                  </Link>
                </Button>
              </ContainerUm>
              <StyledTitleContacts id="StyledTitleContacts">Contate-me por :</StyledTitleContacts>
              <Contacts>
                <StyledContacts onClick={handleCurriculo}>
                  <u>CURRÍCULO</u>
                </StyledContacts>
                E-mail: ryandev18@outlook.com
                <ContainerImage>
                  <StyledContactsimage>
                    <WhatzImage onClick={handleWpp} />
                  </StyledContactsimage>
                  <StyledContactsimage>
                    <GitImage onClick={handleGit} />
                  </StyledContactsimage>
                  <StyledContactsimage>
                    <LinkeImage onClick={handleLinke} />
                  </StyledContactsimage>
                </ContainerImage>
              </Contacts>
              <ScrollGif />
            </ContainerContacts>
          </StyledImage>
        </ContainerInit>
      </>
      <>
        <StyledImageDois image={imageDois}>
          <Title id="ContainerDois">Sobre mim</Title>
          <Sinalizador />
          <Subtitle>
            Aqui você encontrará mais informações sobre mim, minhas habilidades atuais
            principalmente em termos de programação!
          </Subtitle>
          <ContainerDois>
            <ContainerSobreMim>
              <StyledSkils>
                <StyledTitleAbout>Me conheça </StyledTitleAbout>
                <StyledSobremim>
                  Olá,sou o Ryan.Sou um desenvolvedor júnior fullstack que sempre presa pela
                  qualidade e a eficacia de um website.Há 10 meses começei meus estudos na área de
                  desenvolvimento de software e me apaixonei por tal ,sigo até hoje os estudos para
                  continuar aperfeiçuando minhas habilidades e um dia me tornar um sênior.
                  <StyledSobremim>
                    No 2 mês de estudo iniciei um curso ,e nele participei de alguns projetos junto
                    com colegas do curso para conseguir experiência e melhorar de fato minhas
                    habilidades,e com isso passei a desenvolver projetos ,cujo você encontrará 3
                    deles logo abaixo.E não vejo a hora de ingressar nesse mundo o quanto antes e
                    iniciar minha carreira profissional na programação! Estou aberto a oportunidades
                    de trabalho onde eu possa contribuir, aprender e crescer. Se você tiver uma boa
                    oportunidade que corresponda às minhas habilidades e experiência,{' '}
                    <StyledContateme>
                      <Link
                        to="StyledTitleContacts"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                      >
                        Contatar-me.
                      </Link>
                    </StyledContateme>
                  </StyledSobremim>
                </StyledSobremim>
              </StyledSkils>
            </ContainerSobreMim>
            <ContainerHabilidades>
              <StyledSkils>
                <StyledTitleAbout>Habilidades</StyledTitleAbout>
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
                <ContainerSkils>
                  <CardsSkills>JoiResolver</CardsSkills>
                  <CardsSkills>SWR</CardsSkills>
                </ContainerSkils>
              </StyledSkils>
            </ContainerHabilidades>
          </ContainerDois>
        </StyledImageDois>
      </>
      <>
        <StyledImageTres image={imageTres}>
          <StyledContainerTitle>
            <Title id="StyledContainerTitle">PROJETOS</Title>
            <Sinalizador />
            <Subtitle>Aqui está alguns de meus projetos pessoais!</Subtitle>
          </StyledContainerTitle>
          <ScrollGif />
          <ContainerProjects>
            <ProjectsCards>
              <StyledImageClimaDev image={imageSocialDev}>
                <H4Cards>Social Dev</H4Cards>
                <H5>
                  Foi construída uma rede social com intuito de amigos conversarem entre si por meio
                  de posts usando ReactJs,NextJs,NodeJs,MongoDb,mongoose e styled components.
                </H5>
                <Button onClick={handleSdv} id="scd">
                  {' '}
                  Visitar projeto{' '}
                </Button>
              </StyledImageClimaDev>
            </ProjectsCards>
            <ProjectsCards>
              <StyledImageClimaDev image={imageJogoDaV}>
                <H4Cards>Jogo da velha</H4Cards>
                <H5>
                  Foi construído um jogo da velha com placar para treinar ReactJS e fazer manipulção
                  de estados dentro do ReactJs.
                </H5>
                <Button onClick={handleJdv} id="jdv">
                  Visitar projeto
                </Button>
              </StyledImageClimaDev>
            </ProjectsCards>
            <ProjectsCards>
              <StyledImageClimaDev image={imageClimaDev}>
                <H4Cards>Clima dev</H4Cards>
                <H5>
                  Foi construído um site que te oferece a previsao do tempo atual e nas proximas 6
                  horas do mundo inteiro,utilizando ReactJs,Nextjs e Router.
                </H5>
                <Button>Visitar projeto</Button>
              </StyledImageClimaDev>
            </ProjectsCards>
          </ContainerProjects>
          <StyledContactFooter>
            <Subtitle>
              Caso tenha gostado do que viu , não hesite em entrar em contato comigo.
            </Subtitle>
            <ButtonContato>
              <Link to="StyledTitleContacts" spy={true} smooth={true} offset={-100} duration={500}>
                CONTATO
              </Link>
            </ButtonContato>
          </StyledContactFooter>
        </StyledImageTres>
      </>
    </>
  )
}
HomePage.defaultProps = {
  image: '/newnew.jpg',
  imageDois: '/fundo2.jpg',
  imageTres: '/fundo3.jpg',
  imageAvatar: '/avatar3.jpg',
  imageClimaDev: '/background.png',
  imageSocialDev: '/redes-sociais1.jpg',
  imageJogoDaV: '/jogodavelha1.jpg'
}

export default HomePage
