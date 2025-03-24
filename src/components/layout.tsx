import type { ReactNode, FC } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto py-8 px-4">{children}</main>
    </div>
  );
};
