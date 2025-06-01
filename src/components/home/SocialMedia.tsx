"use client";
import { PiPlus } from "react-icons/pi";
import { ItemSocialMedia } from "./ItemSocialMedia";
import { usePageStore } from "@/store/store";
import { SocialMediaLinks } from "@/interfaces/home/SocialMediaLinks.interface";

export const SocialMedia = () => {
  const { socialMediaLinks, setSocialMediaLinks, setSocialMediaLinksArray } = usePageStore();
  const handleAddSocial = () => {
    //hacer copia del original evitar mutar original
    const socialSort = [...socialMediaLinks].sort((a, b) => a.id - b.id);

    const ultimoRegistro = socialSort[socialSort.length - 1];
    const newId = ultimoRegistro ? ultimoRegistro.id + 1 : 1;

    const newRegistro: SocialMediaLinks = {
      id: newId,
      idSocial: 1,
      socialMedia: 'instagram',
      url: 'https://instagram.com'
    }
    setSocialMediaLinks(newRegistro)
  };
  const handleSocialChange = (itemId: number, newSocialId: number, newSocialLabel: string) => {
    const updatedLinks = socialMediaLinks.map((item) =>
      item.id === itemId
        ? { ...item, idSocial: newSocialId, socialMedia: newSocialLabel }
        : item
    );
    setSocialMediaLinksArray(updatedLinks);
  };

  const handleUrlChange = (itemId: number, newUrl: string) => {
    const updatedLinks = socialMediaLinks.map((item) =>
      item.id === itemId ? { ...item, url: newUrl } : item
    );
    setSocialMediaLinksArray(updatedLinks);
  };

  const handleDeleteSocial = (itemId: number) => {
    const updatedLinks = socialMediaLinks.filter((item) => item.id !== itemId);
    setSocialMediaLinksArray(updatedLinks);
  };
  return (
    <>
      <div className="flex items-center justify-between font-bold mb-3">
        <h1 className="font-bold text-2xl">Social Media Links</h1>
        <button
          className="flex items-center gap-5 px-2 py-2 text-[8px] sm:text-[8px] xl:text-[15px] border-[1px] border-gray-400 rounded cursor-pointer hover:bg-[#f4f4f5]"
          onClick={handleAddSocial}
        >
          <PiPlus size={20} />
          Add Social
        </button>
      </div>
      {socialMediaLinks.map((option) => (
        <ItemSocialMedia
          key={option.id}
          optionSelected={option.idSocial}
          value={option.url}
          onSelect={(val) => handleSocialChange(option.id, val.id, val.socialMedia)}
          onInput={(val) => handleUrlChange(option.id, val)}
          onClick={() => handleDeleteSocial(option.id)}
        />
      ))}

    </>
  );
};
