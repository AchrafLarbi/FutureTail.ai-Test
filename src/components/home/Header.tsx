import { Button } from "@heroui/react";
import { ShareIcon } from "../icons/home/ShareIcon";

interface HeaderProps {
  isCollapsed?: boolean;
}

export const Header = ({ isCollapsed = false }: HeaderProps) => {
  return (
    <header
      className={`fixed top-0 right-0 z-40 bg-transparent border-b border-gray-200 transition-all duration-300 ${
        isCollapsed ? "left-0" : "left-[280px]"
      }`}
    >
      <div className="px-6 py-3 flex justify-end items-center">
        <Button
          variant="light"
          className="text-gray-600 font-medium text-sm flex items-center gap-2"
        >
          <ShareIcon className="w-4 h-4" />
          <span>Share</span>
        </Button>
      </div>
    </header>
  );
};
