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
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
            placeholder={placeholder}
            className="pl-10 pr-10 min-h-12"
            value={inputValue}
            type="text"
          />

          {inputValue && (
            <Button
              variant="ghost"
              type="button"
              size="icon"
              onClick={handleClear}
              className="absolute right-0 top-0 h-full"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
