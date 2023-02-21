import { Link } from "react-router-dom"
import styled from "styled-components"
import {DownloadSimple} from "phosphor-react";
import PDF from '../assets/resume.pdf'


export function Navigation(){
  return(
    <Container>
      <Logo>
        Rodrigo<sup>DEV</sup>
      </Logo>
      <div>
      <Link to="/">Home</Link>
      <Link to="/about">Sobre mim</Link>
      <Link to="/project">Projetos</Link>
      </div>
      <Curriculo href={PDF} target="_blank">
        <DownloadSimple size={32} weight="light"/>
        Curriculo
      </Curriculo>
    </Container>
  )
}

const Container = styled.nav`
align-items: center;
display: flex;
font-size: 18px;
justify-content: space-around;
margin: 10px 0;
text-transform: uppercase;
width: 100%;
font-weight: 500;
flex-wrap: wrap;

div{
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 30px;
  margin: 20px 0;
}
`

const Logo = styled.p`
  text-transform: uppercase;
  font-size: 1.55rem;
`

export const Curriculo = styled.a`
display: flex;
align-items: center;
gap: 5px;
border: 1px solid grey;
border-radius: 5px;
padding: 10px;
width: fit-content;
`