import type { FC } from "react";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 py-4 text-center text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          @ {currentYear ? currentYear : "2025"} - Posts Explorer - Frontend
          Recruitment Task
        </p>
      </div>
    </footer>
  );
};
