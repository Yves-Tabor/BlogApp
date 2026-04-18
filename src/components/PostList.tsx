import PostCard from "./PostCard";

export default function PostList({current, posts}: {current: number, posts: any[]}): React.JSX.Element {
    const postPerPage = 10;
    const startIndex = (current - 1) * postPerPage;
    const endIndex = startIndex + postPerPage;
    const currentPosts = posts.slice(startIndex, endIndex);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid gap-6">
        {currentPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}