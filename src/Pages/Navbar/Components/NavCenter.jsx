import { NavLink } from "react-router-dom";

const NavLinks = [
  { id: 1, link: "Home", path: "/" },
  { id: 2, link: "Services", path: "/services" },
  { id: 3, link: "Feature", path: "/featured" },
  { id: 4, link: "Product", path: "/product" },
  { id: 5, link: "Testimonial", path: "/testimonial" },
];

const NavCenter = () => {
  return (
    <div className="hidden items-center gap-8 lg:flex">
      {NavLinks.map((navlink) => (
        <NavLink
          to={navlink.path}
          className={({ isActive }) =>
            isActive
              ? "font-sans text-lg font-semibold text-black"
              : `font-sans text-lg font-regular text-gray-500 hover:text-black transition-colors duration-300 ease-linear `
          }
          key={navlink.id}
        >
          {navlink.link}
        </NavLink>
      ))}
    </div>
  );
};

export default NavCenter;
