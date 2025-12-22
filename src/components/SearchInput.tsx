import { useState } from "react";
import { Button } from "@heroui/react";
import {
  StarIcon,
  RobotIcon,
  SendIcon,
  ChevronDownIcon,
  PlusIcon,
  SettingsIcon,
  InfoIcon,
} from "./icons";

const assistants = [
  { id: 1, name: "Analytics Pro", model: "GPT-4 Turbo" },
  { id: 2, name: "Price Monitor", model: "Claude 3.5" },
  { id: 3, name: "Market Insight", model: "GPT-4" },
  { id: 4, name: "Competitor Track", model: "Gemini Pro" },
];

export const SearchInput = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedAssistant, setSelectedAssistant] = useState(assistants[0]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="w-full">
      {/* Main Input Container */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-gray-300 focus-within:border-purple-400 transition-colors">
        {/* Input Row */}
        <div className="flex items-center px-4 py-3">
          <StarIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Ask AI a question or make a request..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 mx-3 text-base text-gray-600 placeholder:text-gray-400 outline-none bg-transparent"
          />
        </div>

        {/* Bottom Row with Dropdown and Send Button */}
        <div className="flex items-center justify-between px-3 pb-3">
          {/* Assistant Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <RobotIcon className="w-4 h-4 text-purple-500" />
              <span className="font-medium">{selectedAssistant.name}</span>
              <ChevronDownIcon
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
                {/* Assistant List */}
                <div className="py-2">
                  {assistants.map((assistant) => (
                    <button
                      key={assistant.id}
                      onClick={() => {
                        setSelectedAssistant(assistant);
                        setIsDropdownOpen(false);
                      }}
                      className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <RobotIcon className="w-5 h-5 text-purple-500" />
                        <div className="text-left">
                          <p className="text-sm font-medium text-gray-900">
                            {assistant.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {assistant.model}
                          </p>
                        </div>
                      </div>
                      <InfoIcon className="w-5 h-5 text-gray-300 hover:text-gray-400" />
                    </button>
                  ))}
                </div>

                {/* Actions */}
                <div className="border-t border-gray-100 py-2">
                  <button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-50 transition-colors">
                    <PlusIcon className="w-5 h-5 text-purple-500" />
                    <span className="text-sm font-medium text-purple-500">
                      Create New Assistant
                    </span>
                  </button>
                  <button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-50 transition-colors">
                    <SettingsIcon className="w-5 h-5 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">
                      Manage Assistants
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Send Button */}
          <Button
            isIconOnly
            size="sm"
            className="bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-lg"
          >
            <SendIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
