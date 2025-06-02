import { SocialMediaLinks } from "@/interfaces/home/SocialMediaLinks.interface";
import { socialOptions } from "@/seed";
import { isValidOrRelativeUrl } from "@/utils";
import Link from "next/link";

interface PropsIconSocial {
  item: SocialMediaLinks;
}
export const IconSocial = ({ item }: PropsIconSocial) => {
  const icon = socialOptions.find((s) => s.id === item.idSocial)?.icon;

  const url =
    item.url && isValidOrRelativeUrl(item.url)
      ? item.url
      : "/404";

  return (
    <Link href={url} className="text-white">
      {icon}
    </Link>
  );
};
