
import { WrapAnchor } from "../atoms/WrapAnchor"

export function NavItem ( { href, text } ){

    return(
        <li>
            <WrapAnchor href={href} text={text} />
        </li>
    )
}