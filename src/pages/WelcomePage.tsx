import { useState } from "react";
import {
  Header,
  AuraLogo,
  SearchInput,
  ExampleCard,
  Sidebar,
} from "../components";
import {
  CompareIcon,
  TrendIcon,
  ChartIcon,
  BellIcon,
} from "../components/icons";

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
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Fixed Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* Main wrapper with left margin for sidebar */}
      <div
        className={`min-h-screen flex flex-col transition-all duration-300 ${
          isSidebarCollapsed ? "ml-0" : "ml-[280px]"
        }`}
      >
        <Header isCollapsed={isSidebarCollapsed} />

        {/* Main content */}
        <main className="flex-1 flex items-center justify-center px-6 py-16">
          <div className="max-w-3xl w-full flex flex-col items-center">
            {/* Logo */}
            <AuraLogo />

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 -mt-5">
              Welcome to{" "}
              <span className="bg-aura-gradient bg-clip-text text-transparent">
                Aura
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl mb-4">How can I help you today?</p>

            {/* Search Input */}
            <SearchInput />

            {/* Examples Section */}
            <div className="w-full mt-10">
              <p className="text-xs font-medium text-[#6A7282] tracking-wider text-center mb-5 uppercase">
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
