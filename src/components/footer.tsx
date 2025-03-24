import type { FC } from "react";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  console.log(currentYear);

  return (
    <footer className="bg-white dark:bg-gray-800 py-4 text-center text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          @ {currentYear} - Posts Explorer - Frontend Recruitment Task
        </p>
      </div>
    </footer>
  );
};
