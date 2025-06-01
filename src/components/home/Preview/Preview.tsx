'use client'
import { colors } from "@/seed";
import { usePageStore } from "@/store/store"
import Image from "next/image";
import { LinkButton } from "./LinkButton";
import { IconSocial } from "../Profile/IconSocial";
import { it } from "node:test";

export const Preview = () => {
    const { colorAppearance, profileData, infoLinks, buttonStyleAppareance, socialMediaLinks } = usePageStore();
    const bg = colors.find(x => x.id === colorAppearance)
    console.log(socialMediaLinks)
    return (
        <div className="p-7">
            <h1 className="font-bold text-2xl">Preview</h1>

            <div className={`${bg?.color} h-[700px] w-96 rounded-2xl px-7 pt-7 flex flex-col items-center`}>
                {/* icon */}
                <div className="bg-white w-[100px] h-[100px] p-2 rounded-full mb-8">
                    <Image src={profileData?.avatar || 'https://unavatar.io/gravatar/.com'
                    } width={100} height={100} alt={""} className="rounded-full" />
                </div>

                <p className="text-white font-bold text-2xl mb-5">{profileData?.userName || "@UserName"}</p>

                <p className="text-white mb-5">{profileData?.bio || 'bio'}</p>


                {
                    infoLinks.map(link => (
                        <LinkButton key={link.id} link={link} styleAppearance={buttonStyleAppareance} />
                    ))
                }
                <div className={socialMediaLinks.length === 1
                    ? "flex justify-center items-center"
                    : "grid grid-cols-6 gap-4 justify-items-center items-center"}
                >
                    {socialMediaLinks.map(item => (
                        <IconSocial key={item.id} item={item} />
                    ))}
                </div>



            </div>
        </div>
    )
}
