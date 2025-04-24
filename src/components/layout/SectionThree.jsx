import styled from 'styled-components'
import Button from '../inputs/Button'
import { projects } from '../../data/projects'
import { contacts } from '../../data/contacts'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #252525;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 578px) {
    padding: 0 25px;
  }

  @media (max-width: 469px) {
    padding: 0 15px;
  }
  @media (max-width: 371px) {
    padding: 0 10px;
  }
`
const Title = styled.h1`
  font-size: 35px;
  color: white;
  font-weight: bold;
`
const TitleProject = styled.h3`
  color: white;
  font-weight: bold;
`
const Text = styled.h4`
  color: white;
  font-weight: 400;
  margin: 50px 0px;
  line-height: 23px;
  @media (max-width: 492px) {
    margin: 30px 0px;
  }
  @media (max-width: 392px) {
    margin: 10px 0px;
  }
`
const TextContact = styled.h3`
  color: white;
  font-weight: 400;
`
const SubText = styled.h4`
  color: #c9c9c9;
  font-weight: 500;
`
const Barra = styled.div`
  width: 70px;
  height: 3px;
  border-radius: 10px;
  background-color: #f1ff00;
`
const StyledFlexTitles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 30px 0px;
  gap: 10px;
  @media (max-width: 536px) {
    margin: 0;
  }
`
const ContainerProject = styled.div`
  display: flex;
  @media (max-width: 1112px) {
    flex-direction: column;
  }
`
const ImgProjects = styled.img`
  width: 550px;
  height: 339px;
  border-radius: 10px 0px 0px 10px;
  @media (max-width: 1112px) {
    border-radius: 10px 10px 0px 10px;
  }
  @media (max-width: 578px) {
    width: 90%;
  }
  @media (max-width: 536px) {
    display: none;
  }
`
const ImgIcons = styled.img`
  padding: 1px;
`

const BoxAbout = styled.div`
  width: 500px;
  height: 310px;
  border-radius: 0px 10px 10px 0px;
  background: #111111;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1112px) {
    width: 521px;
    border-radius: 10px 0px 10px 10px;
  }
  @media (max-width: 578px) {
    width: 85%;
  }
  @media (max-width: 536px) {
    border-radius: 10px;
  }
  @media (max-width: 356px) {
    height: 340px;
  }
`
const StyledFlexTitleAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ButtonAlt = styled(Button)`
  background-color: #445503;
`
const BoxIcons = styled.div`
  width: 40px;
  height: 35px;
  background-color: #111111;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.3s ease;

  :hover {
    transform: translateY(-7px);
  }
`

export default function SectionThree({ ...props }) {
  const handleRedirect = (url) => {
    window.open(url, '_blank')
  }

  return (
    <Container {...props}>
      <StyledFlexTitles>
        <Title>Projetos</Title>
        <Barra />
        <SubText>Veja um pouco do meu conhecimento em meus projetos logo abaixo!</SubText>
      </StyledFlexTitles>

      {projects &&
        projects.map((project) => (
          <ContainerProject key={project.id}>
            <ImgProjects src={project.image} alt={project.title} />
            <BoxAbout>
              <StyledFlexTitleAbout>
                <TitleProject>{project.title}</TitleProject>
                <div>
                  {project.technologies.map((tech, index) => (
                    <ImgIcons key={index} src={tech} alt={`Technology ${index + 1}`} />
                  ))}
                </div>
              </StyledFlexTitleAbout>
              <Text>{project.description}</Text>
              <div style={{ display: 'flex', gap: '6px' }}>
                {project.liveUrl && (
                  <Button onClick={() => handleRedirect(project.liveUrl)}>Visitar projeto</Button>
                )}
                <ButtonAlt onClick={() => handleRedirect(project.repoUrl)}>
                  {'<Repositório />'}
                </ButtonAlt>
              </div>
            </BoxAbout>
          </ContainerProject>
        ))}

      <TextContact>Se você gostou do que viu, contate me por:</TextContact>
      <div style={{ display: 'flex', gap: '6px', padding: '15px 0px' }}>
        {contacts &&
          contacts.map((contact) => (
            <BoxIcons key={contact.id} onClick={() => handleRedirect(contact.url)}>
              <ImgIcons src={contact.icon} alt={contact.name} />
            </BoxIcons>
          ))}
      </div>
    </Container>
  )
}
