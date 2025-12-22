import { Button } from "@heroui/react";
import { ShareIcon } from "./icons/ShareIcon";

interface HeaderProps {
  isCollapsed?: boolean;
}

export const Header = ({ isCollapsed = false }: HeaderProps) => {
  return (
    <header
      className={`fixed top-0 right-0 z-40 bg-transparent transition-all duration-300 ${
        isCollapsed ? "left-0" : "left-[280px]"
      }`}
    >
      <div className="px-6 py-3 flex justify-end items-center">
        <Button
          variant="light"
          startContent={<ShareIcon className="w-4 h-4" />}
          className="text-gray-600 font-medium text-sm"
        >
          Share
        </Button>
      </div>
    </header>
  );
};
