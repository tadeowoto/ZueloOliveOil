import { imagesData } from "../data/imagesData"
import ZueloLogo from "./ZueloLogo"
import NavItems from "./NavItems"

const MainNav = () => {
  return (
    <nav>
        <div>
            <ZueloLogo url={imagesData[0].url} alt="Logo Blanco" />
        </div>
        <div>
            <NavItems />
        </div>
        <div>
            <ZueloLogo url={imagesData[1].url} alt="Logo Zuelo" />
        </div>        
    </nav>
  )
}

export default MainNav