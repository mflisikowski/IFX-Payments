"use client";

import type { Post } from "@/models/post";
import type { User } from "@/models/user";

import { PostCard } from "@/components/post-card";
import SearchBar from "@/components/search-bar";
import React, { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

interface PostListProps {
  posts: Post[];
  users: User[];
}

export const PostList = ({ posts, users }: PostListProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const txtFilter = (text: string) =>
    text.toLowerCase().includes(searchTerm.toLowerCase());

  const filteredPosts = posts.filter(
    (post) => txtFilter(post.title) || txtFilter(post.body)
  );

  const getUserById = (userId: number) => {
    return users.find((user) => user.id === userId);
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4 w-full mb-6">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          placeholder="Search posts..."
        />

        <Link
          className="inline-flex items-center justify-center min-w-10 min-h-10 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap gap-2 px-4 py-2"
          href="/posts/new"
        >
          <Plus className="h-5 w-5 flex-shrink-0" />
          <span className="hidden sm:block text-sm font-medium">Add Post</span>
        </Link>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-600 dark:text-gray-300">
            {searchTerm ? "No posts match your search." : "No posts available."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link key={post.id} href={`/posts/${post.id}`}>
              <PostCard post={post} user={getUserById(post.userId)} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
