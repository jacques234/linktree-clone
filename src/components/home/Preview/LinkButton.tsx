import { ColorOptions, InfoLinks, StyleButton } from "@/interfaces";
import { isValidOrRelativeUrl } from "@/utils";
import Link from "next/link";

interface PropsLinkButton {
  link: InfoLinks;
  styleAppearance: number;
  colorsButtons: ColorOptions[];
  styles: StyleButton[];
}
export const LinkButton = ({
  link,
  styleAppearance,
  colorsButtons,
  styles,
}: PropsLinkButton) => {
  const color = colorsButtons.find((x) => x.label === link.idColor)?.color;
  const appearanceButton = styles.find(
    (x) => x.id === styleAppearance
  )?.rounded;
  const url = link.url && isValidOrRelativeUrl(link.url) ? link.url : "/404";

  return (
    <Link
      key={link.id}
      className={`${color} w-full min-h-10 ${appearanceButton} flex justify-center items-center text-white mb-3`}
      href={url}
    >
      {link.linkTitle}
    </Link>
  );
};
