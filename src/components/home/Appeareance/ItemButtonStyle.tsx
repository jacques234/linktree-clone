import clsx from "clsx";
import { BiCheck } from "react-icons/bi";

interface PropsItemButton {
    text: string;
    rounded: string;
    selected: boolean;
    onSelect: () => void;
}
export const ItemButtonStyle = ({ text, rounded, selected, onSelect }: PropsItemButton) => {
    const primaryClass = `w-auto h-10 border-[1px] ${rounded} `
    return (
        <button className={clsx(primaryClass, {
            'flex justify-center items-center gap-3 border-blue-600': selected,
            'border-[#adb2bd]': !selected
        })}
            onClick={onSelect}>
            {text}
            {
                selected && (
                    <BiCheck color="green" />
                )
            }
        </button>
    )
}
