"use client";

import type { NewPost } from "@/models/post";

import { createPost } from "@/services/api";
import { PostTitle } from "@/components/fields/post-title";
import { PostBody } from "@/components/fields/post-body";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PostForm() {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    userId: 1,
    title: "",
    body: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.body) {
      alert("Please fill all fields");
      return;
    }

    try {
      setIsSubmitting(true);

      const newPost: NewPost = {
        ...formData,
      };

      await createPost(newPost);
      router.push("/posts");
      router.refresh();
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-4">
        <PostTitle value={formData.title} onChange={handleChange} />
        <PostBody value={formData.body} onChange={handleChange} />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 justify-center sm:justify-end">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? "Submitting..." : "Create Post"}
        </Button>
      </div>
    </form>
  );
}
