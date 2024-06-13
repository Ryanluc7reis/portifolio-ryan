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
        <Title>About me</Title>
        <Barra />
        <SubText>
          Here you will find more information about me and my current skills mainly in terms of
          programming!
        </SubText>
      </StyledFlexTitles>
      <StyledFlexAboutAndSkills>
        <ContainerAboutMe>
          <TitleAlt>Know me</TitleAlt>
          <Text>
            Hi, I'm Ryan. I am a developer who always values the quality and effectiveness of a Web
            site. 2 years ago I started my studies in the area of softwaredevelopment and I fell in
            love with it, I continue my studies to this day and have done some freelance work for
            continue to improve my skills and gain some experience.
          </Text>{' '}
          <Text>
            {' '}
            In the second month of study I started a course, in which I learned from basic to
            advanced JavaScript + React for the front end, Express + NodeJs for the back end and
            MongoDB + PostegresSQL for databases. With these skills acquired over time, I developing
            projects, some of which you will find below, which shows a little of my knowledge.{' '}
          </Text>
          <Text>
            {' '}
            I can't wait to join the corporate world and pursue my career professional in
            programming! I am open to job opportunities wherever I can contribute, learn and grow.
            If you have a good opportunity that matches your my skills and experience{' '}
            <Link to="one" spy={true} smooth={true} offset={-100} duration={500}>
              <TextAlt> Contact-me.</TextAlt>
            </Link>
          </Text>
        </ContainerAboutMe>
        <ContainerSkills>
          <TitleAlt>Skills</TitleAlt>
          <GridSkills>
            <Card>HTML5</Card>
            <Card>CSS3</Card>
            <Card>JavaScript</Card>
            <Card>ReactJs</Card>
            <Card>NextJs</Card>
            <Card>SASS</Card>
            <Card>GitHub</Card>
            <Card>Styled-Components</Card>
            <Card>ExpressJs</Card>
            <Card>MongoDB</Card>
            <Card>Git</Card>
            <Card>NodeJs</Card>
            <Card>PostgresSQL</Card>
            <Card>MERN</Card>
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
