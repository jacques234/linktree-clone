"use client";
import { SavePage } from "@/actions/dbActions";
import { usePageStore } from "@/store/store";
import { BiSave } from "react-icons/bi";

export const SaveButton = () => {
  const { pageName, profileData, socialMediaLinks, infoLinks,colorAppearance,buttonStyleAppareance } = usePageStore();
  const handleSave = async () => {
    const page = await SavePage(pageName,profileData,socialMediaLinks,infoLinks,colorAppearance,buttonStyleAppareance);
    if (page.success) {
      alert(page.message);
    } else {
      alert(`Error: ${page.message}`);
    }
  };
  return (
    <button className="flex items-center gap-5 px-6 py-2 bg-black text-white rounded" onClick={handleSave}>
      <BiSave size={20} />
      Save
    </button>
  );
};
