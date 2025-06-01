import { InfoLinks, ProfileInformation } from '@/interfaces';
import { SocialMediaLinks } from '@/interfaces/home/SocialMediaLinks.interface';
import { create } from 'zustand'




interface PageState {
  pageName: string;
  activeTab: number;
  profileData: ProfileInformation;
  socialMediaLinks: SocialMediaLinks[];
  infoLinks: InfoLinks[];
  colorAppearance: number;
  buttonStyleAppareance: number;
  linksData: Record<string, any>;
  appearanceData: Record<string, any>;
  setPageName: (name: string) => void;
  setActiveTab: (id: number) => void;
  setProfileData: (data: ProfileInformation) => void;
  setSocialMediaLinks: (data: SocialMediaLinks) => void;
  setSocialMediaLinksArray: (data: SocialMediaLinks[]) => void;
  setInfoLink: (data: InfoLinks) => void;
  setColorAppeareance: (data: number) => void;
  setButtonStyleAppeareance: (data: number) => void;
  setInfoLinksArray: (data: InfoLinks[]) => void;
  setLinksData: (data: Record<string, any>) => void;
  setAppearanceData: (data: Record<string, any>) => void;
}

export const usePageStore = create<PageState>((set) => ({
  pageName: '',
  activeTab: 1,
  profileData: {
    userName: '',
    avatar: '',
    bio: ''
  },
  socialMediaLinks: [{
    id: 1,
    idSocial: 1,
    socialMedia: 'instagram',
    url: 'https://instagram.com'
  }],
  infoLinks: [{
    id: 1,
    idColor: 'Blue',
    linkTitle: '',
    url: ''
  }],
  colorAppearance: 1,
  buttonStyleAppareance: 1,
  linksData: {},
  appearanceData: {},
  setPageName: (name) => set({ pageName: name }),
  setActiveTab: (id) => set({ activeTab: id }),
  setProfileData: (data) => set((state) => ({ profileData: { ...state.profileData, ...data } })),
  setSocialMediaLinks: (data) =>
    set((state) => ({
      socialMediaLinks: [...state.socialMediaLinks, data],
    })),
  setSocialMediaLinksArray: (data: SocialMediaLinks[]) =>
    set(() => ({
      socialMediaLinks: data,
    })),
  setInfoLink: (data) =>
    set((state) => ({
      infoLinks: [...state.infoLinks, data]
    })),
  setInfoLinksArray: (data: InfoLinks[]) =>
    set(() => ({
      infoLinks: data
    })),
  setColorAppeareance: (value) => set({ colorAppearance: value }),
  setButtonStyleAppeareance: (value) => set({ buttonStyleAppareance: value }),
  setLinksData: (data) => set({ linksData: data }),
  setAppearanceData: (data) => set({ appearanceData: data }),
}));