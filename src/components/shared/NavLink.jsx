"use client";
import { BlogSubNav, ProjectsSubNav } from "@/data/navData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const NavLink = ({ item }) => {
  const activeRoute = usePathname();
  return (
    <div className="relative group">
      <Link
        href={`${item?.path}`}
        className={`px-[30px] py-[40px] text-white font-medium text-[18px] flex items-center gap-[8px] ${
          (activeRoute === "/" && "text-white") ||
          (activeRoute === `${item.path}` && "text-[#c9f31d]")
        }`}
      >
        <span
          className={`group-hover:text-[#c9f31d] relative group-hover:after:content-[''] group-hover:after:bg-[#c9f31d] group-hover:after:h-[3px] after:w-[0%] group-hover:after:left-0 group-hover:after:-bottom-[5px] group-hover:after:rounded-xl group-hover:after:absolute group-hover:after:w-[50%] group-hover:after:duration-700 ${
            (activeRoute === "/" && "text-white") ||
            (activeRoute === `${item.path}` &&
              "after:content-[''] after:bg-[#c9f31d] after:h-[3px] after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute after:w-[50%] after:duration-700")
          }`}
        >
          {item.title}
        </span>
        {item.title === "Projects" && (
          <IoIosArrowDown className="group-hover:rotate-[180deg] transition-all duration-200" />
        )}
        {item.title === "Blog" && (
          <IoIosArrowDown className="group-hover:rotate-[180deg] transition-all duration-200" />
        )}
      </Link>
      {item.title === "Projects" && (
        <div className="absolute top-[80px] left-[27px] hidden group-hover:block">
          <div className="w-[120px] h-[20px] bg-transparent"></div>
          <div className={`bg-lighter min-w-[250px] flex flex-col text-white`}>
            {ProjectsSubNav.map((item, index) => (
              <Link
                className={`w-[100%] px-[16px] py-[10px] border-t border-white border-opacity-10 ${
                  (activeRoute === "/" && "text-white") ||
                  (activeRoute === `/projects/${item.path}` && "text-primary")
                }`}
                href={`/projects/${item.path}`}
                key={index}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
      {item.title === "Blog" && (
        <div className="absolute top-[80px] left-[27px] hidden group-hover:block">
          <div className="w-[120px] h-[20px] bg-transparent"></div>
          <div className={`bg-lighter min-w-[250px] flex flex-col text-white`}>
            {BlogSubNav.map((item, index) => (
              <Link
                className="w-[100%] px-[16px] py-[10px] border-t border-gray-700"
                href={`/blog/${item.path}`}
                key={index}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavLink;
