import { imagesData } from "../data/imagesData";
import ZueloLogo from "./ZueloLogo";
import NavItems from "./NavItems";

const MainNav = () => {
  return (
    <div className="absolute z-10 w-full">
      <nav className="w-full h-16 flex justify-between items-center bg-tramsparent">
        <div className="flex items-center ml-4">
          <ZueloLogo url={imagesData[0].url} alt="Logo Blanco" />
        </div>
        <div className="">
          <NavItems />
        </div>
        <div className="flex items-center mr-4">
          <ZueloLogo url={imagesData[1].url} alt="Logo Zuelo" />
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
