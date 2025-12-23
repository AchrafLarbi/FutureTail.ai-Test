import { useState, useEffect } from "react";
import {
  Header,
  AuraLogo,
  SearchInput,
  ExampleCard,
} from "../../components/home";
import { Sidebar } from "../../components/sidebar/Sidebar";
import {
  CompareIcon,
  TrendIcon,
  ChartIcon,
  BellIcon,
} from "../../components/icons";

const exampleCards = [
  {
    title: "Compare Decathlon running shoes vs Nike & Adidas",
    icon: <CompareIcon className="w-7 h-7" />,
  },
  {
    title: "Track competitor pricing trends for cycling gear",
    icon: <TrendIcon className="w-7 h-7" />,
  },
  {
    title: "Generate market share report for sports equipment",
    icon: <ChartIcon className="w-7 h-7" />,
  },
  {
    title: "Alert me when competitors change camping prices",
    icon: <BellIcon className="w-7 h-7" />,
  },
];

export const WelcomePage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsSidebarCollapsed(true);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-black transition-colors duration-300">
      {/* Overlay for mobile when sidebar is open */}
      {!isSidebarCollapsed && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarCollapsed(true)}
        />
      )}

      {/* Fixed Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* Main wrapper with left margin for sidebar (only on desktop) */}
      <div
        className={`min-h-screen flex flex-col transition-all duration-300 ${
          isSidebarCollapsed ? "ml-0" : "md:ml-[280px] ml-0"
        }`}
      >
        <Header isCollapsed={isSidebarCollapsed} />

        {/* Main content */}
        <main className="flex-1 flex items-center justify-center px-6 py-16">
          <div className="max-w-3xl w-full flex flex-col items-center">
            {/* Logo */}
            <AuraLogo />

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white -mt-5">
              Welcome to{" "}
              <span className="bg-aura-gradient bg-clip-text text-transparent">
                Aura
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl mb-4 text-gray-600 dark:text-gray-300">
              How can I help you today?
            </p>

            {/* Search Input */}
            <SearchInput />

            {/* Examples Section */}
            <div className="w-full mt-10">
              <p className="text-xs font-medium text-[#6A7282] dark:text-gray-400 tracking-wider text-center mb-5 uppercase">
                Get started with an example below
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {exampleCards.map((card, index) => (
                  <ExampleCard
                    key={index}
                    title={card.title}
                    icon={card.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
