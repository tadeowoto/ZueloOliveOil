import LandingImage from "./LandingImage"

const LandingText = () => {
  return (
    <div className="w-full h-screen">
      <LandingImage />
      <div className="relative top-80 ml-16">
        <h1 className="text-6xl font-medium font-playfair -tracking-tight text-fontColor">Somos <br /> Zuelo</h1>
      </div>
    </div>
  )
}

export default LandingText