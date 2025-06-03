"use client";
import { usePageStore } from "@/store/store";
import { ItemButtonStyle } from "./ItemButtonStyle";
import { useEffect, useState } from "react";
import { StyleButton } from "@/interfaces";
import { getStylesButtons } from "@/actions/colorActions";

export const ButtonStyle = () => {
  const { buttonStyleAppareance, setButtonStyleAppeareance } = usePageStore();
  const [selected, setSelected] = useState(buttonStyleAppareance);
  const [styles, setStyles] = useState<StyleButton[]>([]);

  useEffect(() => {
    async function fetchColors() {
      const result = await getStylesButtons();
      setStyles(result);

      const initial = result.find((c) => c.id === selected);
      if (initial) {
        setSelected(initial.id);
      }
    }
    fetchColors();
  }, [selected]);
  const handleOnSelect = (value: number) => {
    setSelected(value);
    setButtonStyleAppeareance(value);
  };
  return (
    <div className="grid grid-cols-3 gap-5">
      {styles.map((style) => (
        <ItemButtonStyle
          key={style.id}
          text={style.text}
          rounded={style.rounded}
          selected={selected === style.id}
          onSelect={() => handleOnSelect(style.id)}
        />
      ))}
    </div>
  );
};
