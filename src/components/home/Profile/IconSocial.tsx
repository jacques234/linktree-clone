import { SocialMediaLinks } from "@/interfaces/home/SocialMediaLinks.interface"
import { socialOptions } from "@/seed"
import Link from "next/link"

interface PropsIconSocial {
    item: SocialMediaLinks
}
export const IconSocial = ({ item }: PropsIconSocial) => {
    const icon = socialOptions.find(s => s.id === item.idSocial)?.icon
    return (
        <Link href={item.url} className="text-white">
            {icon}
        </Link>
    )
}
