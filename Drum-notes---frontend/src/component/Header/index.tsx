import { useAuth } from "../../Hooks/useAuth";

import { GiDrum } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";
import githubIcon from '../../assets/icon_github.svg'
import instagramIcon from '../../assets/icon_instagram.svg'
import exitIcon from '../../assets/exitIcon.svg'

export const Header = () => {
  const { loggout } = useAuth()

  function handleLoggout () {
    loggout()
  }

  return (
    <>
      <header className="bg-custom-dark w-full h-[3.5rem]">
        <div className="mx-auto w-[90%] h-[3.5rem] flex justify-between items-center">
          <Link to='/' className="h-9 w-9 flex">
           <GiDrum size={35} color="#fff" />
           <p className="absolute px-9 py-[.5rem] font-sans font-[500] text-xl text-[#fff]">Drum <span>Notes</span></p>
          </Link>
          <div className="flex gap-4 py-[.4rem]">
           <a href="https://github.com/D1ogooo" target='_blank'>
            <img src={githubIcon} alt="" className="cursor-pointer h-8"/>
           </a>
           <a href="https://www.instagram.com/diogoo_0202/" target='_blank'>
            <img src={instagramIcon} alt="" className="cursor-pointer h-8"/>
           </a>
            <img src={exitIcon} alt=""  onClick={handleLoggout} className="cursor-pointer h-8"/>
          </div>
        </div>
      </header>
    </>
  );
};