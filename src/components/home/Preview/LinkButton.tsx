import { InfoLinks } from "@/interfaces"
import { colorOptions, styles } from "@/seed";
import Link from "next/link"

interface PropsLinkButton {
    link: InfoLinks;
    styleAppearance:number;
}

export const LinkButton = ({ link ,styleAppearance}: PropsLinkButton) => {
    const color = colorOptions.find(x => x.label === link.idColor)?.color
    const appearanceButton = styles.find(x => x.id === styleAppearance)?.rounded
    return (
        <Link key={link.id} className={`${color} w-full h-10 ${appearanceButton} flex justify-center items-center text-white mb-3`} href={link.url}>
            {link.linkTitle}
        </Link>
    )
}
