import React from "react";
import BigSectionWrapper from "../wrapper/BigSectionWrapper";
import Image from "next/image";
import logo from "../../assets/landing/logo.png";
import { navData } from "@/data/navData";
import { HiBars3BottomRight } from "react-icons/hi2";
import NavLink from "./NavLink";
import Link from "next/link";

const NavBar = () => {
  return (
    <BigSectionWrapper>
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Image src={logo} width={150} height={30} alt="Logo" />
        </Link>
        <div className="flex items-center">
          {navData.map((item, index) => (
            <NavLink key={index} item={item} />
          ))}
        </div>
        <div className="bg-primary w-[50px] h-[50px] rounded-[50%] flex items-center justify-center">
          <HiBars3BottomRight className="text-[30px] text-black" />
        </div>
      </div>
    </BigSectionWrapper>
  );
};

export default NavBar;
