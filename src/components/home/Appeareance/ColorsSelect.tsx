'use client'
import { ItemColorSelect } from "./ItemColorSelect"
import { useState } from "react"
import { usePageStore } from "@/store/store"
import { colors } from "@/seed"

export const ColorsSelect = () => {
    const { colorAppearance, setColorAppeareance } = usePageStore();
    const [selected, setSelected] = useState(colorAppearance)
    const handleSelect = (id: number) => {
        setSelected(id)
        setColorAppeareance(id)
    }
    return (
        <div className="grid grid-cols-3 gap-5">
            {
                colors.map(color => (
                    <ItemColorSelect key={color.id} color={color.color} selected={selected === color.id} onSelect={() => handleSelect(color.id)} />
                ))
            }
        </div>

    )
}
