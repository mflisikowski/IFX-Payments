import type { Post } from "@/models/post";
import type { User } from "@/models/user";

import { CardContent } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardFooter } from "@/components/ui/card";
import { Card } from "@/components/ui/card";

interface PostCardProps {
  post: Post;
  user?: User;
}

export function PostCard({ post, user }: PostCardProps) {
  return (
    <Card className="flex flex-col h-[350px] overflow-hidden transition-shadow hover:shadow-lg dark:hover:shadow-black/20">
      <CardHeader className="h-24 border-b border-gray-200 dark:border-gray-800">
        <h2 className="line-clamp-2 text-2xl font-bold tracking-tight m-0">
          {post.title}
        </h2>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <p className="line-clamp-3 text-muted-foreground">{post.body}</p>
      </CardContent>
      <CardFooter className="h-16 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
        {user && (
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">{user?.name}</span>
            <span className="text-sm text-muted-foreground">
              ({user?.email})
            </span>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
