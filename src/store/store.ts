import { InfoLinks, ProfileInformation } from "@/interfaces";
import { SocialMediaLinks } from "@/interfaces/home/SocialMediaLinks.interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PageState {
  pageName: string;
  activeTab: number;
  profileData: ProfileInformation;
  socialMediaLinks: SocialMediaLinks[];
  infoLinks: InfoLinks[];
  colorAppearance: number;
  buttonStyleAppareance: number;
  setPageName: (name: string) => void;
  setActiveTab: (id: number) => void;
  setProfileData: (data: Partial<ProfileInformation>) => void;
  setSocialMediaLinks: (data: SocialMediaLinks) => void;
  setSocialMediaLinksArray: (data: SocialMediaLinks[]) => void;
  setInfoLink: (data: InfoLinks) => void;
  setInfoLinksArray: (data: InfoLinks[]) => void;
  setColorAppeareance: (data: number) => void;
  setButtonStyleAppeareance: (data: number) => void;
}

export const usePageStore = create<PageState>()(
  persist(
    (set) => ({
      pageName: "",
      activeTab: 1,
      profileData: {
        userName: "@username",
        avatar: "",
        bio: "Describe yourself in a few words",
      },
      socialMediaLinks: [
        {
          id: 1,
          idSocial: 1,
          socialMedia: "instagram",
          url: "https://instagram.com",
        },
      ],
      infoLinks: [
        {
          id: 1,
          idColor: "Blue",
          linkTitle: "New Link",
          url: "http://example.com",
        },
      ],
      colorAppearance: 1,
      buttonStyleAppareance: 1,
      setPageName: (name) => set({ pageName: name }),
      setActiveTab: (id) => set({ activeTab: id }),
      setProfileData: (data) =>
        set((state) => ({ profileData: { ...state.profileData, ...data } })),
      setSocialMediaLinks: (data) =>
        set((state) => ({
          socialMediaLinks: [...state.socialMediaLinks, data],
        })),
      setSocialMediaLinksArray: (data) =>
        set(() => ({
          socialMediaLinks: data,
        })),
      setInfoLink: (data) =>
        set((state) => ({
          infoLinks: [...state.infoLinks, data],
        })),
      setInfoLinksArray: (data) =>
        set(() => ({
          infoLinks: data,
        })),
      setColorAppeareance: (value) => set({ colorAppearance: value }),
      setButtonStyleAppeareance: (value) =>
        set({ buttonStyleAppareance: value }),
    }),
    {
      name: "page-storage", // nombre clave en localStorage
      partialize: (state) => ({
        pageName: state.pageName,
        activeTab: state.activeTab,
        profileData: state.profileData,
        socialMediaLinks: state.socialMediaLinks,
        infoLinks: state.infoLinks,
        colorAppearance: state.colorAppearance,
        buttonStyleAppareance: state.buttonStyleAppareance,
      }),
    }
  )
);
