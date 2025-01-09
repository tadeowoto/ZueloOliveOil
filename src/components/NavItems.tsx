import { NavLinks } from "../data/data"



const NavItems = () => {
  return (
    <ul>
        {
        NavLinks.map((link) => (
            <li>
                <a href={link.url} key={link.id}>
                    {link.text}
                </a>
            </li>
        ))
        }
    </ul>
  )
}

export default NavItems