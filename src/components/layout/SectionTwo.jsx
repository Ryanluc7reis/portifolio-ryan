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
  height: 470px;
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
            Desenvolvedor Full Stack especializado em React e Node.js Trabalhando profissionalmente
            desde 2022, sou especialista em desenvolvimento de aplicativos web com JavaScript. Tenho
            uma sólida experiência na criação de soluções eficientes, usando tecnologias como
            Next.js e TypeScript para desenvolver sites e aplicativos robustos e escaláveis.
          </Text>
          <Text>
            {' '}
            Como um paralelo a isso, para melhor fluxo de desenvolvimento eu tenho conhecimento em
            Git, Jest testings, Docker, Express, CI/CD e JWT para segurança de dados.
          </Text>
          <Text>
            {' '}
            Sou curioso no mundo da tecnologia, procurando influenciar a vida das pessoas o máximo
            possível com soluções através da programação, sendo assim motivado a enfrentar projetos
            desafiadores com o objetivo de felicidade do cliente.{' '}
            <Link to="one" spy={true} smooth={true} offset={-100} duration={500}>
              <TextAlt> Contate-me.</TextAlt>
            </Link>
          </Text>
        </ContainerAboutMe>
        <ContainerSkills>
          <TitleAlt>Habilidades</TitleAlt>
          <GridSkills>
            <Card>JavaScript</Card>
            <Card>TypeScript</Card>
            <Card>ReactJS</Card>
            <Card>React-native</Card>
            <Card>NodeJS</Card>
            <Card>HTML</Card>
            <Card>CSS</Card>
            <Card>NextJS</Card>
            <Card>JWT</Card>
            <Card>Jest</Card>
            {/* <Card>AWS</Card> */}
            <Card>SQL</Card>
            <Card>NoSQL</Card>
            <Card>GitHub</Card>
            <Card>Git</Card>
            <CardAlt>
              <h4>Styled</h4> Components
            </CardAlt>
            <Card>ExpressJS</Card>
            <Card>MongoDB</Card>
            <Card>Postgres</Card>
            <Card>MERN</Card>
            <Card>MENN</Card>
            <Card>REST-APIs</Card>
            <Card>Docker</Card>
          </GridSkills>
          <StyledFlexSkillIcons>
            <ImgIcons src="/js.png" />
            <ImgIcons src="/react.png" />
            <ImgIcons src="/nodejs.png" />
            <ImgIcons src="/mongodb.png" />
            <ImgIcons src="/git.png" />
            <ImgIcons src="/postgresql.png" />
            <ImgIcons src="/docker.png" />
            <ImgIcons src="/typescript.png" />
            {/* <ImgIcons src="/aws.png" /> */}
          </StyledFlexSkillIcons>
        </ContainerSkills>
      </StyledFlexAboutAndSkills>
    </Container>
  )
}
