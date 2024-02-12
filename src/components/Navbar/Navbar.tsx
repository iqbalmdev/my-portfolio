import React from "react";
import "./navbarStyles.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiProjectorFill } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
interface NavIconProps {
  icon?: Element;
  name?: string;
}
const Navbar = () => {
  const navIcons = [
    {
      icon: <AiOutlineHome />,
      name: "",
    },
    {
      icon: <AiOutlineUser />,
      name: "about",
    },
    {
      icon: <BiBook />,
      name: "experience",
    },
    {
      icon: <RiProjectorFill />,
      name: "projects",
    },
    {
      icon: <AiOutlineMessage />,
      name: "contact",
    },
  ];
  return (
    <nav>
      {navIcons?.map((data: any) => {
        return (
          <>
            <a href={`#${data.name}`}>{data?.icon}</a>
          </>
        );
      })}
    </nav>
  );
};

export default Navbar;
