"use client";
import Image from "next/image";
import React from "react";
import { IconSocial } from "../Profile/IconSocial";
import { usePageStore } from "@/store/store";
import { LinkButton } from "./LinkButton";
import { ColorBg, ColorOptions, StyleButton } from "@/interfaces";

interface PropsContentPreview {
  colorsProp: ColorOptions[];
  colorsBg: ColorBg[];
  stylesButtons: StyleButton[];
}

export const ContentPreview = ({ colorsProp, colorsBg,stylesButtons}: PropsContentPreview) => {
  const {
    colorAppearance,
    profileData,
    infoLinks,
    buttonStyleAppareance,
    socialMediaLinks,
  } = usePageStore();
  const bg = colorsBg.find((x) => x.id === colorAppearance);
  return (
    <div
      className={`${bg?.color} h-[650px] w-full  xl:min-h-[650px] xl:max-h-[650px] xl:w-96 rounded-2xl px-7 py-7 flex flex-col items-center overflow-auto`}
    >
      {/* icon */}
      <div className="bg-white w-[100px] h-[100px] p-2 rounded-full mb-8">
        <Image
          src={profileData?.avatar || "https://unavatar.io/gravatar/.com"}
          width={100}
          height={100}
          alt={""}
          className="rounded-full"
        />
      </div>

      <p className="text-white font-bold text-2xl mb-5">
        {profileData?.userName || "@UserName"}
      </p>

      <p className="text-white mb-5">{profileData?.bio || "bio"}</p>

      {infoLinks.map((link) => (
        <LinkButton
          key={link.id}
          link={link}
          colorsButtons={colorsProp}
          styles={stylesButtons}
          styleAppearance={buttonStyleAppareance}
        />
      ))}
      <div className="flex gap-5 justify-center items-center flex-wrap">
        {socialMediaLinks.map((item) => (
          <IconSocial key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
