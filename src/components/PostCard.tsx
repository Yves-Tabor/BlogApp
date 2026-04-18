
import { Link } from "react-router-dom";
import type { Posts } from "../types";

function PostCard({ post }: { post: Posts }): React.JSX.Element {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="flex items-center mb-3">
          <div className="w-2 h-8 bg-[#709A84] rounded-full mr-3"></div>
          <h2 className="text-2xl font-semibold text-gray-800 hover:text-[#709A84] transition-colors duration-200">
            {post.title}
          </h2>
        </div>
        
        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
          {post.content}
        </p>
        
        <div className="flex items-center justify-between">
          <Link 
            to={`/posts/${post.id}`}
            className="inline-flex items-center text-[#709A84] font-medium hover:text-[#5a7f6a] transition-colors duration-200 group"
          >
            <span>Read more</span>
            <svg 
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>2 min read</span>
          </div>
        </div>
      </div>
      
      <div className="h-1 bg-gradient-to-r from-[#709A84] to-[#8fb5a0]"></div>
    </div>
  );
}

export default PostCard;
