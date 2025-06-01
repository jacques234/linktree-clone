import { ButtonStyle } from "./ButtonStyle"
import { ColorsSelect } from "./ColorsSelect"

export const Appearance = () => {
    return (
        <>
            <h1 className="font-bold text-2xl">Appearance</h1>
            <p className="text-[#9fa3a5] mb-3">
                Customize the look and feel of your page.
            </p>

            <p className="font-bold text-[15px]">Background</p>

            <ColorsSelect />

            <p className="font-bold text-[15px] mt-5">Button Style</p>

            <ButtonStyle />
        </>
    )
}
