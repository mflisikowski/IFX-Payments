"use client";

import type { Post } from "@/models/post";
import type { User } from "@/models/user";

import { PostCard } from "@/components/post-card";
import React, { useState } from "react";
import Link from "next/link";

interface PostListProps {
  posts: Post[];
  users: User[];
}

export const PostList = ({ posts, users }: PostListProps) => {
  const [search, setSearch] = useState("");

  const txtFilter = (text: string) =>
    text.toLowerCase().includes(search.toLowerCase());

  const filteredPosts = posts.filter(
    (post) => txtFilter(post.title) || txtFilter(post.body)
  );

  const getUserById = (userId: number) => {
    return users.find((user) => user.id === userId);
  };

  return (
    <div>
      {filteredPosts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-600 dark:text-gray-300">
            {search ? "No posts match your search." : "No posts available."}
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
