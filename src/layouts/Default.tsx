import { Outlet } from "react-router-dom";
import { Navigation } from "../Components/Navigation";

export function Default(){
  return(
    <div>    
      <Navigation/>
      <div>
      <Outlet/>

      </div>
    </div>
  )
}