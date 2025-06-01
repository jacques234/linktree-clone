import { SocialOptions } from "@/interfaces";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";

export const socialOptions: SocialOptions[] = [
  { id: 1, label: "Instagram", icon: <FaInstagram /> },
  { id: 2, label: "Twitter", icon: <FaTwitter /> },
  { id: 3, label: "YouTube", icon: <FaYoutube /> },
  { id: 4, label: "GitHub", icon: <FaGithub /> },
  { id: 5, label: "LinkedIn", icon: <FaLinkedin /> },
  { id: 6, label: "Facebook", icon: <FaFacebook /> },
  { id: 7, label: "Twitch", icon: <FaTwitch /> },
  { id: 8, label: "TikTok", icon: <FaTiktok /> },
];