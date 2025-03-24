"use client";

import { ArrowLeft, AlertTriangle } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorComponentProps) {
  useEffect(() => {
    console.error("Post error:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-4">
          <Link href="/posts">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4" />
              Back to posts
            </Button>
          </Link>
        </div>

        <div>
          <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-2" />
          <h1 className="text-2xl font-bold tracking-tight">
            Something went wrong
          </h1>
          <p className="text-muted-foreground mb-4">
            We couldn't load the post you were looking for.
          </p>
        </div>
      </div>
    </main>
  );
}
