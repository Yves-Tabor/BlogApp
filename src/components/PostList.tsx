import PostCard from "./PostCard";
import { postsData } from "../../public/data/dataToPost";
import React from 'react';

export default function PostList({current, posts}: {current: number, posts: typeof postsData}): React.JSX.Element {
  const startIndex = (current - 1) * 10;
  const endIndex = startIndex + 10;
  const currentPosts = posts.slice(startIndex, endIndex);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">All Posts</h1>
      <div className="grid gap-6">
        {currentPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}