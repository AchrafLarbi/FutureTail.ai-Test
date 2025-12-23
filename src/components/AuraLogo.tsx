import auraIcon from "../assets/icon/aura2.png";

export const AuraLogo = () => {
  return (
    <div className="relative w-40 h-40 flex items-center justify-center ">
      <img
        src={auraIcon}
        alt="Aura Logo"
        className="w-full h-full object-contain scale-150"
      />
    </div>
  );
};
