
type Props = {
    url: string,
    alt: string,
}

const ZueloLogo = ( { url, alt }: Props ) => {
  return (
    <img src={url} alt={alt} />
  )
}

export default ZueloLogo