import styled from 'styled-components'

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
  align-items: end;
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
  padding: 15px;
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
export default function SectionTwo({ ...props }) {
  return (
    <Container {...props}>
      <StyledFlexTitles>
        <Title> Sobre mim</Title>
        <Barra />
        <SubText>
          Aqui você encontrará mais informações sobre mim e minhas habilidades atuais principalmente
          em termos de programação!
        </SubText>
      </StyledFlexTitles>
      <StyledFlexAboutAndSkills>
        <ContainerAboutMe>
          <TitleAlt>Me conheça</TitleAlt>
          <Text>
            Olá, sou o Ryan. Sou um desenvolvedor que sempre preza pela qualidade e a eficácia de um
            website. Há 2 anos comecei meus estudos na área de desenvolvimento de software e me
            apaixonei por tal, sigo até hoje com os estudos e tenho feito alguns freelancer para
            continuar aperfeiçoando minhas habilidades e adquirir uma certa experiência.
          </Text>{' '}
          <Text>
            {' '}
            No segundo mês de estudo iniciei um curso, no qual eu aprendi do básico ao avançado de
            JavaScript + React para o front-end, Express + NodeJs para o back-end e MongoDB +
            PostegresSQL para databases. Com essas habilidades adquiridas ao longo do tempo, passei
            a desenvolver projetos, cujo você encontrará alguns deles logo abaixo, que mostra um
            pouco de meu conhecimento.{' '}
          </Text>
          <Text>
            {' '}
            Não vejo a hora de ingressar no mundo corporativo e seguir com minha carreira
            profissional na programação! Estou aberto a oportunidades de trabalho onde eu possa
            contribuir, aprender e crescer. Se você tiver uma boa oportunidade que corresponda às
            minhas habilidades e experiência <TextAlt> Contate-me.</TextAlt>
          </Text>
        </ContainerAboutMe>
        <ContainerSkills>
          <TitleAlt>Habilidades</TitleAlt>
          <GridSkills>
            <Card>JavaScript</Card>
            <Card>ReactJs</Card>
            <Card>NextJs</Card>
            <Card>SASS</Card>
            <Card>GitHub</Card>
            <Card>Styled-Components</Card>
            <Card>ExpressJs</Card>
            <Card>MongoBD</Card>
            <Card>Git</Card>
            <Card>NodeJs</Card>
            <Card>PostgresSQL</Card>
            <Card>MERN</Card>
            <Card>Vercel</Card>
            <Card>Postman</Card>
          </GridSkills>
        </ContainerSkills>
      </StyledFlexAboutAndSkills>
    </Container>
  )
}
