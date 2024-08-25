import { useAuth } from "../../Hooks/useAuth";
import { GiDrum } from "react-icons/gi";
import { Link } from "react-router-dom";
import githubIcon from '../../assets/icon_github.svg';
import instagramIcon from '../../assets/icon_instagram.svg';
import exitIcon from '../../assets/exitIcon.svg';

export const Header = () => {
  const { loggout } = useAuth();

  function handleLoggout() {
    loggout();
  }

  return (
    <>
      <header className="bg-custom-dark w-full h-[3.5rem]">
        <div className="mx-auto w-[90%] h-[3.5rem] flex justify-between items-center">
          <Link to='/' className="h-9 w-9 flex">
            <GiDrum size={35} color="#fff" />
            <p className="absolute px-9 py-[.5rem] font-sans font-[500] text-xl text-[#fff]">
              Drum <span style={{ color: '#22C55E' }}>Notes</span>
            </p>
          </Link>
          <div className="flex gap-4 py-[.4rem]">
            <a href="https://github.com/D1ogooo" target='_blank' rel="noopener noreferrer">
              <img 
                src={githubIcon} 
                alt="GitHub" 
                className="cursor-pointer h-8 filter invert" 
              />
            </a>
            <a href="https://www.instagram.com/diogoo_0202/" target='_blank' rel="noopener noreferrer">
              <img 
                src={instagramIcon} 
                alt="Instagram" 
                className="cursor-pointer h-8 filter invert" 
              />
            </a>
            <img 
              src={exitIcon} 
              alt="Logout" 
              onClick={handleLoggout} 
              className="cursor-pointer h-8 filter invert" 
            />
          </div>
        </div>
      </header>
    </>
  );
};
