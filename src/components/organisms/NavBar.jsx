
import { NavItem } from "../molecules/NavItem"
import { ZueloLogo } from "../atoms/ZueloLogo"

export function NavBar () {

    return(
        <nav>
            <ZueloLogo />
            <div>
                <ul>
                    <NavItem href="/" text="Products" />
                    <NavItem href="/about" text="About Us" />
                </ul>
            </div>
        </nav>
    )

}