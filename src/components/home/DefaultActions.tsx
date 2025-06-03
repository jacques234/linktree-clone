"use client";
import Link from "next/link";
import React from "react";
import { BsPlus } from "react-icons/bs";
import { useSession } from "next-auth/react";
import Image from "next/image";
export const DefaultActions = () => {
  const { data: session } = useSession();
  return (
    <>
      <Link href={"/"} className="font-bold text-2xl">
        Link Generator
      </Link>
      <div className="flex gap-3 justify-center items-center">
        <Link
          href={"/create"}
          className="flex items-center gap-3 bg-black text-white py-2 px-5 rounded cursor-pointer hover:bg-gray-700 transition-colors duration-200"
        >
          <BsPlus size={20} />
          Create New Page
        </Link>
        {session?.user?.image ? (
          <Image
            src={session.user.image}
            alt="Logo user"
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : null}
      </div>
    </>
  );
};
