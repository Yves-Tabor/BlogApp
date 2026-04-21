import { useParams } from "react-router-dom";
import { postsData } from "../../public/data/dataToPost";
import { Link } from "react-router-dom";

function PostDetail(): React.JSX.Element {
  const { id } = useParams();
  const postId = parseInt(id || "1");
  const post = postsData.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-8">The post you're looking for doesn't exist.</p>
        <Link 
          to="/posts"
          className="bg-[#709A84] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#5a7f6a] transition-colors duration-200"
        >
          Back to Posts
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link 
              to="/posts"
              className="text-[#709A84] hover:text-[#5a7f6a] font-medium flex items-center gap-2 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Posts
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-3 h-3 bg-[#709A84] rounded-full"></div>
            <span className="bg-[#709A84]/10 text-[#709A84] text-xs font-bold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">{post.readTime} read</span>
            <span className="text-gray-500 text-sm">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>
        </header>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              {post.content}
            </p>
            
            {/* Additional content sections */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#709A84] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Understanding the core concepts and principles</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#709A84] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Practical implementation strategies and best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#709A84] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Real-world applications and case studies</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed">
                This comprehensive guide covers the essential aspects of {post.title.toLowerCase()}. 
                By following these principles and techniques, you'll be well-equipped to implement 
                these concepts in your own projects and achieve better results.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#709A84] rounded-full flex items-center justify-center text-white font-bold">
                MB
              </div>
              <div>
                <div className="font-semibold text-gray-900">Mini Blog</div>
                <div className="text-sm text-gray-600">Sharing knowledge, building community</div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="text-[#709A84] hover:text-[#5a7f6a] font-medium transition-colors duration-200">
                Share
              </button>
              <button className="text-[#709A84] hover:text-[#5a7f6a] font-medium transition-colors duration-200">
                Bookmark
              </button>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}

export default PostDetail;