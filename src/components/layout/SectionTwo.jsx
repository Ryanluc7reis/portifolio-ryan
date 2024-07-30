/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components'
import { Link } from 'react-scroll'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #252525;
  display: flex;
  flex-direction: column;
`

const StyledFlexAboutAndSkills = styled.div`
  margin: 50px 0px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 956px) {
    align-items: center;
    gap: 30px;
    justify-content: center;
    flex-direction: column;
  }
`
const StyledFlexTitles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 30px 0px;
  gap: 10px;
`
const Title = styled.h1`
  font-size: 35px;
  color: white;
  font-weight: bold;
`
const TitleAlt = styled(Title)`
  font-size: 27px;
  color: white;
  font-weight: bold;
`
const Text = styled.h3`
  color: white;
  font-weight: 400;
  line-height: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
`

const TextAlt = styled(Text)`
  width: max-content;
  text-decoration: underline;
  color: #fcfc55;
  cursor: pointer;
  :hover {
    color: #363601;
  }
`
const SubText = styled.h4`
  color: #c9c9c9;
  font-weight: 500;
  width: 40%;
  @media (max-width: 956px) {
    width: 70%;
  }
`
const Barra = styled.div`
  width: 70px;
  height: 3px;
  background-color: #f1ff00;
  border-radius: 10px;
`
const Card = styled.div`
  width: 125px;
  height: 53px;
  background-color: #0a0c00b8;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  box-shadow: 0 8px 8px -4px rgba(90, 90, 3, 0.6);
`
const CardAlt = styled(Card)`
  flex-direction: column;
`
const ContainerAboutMe = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: auto;
  padding: 15px;
  border-radius: 15px;
  background-image: linear-gradient(15deg, #111111 0%, #111111 80%, #111111 80%, #494d01 100%);
  @media (max-width: 956px) {
    width: 85%;
  }
`
const ContainerSkills = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-image: linear-gradient(15deg, #111111 0%, #111111 80%, #111111 80%, #525700 100%);
  height: auto;
  padding: 15px 15px 4px 15px;
  border-radius: 15px;
  @media (max-width: 956px) {
    width: 85%;
  }
`
const GridSkills = styled.div`
  margin: 60px 0px;
  display: grid;
  gap: 10px;
  grid-template-columns: 120px 120px 120px;
  @media (max-width: 956px) {
    display: flex;
    flex-wrap: wrap;
  }
`
const StyledFlexSkillIcons = styled.div`
  display: flex;
  margin-top: 40px;
  gap: 8px;
`
const ImgIcons = styled.img`
  padding: 1px;
`
export default function SectionTwo({ ...props }) {
  return (
    <Container {...props}>
      <StyledFlexTitles>
        <Title>Sobre mim</Title>
        <Barra />
        <SubText>
          Aqui você encontrará mais informações sobre mim e minhas habilidades atuais principalmente
          em termos de programação !
        </SubText>
      </StyledFlexTitles>
      <StyledFlexAboutAndSkills>
        <ContainerAboutMe>
          <TitleAlt>Me conheça</TitleAlt>
          <Text>
            Olá, meu nome é Ryan. Sou desenvolvedor a 2 anos, trabalho principalmente com as
            tecnologias Javascript, React, Nodejs, Express, MongoDB e PostgresSQL.
          </Text>
          <Text>
            {' '}
            No ano de 2022 começei um curso técnico em engenharia de software, no qual aprendi do
            básico ao avançado das minhas tecnologias principais, incluindo JavaScript + React para
            front-end, Express + NodeJs para back-end e MongoDB + PostegresSQL para bancos de dados.
            Daí em diante começei a me aprimorar mais estudando por fora, desenvolvendo projetos
            pessoais e até mesmo participando de eventos de tecnologia em que eu pude aprender um
            pouco sobre computação em nuvem. Hoje em dia atuo como autônomo, mas visando ingressar
            no mundo corporativo.
          </Text>
          <Text>
            {' '}
            Mal posso esperar para seguir minha carreira profissional na programação! Estou aberto a
            oportunidades de trabalho onde eu possa contribuir, aprender e crescer. Se você tiver
            uma boa oportunidade que corresponda às minhas habilidades e experiência{' '}
            <Link to="one" spy={true} smooth={true} offset={-100} duration={500}>
              <TextAlt> Contate-me.</TextAlt>
            </Link>
          </Text>
        </ContainerAboutMe>
        <ContainerSkills>
          <TitleAlt>Habilidades</TitleAlt>
          <GridSkills>
            <Card>HTML5</Card>
            <Card>CSS3</Card>
            <Card>JavaScript</Card>
            <Card>ReactJS</Card>
            <Card>NextJS</Card>
            <Card>SASS</Card>
            <Card>GitHub</Card>
            <CardAlt>
              <h4>Styled</h4> Components
            </CardAlt>
            <Card>ExpressJS</Card>
            <Card>MongoDB</Card>
            <Card>Git</Card>
            <Card>NodeJS</Card>
            <Card>PostgresSQL</Card>
            <Card>MERN</Card>
            <Card>JWT</Card>
            <Card>Vercel</Card>
            <Card>Postman</Card>
            <Card>Figma</Card>
          </GridSkills>
          <StyledFlexSkillIcons>
            <ImgIcons src="/js.png" />
            <ImgIcons src="/react.png" />
            <ImgIcons src="/nodejs.png" />
            <ImgIcons src="/mongodb.png" />
            <ImgIcons src="/git.png" />
            <ImgIcons src="/postgresql.png" />
          </StyledFlexSkillIcons>
        </ContainerSkills>
      </StyledFlexAboutAndSkills>
    </Container>
  )
}
