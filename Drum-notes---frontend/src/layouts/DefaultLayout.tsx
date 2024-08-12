import { Outlet } from "react-router-dom";
import { Header } from "../component/Header/index";

export const DefaultLayout = () => {
  return (
   <>
    <Header/>
    <Outlet/>
   </>
  )
}