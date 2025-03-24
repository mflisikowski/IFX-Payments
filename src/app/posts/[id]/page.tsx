import type { Metadata } from "next";

import { fetchPostById, fetchUserById, fetchPosts } from "@/services/api";
import { Button } from "@/components/ui/button";

import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PostPageProps {
  params: Promise<{
    id: number;
  }>;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const posts = await fetchPosts();
    return posts.slice(0, 20).map((post) => ({
      id: post.id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { id } = await params;

  const post = await fetchPostById(id);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.body.substring(0, 160),
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;

  const post = await fetchPostById(id);
  const user = await fetchUserById(post.userId);

  if (!post || !user) {
    return notFound();
  }

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

        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
          </div>
          <div className="mb-6">
            <p className="whitespace-pre-line">{post.body}</p>
          </div>
          <p className="text-sm text-muted-foreground">
            {user.name}
            <span className="text-sm text-muted-foreground">
              ({user.email})
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
