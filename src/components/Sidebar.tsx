import { useState } from "react";
import { Button, Avatar } from "@heroui/react";

import auraIcon from "../assets/icon/aura_sidebar.png";
import {
  SearchIcon,
  HistoryIcon,
  GridIcon,
  PlusIcon,
  ChevronDownIcon,
  SidebarCollapseIcon,
  TrendIcon,
  ChartIcon,
  ChatIcon,
  MoonIcon,
  SettingsIcon,
  CrownIcon,
  HelpIcon,
  LogoutIcon,
} from "./icons";

const dashboards = [
  { id: 1, name: "Dashboard 1", icon: GridIcon, active: false },
  { id: 2, name: "Dashboard 2", icon: TrendIcon, active: false },
  { id: 3, name: "Dashboard 3", icon: ChartIcon, active: false },
];

const chatHistory = [
  { id: 1, name: "New Chat", time: "Today", active: true },
  { id: 2, name: "New Chat", time: "Today", active: false },
  { id: 3, name: "New Chat", time: "2 days ago", active: false },
  { id: 4, name: "New Chat", time: "2 days ago", active: false },
  {
    id: 5,
    name: "Q3 Running Shoes Performanc",
    time: "2 days ago",
    active: false,
  },
  {
    id: 6,
    name: "Compare winter jacket prices v",
    time: "2 days ago",
    active: false,
  },
];

