
import { NavAnchor } from "../atoms/NavAnchor"

export function NavItem ( { href, text } ){

    return(
        <li>
            <NavAnchor href={href} text={text} />
        </li>
    )
}