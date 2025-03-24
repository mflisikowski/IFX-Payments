import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-4">
          <Link href="/posts">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to posts
            </Button>
          </Link>
        </div>

        <div className="animate-pulse">
          <div className="mb-6">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2" />
          </div>

          <div className="space-y-3 mb-6">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
          </div>

          <div className="space-y-2 mt-4">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24" />
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-40" />
          </div>
        </div>
      </div>
    </main>
  );
}
