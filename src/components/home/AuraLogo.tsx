import { Image } from "@heroui/react";
import auraIcon from "../../assets/icon/aura2.png";

export const AuraLogo = () => {
  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      <Image
        src={auraIcon}
        alt="Aura Logo"
        width={160}
        height={160}
        className="object-contain scale-150"
        loading="eager"
      />
    </div>
  );
};
