import styled from "styled-components"
import { TitleSection } from "./About";
import { useAPI } from "../hooks/useAPI";
import {FileCode} from "phosphor-react";


type Repository = {
  name: string;
  description: string;
  html_url: string;
}

export default function Project(){

  const {data: repositories , isloading} = 
  useAPI<Repository[]>('users/roodrigoomendes/repos')

  
  return(
    <Container>
      <TitleSection>Projetos</TitleSection>
      <ListaProject>
        
        {isloading && <p>Carregando ...</p>}


        {repositories?.map(repo =>{
          return(
            <li key={repo.name}>
              <a href={repo.html_url} target="_blank" >
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <div>
                <FileCode size={30} weight="light" /> 
                </div>
              </a>
            </li>
          )
        }
        )}
      </ListaProject>
    </Container>
  )
}

const Container = styled.div`
align-items: center;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;

`
const ListaProject = styled.ul`
display: flex;
align-items: stretch;
justify-content: center;
flex-wrap: wrap;

li{

  border-image: var(--Gradient) 1;
  border-width: 2px;
  border-style: solid;

  margin: 15px;
  width: 350px;
  justify-content: baseline;
  text-align: justify;


  
  a{
    padding: 20px 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    h3{
      font-weight: 500;
      margin: 0 0 10px;
    }

    div{
      display: flex;
      flex-direction: column;
      text-align: end;
      height: 100%;
      align-items: flex-end;
      justify-content: end;
    }
  }
  
}
`