import Dropdown from "../components/ui/Dropdown";
import AvatarDemo from "./ui/Avatar";
import Link from "next/link";
import React from "react";
import { BeatLoader } from "react-spinners";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-[1100px] mx-auto flex items-center justify-between w-full">
        <Link href="/">
          <h1 className="text-2xl font-semibold">SKULDB</h1>
        </Link>

        <div className="flex items-center">
          <AvatarDemo />
          <Dropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
