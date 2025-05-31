'use client'
import React, { useState } from "react";
import { DropdownSocial } from "../ui/Dropdownsocial";
import { BiTrash } from "react-icons/bi";

interface PropsItemSocialMedia {
  optionSelected: number;
  value: string
  onClick: () => void;
  onSelect: (value: { id: number, socialMedia: string }) => void;
  onInput: (value: string) => void;
}

export const ItemSocialMedia = ({

  optionSelected,
  value,
  onClick,
  onSelect,
  onInput,
}: PropsItemSocialMedia) => {
  const [input, setInput] = useState<string>(value)

  const handleInput = (value: string) => {
    setInput(value);
    onInput(value)
  }

  return (
    <div className="flex gap-3 mb-3">
      <DropdownSocial onSelect={(value) => onSelect(value)} selectOption={optionSelected} />
      <input
        type="text"
        value={input}
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow "
        placeholder="https://example.com"
        onInput={(e) => handleInput(e.currentTarget.value)}

      />
      <button className="cursor-pointer" onClick={onClick}>
        <BiTrash color="red" size={20} />
      </button>
    </div>
  );
};
