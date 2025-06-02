"use client";
import { ItemColorSelect } from "./ItemColorSelect";
import { useEffect, useState } from "react";
import { usePageStore } from "@/store/store";
import { ColorBg } from "@/interfaces";
import { getColorsBackground } from "@/actions/colorActions";

export const ColorsSelect = () => {
  const { colorAppearance, setColorAppeareance } = usePageStore();
  const [selected, setSelected] = useState(colorAppearance);
  // const [selected, setSelected] = useState<ColorOptions | undefined>(undefined);
  const [colorsBg, setColorsBg] = useState<ColorBg[]>([]);
  useEffect(() => {
    async function fetchColors() {
      const result = await getColorsBackground();
      setColorsBg(result);

      const initial = result.find((c) => c.id === selected);
      if (initial) {
        setSelected(initial.id);
      }
    }
    fetchColors();
  }, [selected]);

  useEffect;
  const handleSelect = (id: number) => {
    setSelected(id);
    setColorAppeareance(id);
  };
  return (
    <div className="grid grid-cols-3 gap-5">
      {colorsBg.map((color) => (
        <ItemColorSelect
          key={color.id}
          color={color.color}
          selected={selected === color.id}
          onSelect={() => handleSelect(color.id)}
        />
      ))}
    </div>
  );
};
