import { fetchPosts } from "@/services/api";
import { fetchUsers } from "@/services/api";
import { PostList } from "@/components/post-list";

export default async function Posts() {
  const [posts, users] = await Promise.all([fetchPosts(), fetchUsers()]);

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          All Posts
        </h1>

        <PostList posts={posts} users={users} />
      </div>
    </main>
  );
}
