"use server";
import { auth } from "@/auth";
import { InfoLinks, ProfileInformation } from "@/interfaces";
import { SocialMediaLinks } from "@/interfaces/home/SocialMediaLinks.interface";
import { isValidOrRelativeUrl } from "@/utils";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const SavePage = async (
  pageName: string,
  profileData: ProfileInformation,
  socialMediaLinks: SocialMediaLinks[],
  infoLinks: InfoLinks[],
  colorAppearance: number,
  buttonStyleAppearance: number
) => {
  const session = await auth();
  if (!session?.user) return { success: false, message: "No active session" };

  if (!session.user.id)
    return { success: false, message: "User ID is missing from session" };

  if (!session.user.name)
    return { success: false, message: "User name is missing from session" };

  if (!pageName) return { success: false, message: "Page name is required" };

  if (
    !profileData ||
    !profileData.userName ||
    !profileData.bio ||
    !profileData.avatar
  )
    return {
      success: false,
      message: "Complete profile information is required",
    };

  if (!Array.isArray(socialMediaLinks) || socialMediaLinks.length === 0)
    return {
      success: false,
      message: "At least one social media link is required",
    };
  if (
    !Array.isArray(socialMediaLinks) ||
    socialMediaLinks.length === 0 ||
    socialMediaLinks.some(
      (s) => !s.url || s.url.trim() === "" || !isValidOrRelativeUrl(s.url)
    )
  ) {
    return {
      success: false,
      message: "All social media links must have a valid URL",
    };
  }

  if (!Array.isArray(infoLinks) || infoLinks.length === 0) {
    return { success: false, message: "At least one info link is required" };
  }

  if (infoLinks.some((l) => !l.linkTitle || l.linkTitle.trim() === "")) {
    return {
      success: false,
      message: "All info links must have a valid title",
    };
  }

  if (
    infoLinks.some(
      (l) => !l.url || l.url.trim() === "" || !isValidOrRelativeUrl(l.url)
    )
  ) {
    return { success: false, message: "All info links must have a valid URL" };
  }

  if (!colorAppearance)
    return { success: false, message: "Color appearance ID is required" };

  if (!buttonStyleAppearance)
    return {
      success: false,
      message: "Button style appearance ID is required",
    };

  try {
    const newPage = await prisma.page.create({
      data: {
        name: pageName,
        userId: session.user.id,
        userCreated: session.user.name,
        userModified: session.user.name,
        profileInformation: {
          create: {
            userName: profileData.userName,
            bio: profileData.bio,
            avatar: profileData.avatar,
            socialMedias: {
              create: socialMediaLinks.map((s) => ({
                name: s.socialMedia,
                url: s.url,
              })),
            },
          },
        },
        links: {
          create: infoLinks.map((l) => ({
            linkTitle: l.linkTitle,
            url: l.url,
            colorId: l.id,
          })),
        },
        appearance: {
          create: {
            colorBgId: colorAppearance,
            styleButtonId: buttonStyleAppearance,
          },
        },
      },
    });

    return { success: true, message: "Page saved successfully", data: newPage };
  } catch (error) {
    console.error(error);
    return { success: false, message: "An unexpected error occurred" };
  }
};
