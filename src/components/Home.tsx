import { Link } from "react-router-dom";
import { postsData } from "../../public/data/dataToPost";

export default function Home():React.JSX.Element{
  const featuredPosts = postsData.slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#709A84] to-[#5a7f6a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white font-bold text-xs uppercase tracking-widest px-3 py-1 mb-6 rounded-full">
                Featured Article
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Building Modern Web Applications
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
                Exploring the intersection of design, code, and user experience to create exceptional digital products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/posts/1"
                  className="bg-white text-[#709A84] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-center"
                >
                  Read Featured Article
                </Link>
                <button className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-[#709A84] transition-all duration-200">
                  View All Posts
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded p-4 text-center">
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-sm opacity-80">Articles</div>
                  </div>
                  <div className="bg-white/5 rounded p-4 text-center">
                    <div className="text-3xl font-bold">10K+</div>
                    <div className="text-sm opacity-80">Readers</div>
                  </div>
                  <div className="bg-white/5 rounded p-4 text-center">
                    <div className="text-3xl font-bold">25+</div>
                    <div className="text-sm opacity-80">Topics</div>
                  </div>
                  <div className="bg-white/5 rounded p-4 text-center">
                    <div className="text-3xl font-bold">4.9</div>
                    <div className="text-sm opacity-80">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      </section>

      {/* Recent Posts Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Recent Articles</h2>
            <p className="text-gray-600 italic">Latest insights on web development and design</p>
          </div>
          <div className="hidden md:block">
            <span className="text-xs font-bold text-[#709A84] uppercase tracking-widest">Vol. 2024 / Issue 12</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article key={post.id} className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="text-xs text-gray-500 italic">{post.readTime} read</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#709A84] transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="bg-[#709A84]/10 text-[#709A84] text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <Link 
                    to={`/posts/${post.id}`}
                    className="text-[#709A84] font-medium hover:text-[#5a7f6a] transition-colors text-sm"
                  >
                    Read more
                  </Link>
                </div>
              </div>
              
              {post.featured && (
                <div className="h-1 bg-gradient-to-r from-[#709A84] to-[#8fb5a0]"></div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#709A84] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our newsletter for weekly insights on web development, design patterns, and the latest tech trends.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button 
              type="submit"
              className="bg-white text-[#709A84] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
        
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
      </section>
    </main>
  );
}