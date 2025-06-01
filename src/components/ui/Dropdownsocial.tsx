"use client";
import { SocialOptions } from "@/interfaces";
import { socialOptions } from "@/seed";
import React, { useState } from "react";
import { BiCheck, BiChevronDown } from "react-icons/bi";




interface PropsDropDown {
  selectOption: number;
  onSelect: (option: { id: number, socialMedia: string }) => void;
}

export const DropdownSocial = ({ selectOption, onSelect }: PropsDropDown) => {
  const [selected, setSelected] = useState<SocialOptions>(socialOptions.filter(s => s.id === selectOption)[0] ?? socialOptions[4]);
  const [open, setOpen] = useState(false);

  const handleSelect = (option: SocialOptions) => {
    setSelected(option);
    setOpen(false);
    onSelect({
      id: option.id,
      socialMedia: option.label
    })
  };

  return (
    <div className="relative w-56">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full justify-between items-center  bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      >
        <div className="flex items-center gap-2">
          {selected.icon}
          {selected.label}
        </div>
        <BiChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute bottom-full mb-2 w-full bg-white border rounded shadow z-10">
          {socialOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option)}
              className={`flex items-center w-full px-4 py-2 hover:bg-gray-100 ${selected.id === option.id ? "bg-gray-100" : ""
                }`}
            >
              {option.id === selected.id && (
                <BiCheck size={20} className="mr-2" />
              )}

              <div className="mr-2">{option.icon}</div>
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
