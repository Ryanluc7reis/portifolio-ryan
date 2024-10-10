import styled from 'styled-components'

import Button from '../inputs/Button'

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
        <Title> Projetos</Title>
        <Barra />
        <SubText> Veja um pouco do meu conhecimento em meus projetos logo abaixo !</SubText>
      </StyledFlexTitles>

      <ContainerProject>
        <ImgProjects src="projeto-cleaner2.jpg" />
        <BoxAbout>
          <StyledFlexTitleAbout>
            <TitleProject>UpCleaner</TitleProject>
            <div>
              <ImgIcons src="/js.png" />
              <ImgIcons src="/react.png" />
              <ImgIcons src="/nodejs.png" />
              <ImgIcons src="/mongodb.png" />
              <ImgIcons src="/git.png" />
            </div>
          </StyledFlexTitleAbout>
          <Text>
            Foi construído um site que automatiza a agenda de uma rede de faxineiros avaliados, em
            que permite ao cliente agendar a sua limpeza com o faxineiro da sua preferência e até
            mesmo avaliá-lo após o serviço, usando React.Js + Styled-components para construir o
            front-end, Next.Js para arquitetura, Node.Js + Express.Js no back-end, MongoDB para
            banco de dados.
          </Text>
          <div style={{ display: 'flex', gap: '6px' }}>
            <Button onClick={() => handleRedirect('https://cleaner-project24.vercel.app/')}>
              Visitar projeto
            </Button>
            <ButtonAlt
              onClick={() => handleRedirect('https://github.com/Ryanluc7reis/cleaner-project24')}
            >
              {'<Repositório />'}
            </ButtonAlt>
          </div>
        </BoxAbout>
      </ContainerProject>
      <ContainerProject>
        <ImgProjects src="visitcard.png" />
        <BoxAbout>
          <StyledFlexTitleAbout>
            <TitleProject>Hello visit</TitleProject>
            <div>
              <ImgIcons src="/typescript.png" />
              <ImgIcons src="/js.png" />
              <ImgIcons src="/react.png" />
              <ImgIcons src="/nodejs.png" />
              <ImgIcons src="/mongodb.png" />
              <ImgIcons src="/git.png" />
              <ImgIcons src="/docker.png" />
            </div>
          </StyledFlexTitleAbout>
          <Text>
            Foi contruído um cartão de visita que te permite criar um sobre sua empresa e anexar
            URLs importantes sobre a empresa ou sobre o usuário, usando Docker para o
            desenvolvimento, React.Js + Styled-components para construir o front-end, Next.Js para
            arquitetura, Node.Ts + Express no back-end, MongoDB para banco de dados.
          </Text>
          <div style={{ display: 'flex', gap: '6px' }}>
            <Button onClick={() => handleRedirect('https://visit-card-three.vercel.app/ryan1')}>
              Visitar projeto
            </Button>
            <ButtonAlt onClick={() => handleRedirect('https://github.com/Ryanluc7reis/visit-card')}>
              {'<Repositório />'}
            </ButtonAlt>
          </div>
        </BoxAbout>
      </ContainerProject>
      <ContainerProject>
        <ImgProjects src="searching.png" />
        <BoxAbout>
          <StyledFlexTitleAbout>
            <TitleProject>Searching users</TitleProject>
            <div>
              <ImgIcons src="/typescript.png" />
              <ImgIcons src="/react.png" />
              <ImgIcons src="/git.png" />
              <ImgIcons src="/docker.png" />
            </div>
          </StyledFlexTitleAbout>
          <Text>
            Foi contruído uma leitura de mock dados com um campo de pesquisa filtrada de acordo com
            nome ou email, e também te oferece uma média de idade dos dados encontrado, usando
            Docker para o desenvolvimento, React.Ts + Styled-components para construir o front-end e
            Next para arquitetura.
          </Text>
          <div style={{ display: 'flex', gap: '6px' }}>
            <ButtonAlt
              onClick={() => handleRedirect('https://github.com/Ryanluc7reis/searching-app')}
            >
              {'<Repositório />'}
            </ButtonAlt>
          </div>
        </BoxAbout>
      </ContainerProject>
      <ContainerProject>
        <ImgProjects src="notes.png" />
        <BoxAbout>
          <StyledFlexTitleAbout>
            <TitleProject>GambNotes</TitleProject>
            <div>
              <ImgIcons src="/js.png" />
              <ImgIcons src="/react.png" />
              <ImgIcons src="/nodejs.png" />
              <ImgIcons src="/mongodb.png" />
              <ImgIcons src="/git.png" />
              <ImgIcons src="/docker.png" />
            </div>
          </StyledFlexTitleAbout>
          <Text>
            Foi contruído um bloco de notas que te permite definir o titulo e tarefa, trocar de cor
            as notas, favoritar nota e anexar aquivos, usando Docker para o desenvolvimento,
            React.Js + Styled-components para construir o front-end, Webpack para arquitetura,
            Node.Js + Express.Js no back-end, MongoDB para banco de dados.
          </Text>
          <div style={{ display: 'flex', gap: '6px' }}>
            <Button onClick={() => handleRedirect('https://gambnotes-ryanlucas.vercel.app/')}>
              Visitar projeto
            </Button>
            <ButtonAlt
              onClick={() =>
                handleRedirect('https://github.com/Ryanluc7reis/corelab-web-challenge')
              }
            >
              {'<Repositório />'}
            </ButtonAlt>
          </div>
        </BoxAbout>
      </ContainerProject>
      <ContainerProject>
        <ImgProjects src="projeto-cassidev.jpg" />
        <BoxAbout>
          <StyledFlexTitleAbout>
            <TitleProject>Classifi Dev</TitleProject>
            <div>
              <ImgIcons src="/js.png" />
              <ImgIcons src="/react.png" />
              <ImgIcons src="/nodejs.png" />
              <ImgIcons src="/mongodb.png" />
              <ImgIcons src="/git.png" />
            </div>
          </StyledFlexTitleAbout>
          <Text>
            Foi construído um site que te permite anunciar qualquer tipo de produto à venda de seu
            interesse, usando React.Js + Styled-components para construir o front-end, Next.Js para
            arquitetura, NodeJs + Express.Js no backend, MongoDB para banco de dados.
          </Text>
          <div style={{ display: 'flex', gap: '6px', paddingTop: '20px' }}>
            <Button onClick={() => handleRedirect('https://desafio-classidev-ten.vercel.app/')}>
              Visitar projeto
            </Button>
            <ButtonAlt
              onClick={() => handleRedirect('https://github.com/Ryanluc7reis/desafio-classidev')}
            >
              {'<Repositório />'}
            </ButtonAlt>
          </div>
        </BoxAbout>
      </ContainerProject>
      <ContainerProject>
        <ImgProjects src="socialdev5.jpg" />
        <BoxAbout>
          <StyledFlexTitleAbout>
            <TitleProject>Social Dev</TitleProject>
            <div>
              <ImgIcons src="/js.png" />
              <ImgIcons src="/react.png" />
              <ImgIcons src="/nodejs.png" />
              <ImgIcons src="/mongodb.png" />
              <ImgIcons src="/git.png" />
            </div>
          </StyledFlexTitleAbout>
          <Text>
            Foi construída uma rede social que permite que amigos conversem entre si por meio de
            postagens, usando React.Js + Styled-components para construir o front-end, Next.Js para
            arquitetura, Node.Js + Express.Js no backend, MongoDB para banco de dados.
          </Text>
          <div style={{ display: 'flex', gap: '6px', paddingTop: '20px' }}>
            <Button onClick={() => handleRedirect('https://social-dev-wine.vercel.app/login')}>
              Visitar projeto
            </Button>
            <ButtonAlt
              onClick={() => handleRedirect('https://github.com/Ryanluc7reis/Projeto.social-dev')}
            >
              {'<Repositório />'}
            </ButtonAlt>
          </div>
        </BoxAbout>
      </ContainerProject>

      <ContainerProject>
        <ImgProjects src="climadev2.jpg" />
        <BoxAbout>
          <StyledFlexTitleAbout>
            <TitleProject>Clima Dev</TitleProject>
            <div>
              <ImgIcons src="/react.png" />
              <ImgIcons src="/js.png" />
              <ImgIcons src="/git.png" />
            </div>
          </StyledFlexTitleAbout>
          <Text>
            Foi construído um site que oferece a previsão do tempo atual das próximas 6 horas, 3
            horas e 1 hora de todo o mundo em tempo real, usando ReactJs + Styled-components para
            construir a parte do front-end, Next.Js para arquitetura, fetch/router foi usado para
            integrar a API OpenWeatherMap, assim, treinar habilidades usando React Hooks como
            useContext, useState e useEffect.
          </Text>
          <div style={{ display: 'flex', gap: '6px', paddingTop: '5px' }}>
            <Button
              onClick={() => handleRedirect('https://clima-dev-devchallenge1-nine.vercel.app/')}
            >
              Visitar projeto
            </Button>
            <ButtonAlt
              onClick={() => handleRedirect('https://github.com/Ryanluc7reis/Projeto.Clima-Dev')}
            >
              {'<Repositório />'}
            </ButtonAlt>
          </div>
        </BoxAbout>
      </ContainerProject>
      <ContainerProject>
        <ImgProjects src="jogodavelha3.jpg" />
        <BoxAbout>
          <StyledFlexTitleAbout>
            <TitleProject>Jogo da velha</TitleProject>
            <div>
              <ImgIcons src="/react.png" />
              <ImgIcons src="/js.png" />
              <ImgIcons src="/css.png" />
              <ImgIcons src="/git.png" />
            </div>
          </StyledFlexTitleAbout>
          <Text>
            Foi construído um jogo da velha virtual com placar, usando ReactJs e CSS para estilizar.
            Criado com o objetivo de treinar a manipulação de dados.
          </Text>
          <div style={{ display: 'flex', gap: '6px', paddingTop: '65px' }}>
            <Button onClick={() => handleRedirect('https://react-jogo-da-velha-orpin.vercel.app/')}>
              Visitar projeto
            </Button>
            <ButtonAlt
              onClick={() =>
                handleRedirect('https://github.com/Ryanluc7reis/Projeto.react-jogo-da-velha')
              }
            >
              {'<Repositório />'}
            </ButtonAlt>
          </div>
        </BoxAbout>
      </ContainerProject>

      <TextContact> Se você gostou do que viu, contate me por:</TextContact>
      <div style={{ display: 'flex', gap: '6px', padding: '15px 0px' }}>
        <BoxIcons onClick={() => handleRedirect('https://github.com/Ryanluc7reis')}>
          <ImgIcons src="/github-yellow.png" />
        </BoxIcons>
        <BoxIcons onClick={() => handleRedirect('https://www.linkedin.com/in/ryanluc7reis/')}>
          <ImgIcons src="/linkedin.png" />
        </BoxIcons>
        <BoxIcons
          onClick={() =>
            handleRedirect(
              'https://wa.me/5534998069617?text=Oi%20Ryan,tenho%20uma%20oportunidade%20para%20voc%C3%AA!'
            )
          }
        >
          <ImgIcons src="/wpp.png" />
        </BoxIcons>
        <BoxIcons
          onClick={() =>
            handleRedirect(
              'mailto:ryan.dev18@outlook.com?subject=Ol%C3%A1%20Ryan%20%2Ctenho%20uma%20oportunidade%20de%20vaga%20para%20voc%C3%AA!'
            )
          }
        >
          <ImgIcons src="/email.png" />
        </BoxIcons>
      </div>
    </Container>
  )
}
