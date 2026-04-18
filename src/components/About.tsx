export default function About():React.JSX.Element{
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Lead Developer",
      bio: "Full-stack developer with expertise in React, TypeScript, and modern web architectures.",
      avatar: "AC"
    },
    {
      name: "Sarah Johnson",
      role: "UX Designer",
      bio: "Passionate about creating intuitive user experiences and beautiful interfaces.",
      avatar: "SJ"
    },
    {
      name: "Mike Williams",
      role: "Content Strategist",
      bio: "Technical writer focused on making complex concepts accessible to developers.",
      avatar: "MW"
    }
  ];

  const milestones = [
    { year: "2020", achievement: "Started as a personal blog" },
    { year: "2021", achievement: "Reached 1,000 monthly readers" },
    { year: "2022", achievement: "Launched newsletter with 5,000 subscribers" },
    { year: "2023", achievement: "Expanded to team of 3 contributors" },
    { year: "2024", achievement: "10,000+ monthly readers and growing" }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#709A84] to-[#5a7f6a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white font-bold text-xs uppercase tracking-widest px-3 py-1 mb-6 rounded-full">
              Our Story
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              About Mini Blog
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              We're a team of passionate developers and designers dedicated to sharing knowledge, 
              exploring new technologies, and building amazing web experiences together.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Mini Blog, we believe in the power of shared knowledge. Our mission is to create 
              a platform where developers can learn, share, and grow together through high-quality 
              technical content and thoughtful discussions.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We focus on practical insights, real-world examples, and emerging trends in web 
              development, design, and technology. Every article is crafted with care to provide 
              value to our readers.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-[#709A84] mb-2">50+</div>
                <div className="text-gray-600 font-medium">Expert Contributors</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-[#709A84] mb-2">200+</div>
                <div className="text-gray-600 font-medium">Published Articles</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">What We Stand For</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#709A84]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-[#709A84] rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Quality Over Quantity</h4>
                  <p className="text-gray-600 text-sm">Every article is thoroughly researched and reviewed for accuracy.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#709A84]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-[#709A84] rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Community First</h4>
                  <p className="text-gray-600 text-sm">We foster an inclusive environment for developers of all levels.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#709A84]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-[#709A84] rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Continuous Learning</h4>
                  <p className="text-gray-600 text-sm">We stay curious and embrace new technologies and methodologies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 italic max-w-2xl mx-auto">
              The passionate individuals behind Mini Blog, dedicated to bringing you the best technical content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-6 text-center">
                <div className="w-20 h-20 bg-[#709A84] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[#709A84] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-gray-600 italic">Key milestones in our growth story</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#709A84]/20"></div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="flex-1"></div>
                <div className="w-4 h-4 bg-[#709A84] rounded-full border-4 border-white shadow-sm"></div>
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 inline-block">
                    <div className="text-lg font-bold text-[#709A84] mb-2">{milestone.year}</div>
                    <div className="text-gray-700">{milestone.achievement}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#709A84] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're a seasoned developer or just starting out, there's a place for you here. 
            Subscribe to our newsletter and never miss an update.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#709A84] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Subscribe to Newsletter
            </button>
            <button className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-[#709A84] transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}