'use client'
import { BiTrash } from "react-icons/bi"
import { DropdownColor } from "../ui/DropdownColor"
import { InputCustom } from "../ui/InputCustom"
import { useState } from "react";

interface PropsLink {
    linkTitle: string;
    url: string;
    id: string;
    onInputTitle: (value: string) => void;
    onInputUrl: (value: string) => void;
    onSelectedColor: (value: string) => void;
    onRemove: () => void;
}

export const Links = ({ linkTitle, url, id, onInputTitle, onInputUrl, onSelectedColor,onRemove }: PropsLink) => {
    const [linkTitleState, setLinkTitleState] = useState(linkTitle)
    const [urlState, setUrlState] = useState(url)
    const [colorState, setColorState] = useState(id)
    const handleOnInputTitle = (value: string) => {
        setLinkTitleState(value)
        onInputTitle(value)
    }
    const handleOnInputUrl = (value: string) => {
        setUrlState(value)
        onInputUrl(value)
    }
    const handleSelectColor = (value: string) => {
        setColorState(value);
        onSelectedColor(value);
    }
    return (
        <div className="border-[1px]  border-gray-300 rounded-2xl p-7 mt-3">
            <InputCustom label='Link Title' id='linkTitle' value={linkTitleState} placeholder="link example" onChange={(value) => handleOnInputTitle(value)} />
            <InputCustom label='URL' id='linkUrl' value={urlState} placeholder="https://example.com" onChange={(value) => handleOnInputUrl(value)} />

            <DropdownColor selectedColor={colorState} onSelectedColor={(value) => handleSelectColor(value)} />
            <div className="flex justify-end mt-4">
                <button className="flex items-center gap-2 text-red-600 hover:bg-gray-100 cursor-pointer p-2 rounded" onClick={onRemove}>
                    <BiTrash size={20} />
                    <span>Remove</span>
                </button>

            </div>

        </div>
    )
}
