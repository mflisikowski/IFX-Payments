export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface NewPost extends Omit<Post, "id"> {}
