import Profile from '../assets/profile1.png'
import {LinkedinLogo, GithubLogo, EnvelopeSimple, DownloadSimple} from "phosphor-react";
import styled from 'styled-components';

export function About(){
  return(
    <Container>
      <TitleSection>Sobre Mim</TitleSection>
      
        <HeaderAbout>
        <img src={Profile} alt=""/>
        
        <ContainerLinks>
        <a href="https://www.linkedin.com/in/rodrigomendes-/" target="_blank">
        <LinkedinLogo size={40} weight="light"/>
        
        </a>

        <a href="https://github.com/roodrigoomendes" target="_blank">
        <GithubLogo size={40} weight="light" />
        </a>

        <a href="mailto:roodrigoomendessilva@gmail.com" target="_blank">
        <EnvelopeSimple size={40} weight="light" />
        </a>
        </ContainerLinks>
        
        </HeaderAbout>
      
      <Description>
        <p>
          Me Chamo <span>Rodrigo Mendes</span>, sou <span>desenvolvedor com foco em front-end</span>, 
          eu tenho um amplo conhecimento de linguagens de programação, como <span>JavaScript</span>,
          e frameworks como o <span>Reactjs</span>, estilizaçoes com <span>TailwindCSS e Styled Components</span>,
          que me permitem criar experiências web dinâmicas e visualmente atraentes.
          Tenho a habilidade de garantir a responsividade mobile e estou sempre atualizando 
          minhas habilidades e conhecimentos.
        </p>
        <p>
          Sou um desenvolvedor autodidata e auto gerenciado, capaz de trabalhar de forma 
          independente e em equipe para resolver problemas e criar soluções. 
          Além disso, estou sempre em busca de novas habilidades com a tecnologias para expandir
          meu conhecimento e me tornar um desenvolvedor ainda melhor. Se você está procurando 
          um desenvolvedor web com um forte conjunto de habilidades técnicas e um compromisso 
          com a excelência, estou ansioso para trabalhar em projetos emocionantes e desafiadores.
        </p>
      </Description>
    
    </Container>
  )
}

const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;

`
const Description = styled.div`
flex-wrap: wrap;
text-align: justify;
max-width: 500px;
margin: 20px 0;

>p{
  text-indent: 30px;
  font-weight: 100;
  font-size: 18px;
  letter-spacing: 1px;
  margin: 5px 0;
  
  span{
    font-weight: 300;
  }
}
`

export const TitleSection = styled.h1`
font-size: 1.50rem;
font-weight: 600;
text-transform: uppercase;
margin: 10px 0;
background-image: var(--Gradient);

background-clip: text;
-webkit-background-clip: text; 
-webkit-text-fill-color: transparent;
color: white;
`
const HeaderAbout = styled.div`
  
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  >img{
    width: 50%;
    border-radius: 20px;
  }
`

const ContainerLinks = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
height: 150px;
margin: 5px;
`