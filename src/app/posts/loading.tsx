// Generate static post skeleton items to avoid using index as keys
const SKELETON_ITEMS = [
  { id: "skeleton-1" },
  { id: "skeleton-2" },
  { id: "skeleton-3" },
  { id: "skeleton-4" },
  { id: "skeleton-5" },
  { id: "skeleton-6" },
];

export default function Loading() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          All Posts
        </h1>

        <div>
          <div className="flex items-center justify-between gap-4 w-full mb-6">
            <div className="relative flex-1">
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-md w-full animate-pulse" />
            </div>

            <div className="inline-flex items-center justify-center min-w-12 min-h-12 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse px-6 py-2">
              <div className="h-5 w-5 rounded-full" />
              <div className="hidden sm:block h-4 w-16 bg-gray-300 dark:bg-gray-600 ml-2 rounded" />
            </div>

            <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse flex items-center justify-center">
              <div className="h-5 w-5 rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKELETON_ITEMS.map((item) => (
              <PostCardSkeleton key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function PostCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow flex flex-col h-[350px] overflow-hidden animate-pulse">
      <div className="h-24 p-6 border-b border-gray-200">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
      </div>

      <div className="flex-1 p-6">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-3 w-full" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-3 w-full" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
      </div>

      <div className="h-16 p-6 border-t border-gray-200 flex items-center">
        <div className="flex items-center space-x-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-28" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-36" />
        </div>
      </div>
    </div>
  );
}
