import ZueloLogoFooter from "./ZueloLogoFooter"
import { imagesData } from "../data/imagesData"

const MainFooter = () => {
  return (

    <footer className="w-full h-40 bg-mainColor text-fontColor p-5 box-border">
        <div className="w-full h-3/4 flex items-center justify-center">
            <ZueloLogoFooter url={imagesData[0].url} alt="Logo Blanco" />
        </div>
        <div className="w-full h-1/4 flex items-center justify-center border-t-[0.5px] border-teal-50">
            <p className="text-sm mt-4">2021 Familia Zuccardi. | Creado con fines educativos por <a href="https://github.com/tadeowoto" target="_blank" rel="noreferrer" className="font-bold">tadeowoto</a></p>
        </div>
    </footer>
  )
}

export default MainFooter