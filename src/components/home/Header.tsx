import { Button } from "@heroui/react";
import { ShareIcon } from "../icons/home/ShareIcon";

interface HeaderProps {
  isCollapsed?: boolean;
}

export const Header = ({ isCollapsed = false }: HeaderProps) => {
  return (
    <header
      className={`fixed top-0 right-0 z-30 bg-transparent border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ${
        isCollapsed ? "left-0" : "md:left-[280px] left-0"
      }`}
    >
      <div className="px-6 py-3 flex justify-end items-center">
        <Button
          variant="light"
          className="text-gray-600 dark:text-gray-300 font-medium text-sm flex items-center gap-2"
        >
          <ShareIcon className="w-4 h-4" />
          <span>Share</span>
        </Button>
      </div>
    </header>
  );
};
