'use client'
import { usePageStore } from "@/store/store"
import { ItemButtonStyle } from "./ItemButtonStyle"
import { useState } from "react";
import { styles } from "@/seed";



export const ButtonStyle = () => {
  const { buttonStyleAppareance, setButtonStyleAppeareance } = usePageStore();
  const [selected, setSelected] = useState(buttonStyleAppareance)
  const handleOnSelect = (value: number) => {
    setSelected(value);
    setButtonStyleAppeareance(value);
  }
  return (
    <div className="grid grid-cols-3 gap-5">

      {
        styles.map(style => (
          <ItemButtonStyle key={style.id} text={style.text} rounded={style.rounded} selected={selected === style.id} onSelect={() => handleOnSelect(style.id)} />
        ))
      }
    </div>
  )
}
