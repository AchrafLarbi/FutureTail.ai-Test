import auraIcon from "../assets/icon/aura.png";

export const AuraLogo = () => {
  return (
    <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
      <img
        src={auraIcon}
        alt="Aura Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};
