import PostCard from "./PostCard";
import type { Posts } from "../types";

const posts: Posts[] = [
  { id: 1, title: "First Post", content: "Hello world, this is my first blog post!" },
  { id: 2, title: "Second Post", content: "More content here, exploring the world of blogging." },
  { id: 3, title: "Third Post", content: "Learning React and building amazing applications." },
];

export default function PostList(): React.JSX.Element {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">All Posts</h1>
      <div className="grid gap-6">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}