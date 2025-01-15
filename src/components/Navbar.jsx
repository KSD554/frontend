import { MdAddHome, MdHomeWork, MdPermContactCalendar } from "react-icons/md"
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import { NavLink } from "react-router-dom"


const Navbar = ({containerStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "active-link flexCenter gap-x-1 rounded-full px-2 py-1"
            : "flexCenter gap-x-1 rounded-full px-2 py-1"
        }
      >
        <MdHomeWork />
        <div className="">Accueil</div>
      </NavLink>
      <NavLink
        to={"/listing"}
        className={({ isActive }) =>
          isActive
            ? "active-link flexCenter gap-x-1 rounded-full px-2 py-1"
            : "flexCenter gap-x-1 rounded-full px-2 py-1"
        }
      >
        <RiCheckboxMultipleBlankFill />
        <div className="">Catalogue</div>
      </NavLink>
      <NavLink
        to={"/mailto:inquiries.kouassisadok3@gmail.com"}
        className={"flexCenter gap-x-1 rounded-full px-2 py-1 cursor-pointer"}
      >
        <MdPermContactCalendar />
        <div className="">Contact</div>
      </NavLink>
      <NavLink
        to={"/addproperty"}
        className={"flexCenter gap-x-1 rounded-full px-2 py-1 cursor-pointer"}
      >
        <MdAddHome />
        <div className="">Ajouter un bien</div>
      </NavLink>
    </nav>
  );
}

export default Navbar
