import styled from 'styled-components'
import Button from '../inputs/Button'
import { projects } from '../../data/projects'
import { contacts } from '../../data/contacts'
import { useState } from 'react'

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
  height: auto;
  min-height: 310px;
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
    min-height: 340px;
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

const ImplementationButton = styled.h4`
  color: #cfc313;
  text-decoration: underline;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    color: #636e72;
  }
`

const ImplementationLinksContainer = styled.div`
  max-height: ${(props) => (props.isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  margin-top: ${(props) => (props.isOpen ? '10px' : '0')};
`

const LinksList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const LinkItem = styled.li`
  margin: 10px 0;
`

const StyledLink = styled.a`
  color: #f1ff00;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background-color: rgba(241, 255, 0, 0.1);
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(241, 255, 0, 0.2);
    transform: translateX(5px);
  }

  &:before {
    content: '→';
    margin-right: 8px;
  }
`

export default function SectionThree({ ...props }) {
  const [openImplementations, setOpenImplementations] = useState({})

  const handleRedirect = (url) => {
    window.open(url, '_blank')
  }

  const toggleImplementations = (projectId) => {
    setOpenImplementations((prev) => ({
      ...prev,
      [projectId]: !prev[projectId]
    }))
  }

  return (
    <Container {...props}>
      <StyledFlexTitles>
        <Title>Projetos</Title>
        <Barra />
        <SubText>
          Veja um pouco do meu conhecimento com projetos e experiências descritas logo abaixo!
        </SubText>
      </StyledFlexTitles>

      {projects &&
        projects.map((project) => (
          <ContainerProject key={project.id}>
            <ImgProjects src={project.image} alt={project.title} />
            <BoxAbout>
              <StyledFlexTitleAbout>
                <TitleProject>{project.title}</TitleProject>
                <div>
                  {project.technologies?.map((tech, index) =>
                    tech === '/azure.png' ? (
                      <ImgIcons
                        key={index}
                        src={tech}
                        alt={`Technology ${index + 1}`}
                        style={{ width: '20px', height: '20px' }}
                      />
                    ) : (
                      <ImgIcons key={index} src={tech} alt={`Technology ${index + 1}`} />
                    )
                  )}
                </div>
              </StyledFlexTitleAbout>
              <Text>{project.description}</Text>
              <div>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {project.liveUrl && (
                    <Button onClick={() => handleRedirect(project.liveUrl)}>Visitar projeto</Button>
                  )}

                  <ButtonAlt onClick={() => handleRedirect(project.repoUrl)}>
                    {'<Repositório />'}
                  </ButtonAlt>
                </div>

                {project.implementations && project.implementations.length > 0 && (
                  <>
                    <ImplementationButton onClick={() => toggleImplementations(project.id)}>
                      {openImplementations[project.id]
                        ? 'Ocultar implementações'
                        : 'Mostrar implementações ->'}
                    </ImplementationButton>

                    <ImplementationLinksContainer isOpen={openImplementations[project.id]}>
                      <LinksList>
                        {project.implementations.map((implementation, index) => (
                          <LinkItem key={index}>
                            <StyledLink
                              href={implementation.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {implementation.title}
                            </StyledLink>
                          </LinkItem>
                        ))}
                      </LinksList>
                    </ImplementationLinksContainer>
                  </>
                )}
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
