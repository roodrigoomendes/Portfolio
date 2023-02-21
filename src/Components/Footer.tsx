import styled from "styled-components"
import Profile from "../assets/profile.png"

export function Footer(){
  return(
    <Container>

      <img src={Profile} alt="" />

      <div>
      <p>Tem algo em mente?</p>
      <p>vamos construí-lo juntos.</p>
      
      </div>
    </Container>
  )
}

const Container = styled.footer`
width: 100%;
height: 30vh;
background-color: black;
color: white;
display: flex;
align-items: center;
justify-content: space-evenly;
font-size: 25px;



img{
  width: 150px;
  border-radius: 50%;
}

div{
  display: flex;
  flex-direction: column;

  p{
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
  hsl(150deg 94% 52%) 100%);

  background-clip: text;
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent;
  color: white;

  }


}

`

