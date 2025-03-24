import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import PostForm from "@/components/post-form";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewPostPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-4">
          <Link href="/posts">
            <Button className="cursor-pointer" variant="outline">
              <ArrowLeft className="h-4 w-4" />
              Back to posts
            </Button>
          </Link>
        </div>

        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-6">
            Create New Post
          </h1>
          <PostForm />
        </div>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Create New Post",
  description: "Create a new post",
};
