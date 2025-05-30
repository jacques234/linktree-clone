"use client";
import { InputCustom } from "../ui/InputCustom";
import { usePageStore } from "@/store/store";

export const NamePage = () => {
  const { pageName, setPageName } = usePageStore();
  return (
    <div className="border-[1px] border-gray-300 rounded-2xl p-7">
      <h1 className="font-bold text-2xl mb-5">Page Settings</h1>

      <InputCustom
        label="Page Name"
        id="pageName"
        value={pageName}
        placeholder="My Awesome Page"
        onChange={(value) => setPageName(value)}
      />

      <p className="text-[#9fa3a5]">This is for your reference only</p>
    </div>
  );
};