const userMenuItems = [
  { id: 1, name: "Dark Mode", icon: MoonIcon, action: "darkMode" },
  { id: 2, name: "Settings", icon: SettingsIcon, action: "settings" },
  { id: 3, name: "Upgrade Plan", icon: CrownIcon, action: "upgrade" },
  { id: 4, name: "Help", icon: HelpIcon, action: "help" },
  { id: 5, name: "Send Feedback", icon: ChatIcon, action: "feedback" },
];

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar = ({ isCollapsed, onToggleCollapse }: SidebarProps) => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(true);
  const [activeChatId, setActiveChatId] = useState(1);
  const [activeDashboardId, setActiveDashboardId] = useState<number | null>(
    null
  );
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <>
      {/* Collapsed state - only show toggle button */}
      {isCollapsed && (
        <div className="fixed left-4 top-4 z-50">
          <Button
            isIconOnly
            variant="light"
            size="md"
            className="text-gray-400 hover:text-gray-600 bg-white shadow-md rounded-lg"
            onClick={onToggleCollapse}
          >
            <SidebarCollapseIcon className="w-6 h-6" isCollapsed={true} />
          </Button>
        </div>
      )}

      {/* Full Sidebar */}
      <aside
        className={`fixed left-0 top-0 bottom-0 w-[280px] bg-white border-r border-gray-100 flex flex-col z-50 transition-transform duration-300 ${
          isCollapsed ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        {/* Header with Logo and Collapse Button */}
        <div className="flex items-center justify-between px-5 py-4">
          {/* Logo */}
          <div className="relative w-12 h-12">
            <img
              src={auraIcon}
              alt="Aura Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Collapse Button */}
          <Button
            isIconOnly
            variant="light"
            size="md"
            className="text-gray-400 hover:text-gray-600"
            onClick={onToggleCollapse}
          >
            <SidebarCollapseIcon className="w-7 h-7" isCollapsed={false} />
          </Button>
        </div>

        {/* Navigation */}
        <div className="px-4 flex-1 flex flex-col overflow-hidden">
          {/* New Thread Button */}
          <Button
            className="w-full bg-[#9810FA] hover:bg-purple-600 text-white font-medium mb-4 h-11 shadow-sm flex items-center justify-start gap-3 px-4"
            radius="full"
          >
            <PlusIcon className="w-5 h-5" />
            <span>New Thread</span>
          </Button>

          {/* Search Threads */}
          <button className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors w-full text-left">
            <SearchIcon className="w-5 h-5 text-gray-400" />
            <span className="text-sm font-medium">Search Threads</span>
          </button>

          {/* History Section */}
          <div>
            <button
              onClick={() => setIsHistoryOpen(!isHistoryOpen)}
              className="flex items-center justify-between px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors w-full text-left"
            >
              <div className="flex items-center gap-3">
                <HistoryIcon className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium">History</span>
              </div>
              <ChevronDownIcon
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                  isHistoryOpen ? "rotate-0" : "-rotate-90"
                }`}
              />
            </button>

            {/* Chat History List */}
            {isHistoryOpen && (
              <div className="mt-1 space-y-0.5 max-h-[280px] overflow-y-auto">
                {chatHistory.map((chat) => (
                  <button
                    key={chat.id}
                    onClick={() => setActiveChatId(chat.id)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors w-full text-left ${
                      activeChatId === chat.id
                        ? "bg-purple-50 border border-purple-200"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <ChatIcon
                      className={`w-4 h-4 flex-shrink-0 ${
                        activeChatId === chat.id
                          ? "text-purple-500"
                          : "text-gray-400"
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-sm truncate ${
                          activeChatId === chat.id
                            ? "text-purple-700 font-medium"
                            : "text-gray-700"
                        }`}
                      >
                        {chat.name}
                      </p>
                      <p className="text-xs text-gray-400">{chat.time}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 my-4 flex-shrink-0" />

          {/* Dashboards Section */}
          <div className="flex items-center justify-between px-3 mb-3 flex-shrink-0">
            <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
              Dashboards
            </span>
            <button className="text-purple-500 hover:text-purple-600 transition-colors">
              <PlusIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Dashboard List - Scrollable */}
          <div className="space-y-1 overflow-y-auto flex-1 min-h-0">
            {dashboards.map((dashboard) => {
              const IconComponent = dashboard.icon;
              const isActive = activeDashboardId === dashboard.id;
              const showUserMenu = dashboard.id === 1 && isUserMenuOpen;
              return (
                <div key={dashboard.id}>
                  <button
                    onClick={() => {
                      setActiveDashboardId(dashboard.id);
                      if (dashboard.id === 1) {
                        setIsUserMenuOpen(!isUserMenuOpen);
                      }
                    }}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors w-full text-left ${
                      isActive
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <IconComponent
                      className={`w-5 h-5 ${
                        isActive ? "text-purple-500" : "text-gray-400"
                      }`}
                    />
                    <span className="text-sm font-medium">
                      {dashboard.name}
                    </span>
                  </button>

                  {/* User Menu Dropdown - appears under Dashboard 1 */}
                  {showUserMenu && (
                    <div className="mt-2 mx-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                      {/* User Info Header */}
                      <div className="px-4 py-4 border-b border-gray-100">
                        <p className="text-base font-semibold text-gray-900">
                          Ilyes Boudjelthia
                        </p>
                        <p className="text-sm text-blue-500">
                          iboudjelthia@futuretail.ai
                        </p>
                      </div>

                      {/* Menu Items */}
                      <div className="py-2">
                        {userMenuItems.map((item) => {
                          const MenuIcon = item.icon;
                          return (
                            <button
                              key={item.id}
                              className="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors w-full text-left"
                            >
                              <MenuIcon className="w-5 h-5 text-gray-500" />
                              <span className="text-sm font-medium">
                                {item.name}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Logout */}
                      <div className="border-t border-gray-100 py-2">
                        <button className="flex items-center gap-4 px-4 py-3 text-red-500 hover:bg-red-50 transition-colors w-full text-left">
                          <LogoutIcon className="w-5 h-5" />
                          <span className="text-sm font-medium">Log Out</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* User Profile */}
        <div className="px-4 py-4 border-t border-gray-100">
          <div className="flex items-center gap-3 px-2">
            <Avatar
              src="https://i.pravatar.cc/150?u=ilyes"
              size="sm"
              className="w-10 h-10"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                Ilyes Boudjelthia
              </p>
              <p className="text-xs text-gray-500 truncate">
                iboudjelthia@futuretail.ai
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
