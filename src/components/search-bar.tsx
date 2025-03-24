"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  setSearchTerm: (term: string) => void;
  placeholder?: string;
  searchTerm: string;
}

export default function SearchBar({
  setSearchTerm,
  placeholder = "Search posts...",
  searchTerm,
}: SearchBarProps) {
  const [inputValue, setInputValue] = useState(searchTerm);

  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  };

  const handleClear = () => {
    setInputValue("");
    setSearchTerm("");
  };

  return (
    <div className="w-full mb-6">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
            placeholder={placeholder}
            className="pl-10 pr-10"
            value={inputValue}
            type="text"
          />

          {inputValue && (
            <Button
              className="absolute right-0 top-0 h-full aspect-square text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              variant="ghost"
              type="button"
              size="icon"
              onClick={handleClear}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
