"use client";
import { PiPlus } from "react-icons/pi";
import { ItemSocialMedia } from "./ItemSocialMedia";
import { useState } from "react";
import { usePageStore } from "@/store/store";

export const SocialMedia = () => {
  const {socialMediaLinks,setSocialMediaLinks} = usePageStore();
  const [socialItems, setSocialItems] = useState<number[]>([Date.now()]);
  const handleAddSocial = () => {
    const newId = Date.now() + Math.random();
    setSocialItems((prev) => [...prev, newId]);
  };
  const handleDeleteSocial = (id: number) => {
    const newItems = socialItems.filter((i) => i !== id);
    setSocialItems(newItems);
  };
  return (
    <>
      <div className="flex items-center justify-between font-bold mb-3">
        <h1 className="font-bold text-2xl">Social Media Links</h1>
        <button
          className="flex items-center gap-5 px-2 py-2 border-[1px] border-gray-400 rounded cursor-pointer hover:bg-[#f4f4f5]"
          onClick={handleAddSocial}
        >
          <PiPlus size={20} />
          Add Social
        </button>
      </div>
      {
        socialMediaLinks.map((option) => (
          <ItemSocialMedia
            key={option.socialMedia}
            onClick={() => console.log()}
            onSelect={(val) => alert(val)} optionSelected={option.id} 
            value={option.url}       />
        ))
      }
      {/* {socialItems.map((itemId) => (
        <ItemSocialMedia
          key={itemId}
          onClick={() => handleDeleteSocial(itemId)}
          onSelect={(val) => alert(val)}
        />
      ))} */}
    </>
  );
};
