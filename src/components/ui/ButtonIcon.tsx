import clsx from "clsx";
import React from "react";

interface PropsButtonIcon {
  id: number;
  icon: React.ReactElement;
  text: string;
  active: boolean;
  onClick: (id:number) => void;
}

export const ButtonIcon = ({
  id,
  icon,
  text,
  active,
  onClick,
}: PropsButtonIcon) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={clsx(
        "flex items-center justify-center py-2 px-6 text-gray-500",
        {
          "hover:bg-white transition-colors": !active,
          "bg-white  text-black": active,
        }
      )}
    >
      {icon}
      {text}
    </button>
  );
};
