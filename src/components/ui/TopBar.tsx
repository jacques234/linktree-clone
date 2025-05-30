'use client';
import { usePathname } from "next/navigation";
import React from "react";
import { CreatePageActions } from "../home/CreatePageActions";
import { DefaultActions } from "../home/DefaultActions";

export const TopBar = () => {
  const pathName = usePathname();
  let RigthContent : React.ReactNode = null;
  if(pathName === "/create") {
      RigthContent = <CreatePageActions />;
  }else{
    RigthContent = <DefaultActions />;
  }
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center py-4 px-28 border-b-[1px] border-gray-400 bg-white">
        {RigthContent}
    </div>
  );
};
