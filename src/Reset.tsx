import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

:root{
  --background: #000000
  --background-banner: #C7D0D9;
  --background-card: #c7d0d990;
  --Font: #ffffff;
  --Gradient:linear-gradient(
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
}

body{
  background-color: #000000;
  color: #ffffff;
}


*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
  font-family: 'Poppins', sans-serif;
}


li{
  list-style: none;
}

a{
  text-decoration:none;
  color:grey;

  :hover{
  background-image: var(--Gradient);
  background-clip: text;
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent;
  color: white;
  
  }
}

`