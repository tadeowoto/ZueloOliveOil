type Props = {
    url: string,
    alt: string,
}

const ZueloLogoFooter = ( { url, alt }: Props ) => {
  return (
    <img src={url} alt={alt} className="w-32" />
  )
}

export default ZueloLogoFooter