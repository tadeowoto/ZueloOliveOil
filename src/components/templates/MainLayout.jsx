
import { Footer } from "../organisms/Footer";
import { NavBar } from "../organisms/NavBar";
export function MainLayout ( { children } ) {

    return(
        <section className="bg-gray-500">
            <NavBar />
            {children}
            <Footer />
        </section>
    )
}