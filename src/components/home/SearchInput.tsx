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
} from "../icons";

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
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full">
      {/* Main Input Container */}
      <div
        className={`bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:border-gray-300 dark:hover:border-gray-600 focus-within:border-purple-400 transition-all duration-300 ${
          isFocused || inputValue ? "min-h-[140px]" : ""
        }`}
      >
        {/* Input Row */}
        <div className="flex items-start px-4 py-3">
          <StarIcon className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0 mt-1" />
          <textarea
            placeholder="Ask AI a question or make a request..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`flex-1 mx-3 text-base text-gray-600 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none bg-transparent resize-none transition-all duration-300 ${
              isFocused || inputValue ? "h-[80px]" : "h-[24px]"
            }`}
          />
        </div>

        {/* Bottom Row with Dropdown and Send Button */}
        <div className="flex items-center justify-between px-3 pb-3">
          {/* Assistant Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <RobotIcon className="w-4 h-4 text-purple-500" />
              <span className="font-medium">{selectedAssistant.name}</span>
              <ChevronDownIcon
                className={`w-4 h-4 text-gray-400 dark:text-gray-500 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden z-50">
                {/* Assistant List */}
                <div className="py-2">
                  {assistants.map((assistant) => (
                    <button
                      key={assistant.id}
                      onClick={() => {
                        setSelectedAssistant(assistant);
                        setIsDropdownOpen(false);
                      }}
                      className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <RobotIcon className="w-5 h-5 text-purple-500" />
                        <div className="text-left">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {assistant.name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {assistant.model}
                          </p>
                        </div>
                      </div>
                      <InfoIcon className="w-5 h-5 text-gray-300 dark:text-gray-600 hover:text-gray-400" />
                    </button>
                  ))}
                </div>

                {/* Actions */}
                <div className="border-t border-gray-100 dark:border-gray-700 py-2">
                  <button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <PlusIcon className="w-5 h-5 text-purple-500" />
                    <span className="text-sm font-medium text-purple-500">
                      Create New Assistant
                    </span>
                  </button>
                  <button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <SettingsIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
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
            className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-300 rounded-lg"
          >
            <SendIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
