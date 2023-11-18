import { ReactNode } from "react";
import { Link } from "react-scroll";

interface NavLinkProps {
  children: ReactNode;
  to: string;
  offset?: number;
  mobileMenu?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  children,
  to,
  offset = -50,
  mobileMenu = false,
}) => {
  const className = mobileMenu
    ? "text-lg text-black hover:text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] w-full text-center"
    : "text-lg lg:text-xl text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] hover:bg-clip-text hover:text-transparent";

  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      duration={1000}
      className={className}
    >
      {children}
    </Link>
  );
};

export default NavLink;
