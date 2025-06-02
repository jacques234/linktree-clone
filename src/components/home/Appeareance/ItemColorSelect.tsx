'use client'
import clsx from "clsx";
import { BiCheck } from "react-icons/bi";

interface PropsItem {
    color:string;
    selected: boolean;
    onSelect: () => void;
}
export const ItemColorSelect = ({ color,selected,onSelect }: PropsItem) => {

    const principalClass = `${color} w-auto h-24 rounded-2xl cursor-pointer`
    return (
        <button className={clsx( principalClass, {
            'border-[2px] flex justify-center items-center border-blue-600': selected,
            '': !selected
        })} onClick={onSelect}>
            {selected && (
                <div className="bg-gray-500/30 rounded-full p-1">
                    <BiCheck color="white" size={20} />
                </div>
            )}
        </button>
    )
}
