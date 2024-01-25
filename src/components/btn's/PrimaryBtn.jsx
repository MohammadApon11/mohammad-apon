import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const PrimaryBtn = ({ to, children }) => {
  return (
    <Link href={to}>
      <button className="font-semibold rounded-[15px] flex items-center gap-[2px] bg-primary px-[30px] py-[13px] text-black text-[18px] group">
        {children} <MdKeyboardArrowRight className="group-hover:translate-x-[2px] transition-all duration-500" />
      </button>
    </Link>
  );
};

export default PrimaryBtn;
