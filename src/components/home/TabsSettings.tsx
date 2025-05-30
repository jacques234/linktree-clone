"use client";
import { BiPalette, BiUser } from "react-icons/bi";
import { CiLink } from "react-icons/ci";
import { ButtonIcon } from "../ui/ButtonIcon";
import { ProfileInformation } from "./ProfileInformation";
import { usePageStore } from "@/store/store";

const tabOptions = [
  {
    id: 1,
    icon: <BiUser size={20} className="mr-2" />,
    text: "Profile",
  },
  {
    id: 2,
    icon: <CiLink size={20} className="mr-2" />,
    text: "Links",
  },
  {
    id: 3,
    icon: <BiPalette size={20} className="mr-2" />,
    text: "Appearance",
  },
];

export const TabsSettings = () => {
  const {activeTab,setActiveTab} = usePageStore();
  const handleOnClick = (id: number) => {
    setActiveTab(id);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return <ProfileInformation />;
      case 2:
        return <div>Links</div>;
      case 3:
        return <div>Appearance</div>;
      default:
        return null;
    }
  };
  return (
    <>
      <div className="grid grid-cols-3 bg-[#f4f4f5] rounded p-1 mt-6">
        {tabOptions.map((option) => (
          <ButtonIcon
            key={option.id}
            icon={option.icon}
            text={option.text}
            active={activeTab === option.id}
            onClick={handleOnClick}
            id={option.id}
          />
        ))}
      </div>
      <div className="border-[1px] border-gray-300 rounded-2xl p-7 mt-5">
        {renderTabContent()}
      </div>
    </>
  );
};
