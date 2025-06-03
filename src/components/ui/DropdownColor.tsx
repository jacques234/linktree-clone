"use client";
import { getColorsLinks } from "@/actions";
import { ColorOptions } from "@/interfaces";
import React, { useEffect, useState } from "react";
import { BiCheck, BiChevronDown } from "react-icons/bi";

interface PropsDropDownColor {
  selectedColor: string;
  onSelectedColor: (value: string) => void;
}

export const DropdownColor = ({
  selectedColor,
  onSelectedColor,
}: PropsDropDownColor) => {
  const [colors, setColors] = useState<ColorOptions[]>([]);
  const [selected, setSelected] = useState<ColorOptions | undefined>(undefined);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    async function fetchColors() {
      const result = await getColorsLinks();
      setColors(result);

      const initial = result.find((c) => c.label === selectedColor);
      if (initial) {
        setSelected(initial);
      }
    }
    fetchColors();
  }, [selectedColor]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: ColorOptions) => {
    setSelected(option);
    setIsOpen(false);
    onSelectedColor(option.label);
  };

  return (
    <div className="relative w-full">
      <label>Button Style</label>
      <button
        onClick={toggleDropdown}
        className="flex w-full justify-between items-center bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      >
        <div className="flex items-center gap-2">
          <div
            className={`w-4 h-4 rounded-full ${
              selected?.color || "bg-gray-200"
            }`}
          />
          <span>{selected?.label || "Select a color"}</span>
        </div>
        <BiChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 w-full bg-white border rounded shadow z-10 max-h-60 overflow-y-auto">
          {colors.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option)}
              className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full ${option.color}`} />
                <span>{option.label}</span>
              </div>
              {selected?.value === option.value && (
                <BiCheck className="w-4 h-4 text-green-500" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
