import { useState } from "react";
import auraIcon from "../../assets/icon/aura2.png";

export const AuraLogo = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-40 h-40 flex items-center justify-center ">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-purple-200 border-t-purple-500 rounded-full animate-spin" />
        </div>
      )}
      <img
        src={auraIcon}
        alt="Aura Logo"
        loading="eager"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-contain scale-150 transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};
