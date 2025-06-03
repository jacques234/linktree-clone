"use client";

import { signOutAction } from "@/actions/authActions";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiLogOut, BiUser } from "react-icons/bi";
import { GiGearHammer } from "react-icons/gi";
import { GrConfigure } from "react-icons/gr";

interface PropsItemUser {
  image: string;
}

export const ItemUser = ({ image }: PropsItemUser) => {
  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    setOpen(!open);
  };
  return (
    <div className="relative">
      <button onClick={handleOnClick}>
        <Image
          src={image}
          alt="Logo user"
          width={50}
          height={50}
          className="rounded-full"
        />
      </button>

      {open && (
        // <div className="absolute top-full mr-40 h-full w-full bg-white border rounded shadow z-10">
        <div className="absolute right-0 mt-2 p-2 w-auto bg-white border border-gray-200 rounded-lg shadow-lg z-20">
          <Link
            href={""}
            className="flex gap-3  items-center mb-2 hover:bg-gray-200 rounded p-1"
          >
            <BiUser />
            Mi Perfil
          </Link>
          <Link
            href={""}
            className="flex gap-3  items-center mb-2 hover:bg-gray-200 rounded p-1"
          >
            <GrConfigure />
            Configuracion
          </Link>
          <hr className="text-gray-500 mb-2" />

          <form action={signOutAction}>
            <button
              type="submit"
              className="flex gap-3 w-full items-center text-red-700 hover:bg-gray-200 rounded p-1"
            >
              <BiLogOut />
              Sign out
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
