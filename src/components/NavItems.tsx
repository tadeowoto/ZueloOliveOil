import { NavLinks } from "../data/data";

const NavItems = () => {
  return (
    <ul className="flex items-center justify-center gap-14">
      {NavLinks.map((link) => (
        <li className="font-bold text-primary">
          <a href={link.url} key={link.id} className="hover:text-quinary hover:transition-all hover:ease-in-out hover:duration-200">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
