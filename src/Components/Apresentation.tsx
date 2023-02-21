import styled from 'styled-components';
import {LinkedinLogo, GithubLogo, EnvelopeSimple, DownloadSimple} from "phosphor-react";
import { Curriculo } from './Navigation';
import PDF from '../assets/resume.pdf'

export function Apresentation(){
  return(
    <Container>
      
      <div>
      <Title>Rodrigo Mendes</Title>
      <Subtitle>Desenvolvedor</Subtitle>
      </div>

      <Curriculo href={PDF} target="_blank">
        <DownloadSimple size={32} weight="light"/>
        Curriculo
      </Curriculo>

      <ContainerLinks>
        <a href="https://www.linkedin.com/in/rodrigomendes-/" target="_blank">
        <LinkedinLogo size={32} weight="light"/>
        Linkedin
        </a>

        <a href="https://github.com/roodrigoomendes" target="_blank">
        <GithubLogo size={32} weight="light" />
        Github
        </a>

        <a href="mailto:roodrigoomendessilva@gmail.com" target="_blank">
        <EnvelopeSimple size={32} weight="light" />
        Email
        </a>
      </ContainerLinks>

    </Container>
  )
}

const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
height: 90vh;

div{
  text-align: center;
}
`

const Title = styled.p`
font-size: 5rem;
font-size: 3.75rem;  

background-image: linear-gradient(
  45deg,
  hsl(206deg 100% 26%) 0%,
  hsl(204deg 100% 31%) 8%,
  hsl(201deg 100% 34%) 18%,
  hsl(197deg 100% 37%) 28%,
  hsl(193deg 100% 39%) 39%,
  hsl(186deg 100% 39%) 51%,
  hsl(178deg 100% 38%) 62%,
  hsl(169deg 100% 42%) 75%,
  hsl(160deg 100% 45%) 87%,
  hsl(150deg 94% 52%) 100%
);

background-clip: text;
-webkit-background-clip: text; 
-webkit-text-fill-color: transparent;
color: white;
`

const Subtitle = styled.p`
font-size: 1.875rem;
font-weight: 200;

`

const ContainerLinks = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;

a{
  display: flex;
  align-items: center;
  gap: 5px;
}
`
