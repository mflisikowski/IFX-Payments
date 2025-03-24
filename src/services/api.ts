import type { Post, NewPost } from "@/models/post";
import type { User } from "@/models/user";

import { API_URL, POSTS_URL } from "@/constants";

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(POSTS_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const fetchPostById = async (id: number): Promise<Post> => {
  try {
    const response = await fetch(`${POSTS_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch post with ID ${id}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching post with ID ${id}:`, error);
    throw error;
  }
};

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const fetchUserById = async (id: number): Promise<User> => {
  try {
    const response = await fetch(`${API_URL}/users/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch user with ID ${id}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error);
    throw error;
  }
};

export const createPost = async (newPost: NewPost): Promise<Post> => {
  try {
    const response = await fetch(POSTS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    if (!response.ok) {
      throw new Error("Failed to create post");
    }

    return response.json();
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};
