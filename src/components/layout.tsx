import type { ReactNode, FC } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Header title="Posts Explorer" />
      <main className="container mx-auto py-8 px-4">{children}</main>
      <Footer />
    </div>
  );
};
