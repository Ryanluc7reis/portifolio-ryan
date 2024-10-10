import styled from 'styled-components'

import NavBar from '../navigations/NavBar'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #252525;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const StyledFlexTitles = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 648px) {
    text-align: center;
    align-items: center;
  }
`
const Text = styled.h1`
  font-size: 25px;
  color: white;
  font-weight: 500;
`
const TextAlt = styled.h2`
  color: #ffff06;
  font-weight: bold;
`
const GradientText = styled.h1`
  font-size: 48px;
  font-weight: bold;
  background: linear-gradient(45deg, #ffff06, #8f9900);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 375px) {
    font-size: 38px;
  }
`
const StyledFlexIcons = styled.div`
  display: flex;
  gap: 8px;
  margin: 9px 0px;
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
const ImgIcons = styled.img`
  padding: 1px;
`
const ImgDeveloper = styled.img`
  width: 470px;
  height: 470px;
  border-radius: 55px;
  box-shadow: 0 8px 8px -4px rgba(61, 61, 25, 0.6);
  @media (max-width: 1162px) {
    display: none;
  }
`
export default function SectionOne({ ...props }) {
  const handleRedirect = (url) => {
    window.open(url, '_blank')
  }

  return (
    <Container {...props}>
      <NavBar />
      <StyledFlexTitles>
        <Text>Olá, Eu sou Ryan Lucas</Text>
        <GradientText> Software Developer</GradientText>
        <GradientText> Full-stack</GradientText>
        <Text>Contate me</Text>
        <StyledFlexIcons>
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
          <BoxIcons onClick={() => handleRedirect('mailto:ryanluc.dev@gmail.com')}>
            <ImgIcons src="/email.png" />
          </BoxIcons>
          <BoxIcons
            onClick={() =>
              handleRedirect(
                'https://docs.google.com/document/d/1CzeRLPgliU16iTsU4cqlb1c_15ZGMUc9bFrC0UmXAFA/edit?usp=sharing'
              )
            }
          >
            <TextAlt>cv</TextAlt>
          </BoxIcons>
        </StyledFlexIcons>
      </StyledFlexTitles>
      <ImgDeveloper src="/dev.png" />
    </Container>
  )
}
