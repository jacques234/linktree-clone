import { InputCustom } from "../ui/InputCustom";
import { TextAreaCustom } from "../ui/TextAreaCustom";
import { SocialMedia } from "./SocialMedia";
import { usePageStore } from "@/store/store";

export const ProfileInformation = () => {
  const {profileData,setProfileData} = usePageStore();
  return (
    <>
      <h1 className="font-bold text-2xl">Profile Information</h1>
      <p className="text-[#9fa3a5] mb-3">
        Customize your profile details and social media links.
      </p>
      <InputCustom
        label="Username"
        id="username"
        value={profileData.userName ?? ''}
        placeholder="@username"
        onChange={(value) => setProfileData({userName:value})}
      />
      <TextAreaCustom
        label="Bio"
        id="pageBio"
        value={profileData.bio ?? ''}
        placeholder="Bio here"
        onChange={(value) => setProfileData({bio:value})}
      />

      <InputCustom
        label="Avatar URL"
        id="avatar"
        value={profileData.avatar ?? ''}
        placeholder="https://example.com/avatar.jpg"
        onChange={(value) => setProfileData({avatar:value})}
      />
      <hr className="my-4 border-t border-gray-300" />
      <SocialMedia />
    </>
  );
};
