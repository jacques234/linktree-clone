import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsPlus } from "react-icons/bs";

export const TopBar = () => {
  const pathName= usePathname();
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center py-4 px-28 border-b-[1px] border-gray-400 bg-white">
      <Link href={'/'} className="font-bold text-2xl">Link Generator</Link>
      <Link href={'/create'} className="flex items-center gap-3 bg-black text-white py-2 px-5 rounded cursor-pointer hover:bg-gray-700 transition-colors duration-200">
        <BsPlus size={20} />
        Create New Page
      </Link>
    </div>
  );
};
