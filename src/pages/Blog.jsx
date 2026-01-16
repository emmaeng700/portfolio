import { useState } from "react";

const Blog = () => {
  const [showHireCard, setShowHireCard] = useState(false);
  
  // Sample blog posts - you can expand this
  const [posts] = useState([
    {
      id: 1,
      title: "My Journey into Software Engineering",
      date: "January 15, 2026",
      type: "post",
      content: "Share your story about getting into tech, your challenges, and victories...",
      image: null,
    },
    {
      id: 2,
      title: "Building MateMatch - A ColorStack Hackathon Win",
      date: "January 10, 2026",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
      description: "Watch me explain how I built a housing platform for interns using Next.js, Firebase, and Puppeteer...",
    },
    {
      id: 3,
      title: "Building a Container Runtime in Go",
      date: "December 28, 2025",
      type: "post",
      content: "Learn how I built a Go container runtime from scratch using Linux namespaces and cgroups for process isolation...",
      image: null,
    },
    {
      id: 4,
      title: "Kafka Microservices at Scale",
      date: "January 5, 2026",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
      description: "Deep dive into how I engineered a Kafka streaming system processing 400K+ events/day on Kubernetes...",
    },
    {
      id: 5,
      title: "Machine Learning for Fraud Detection",
      date: "December 15, 2025",
      type: "post",
      content: "Exploring how I'm using ML models to detect fraudulent activity in OTP requests and strengthen security measures...",
      image: null,
    },
    {
      id: 6,
      title: "SQLite Clone in C - NanoSQL",
      date: "December 20, 2025",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
      description: "Walkthrough of building a high-performance SQLite clone with B-tree indexing and persistent storage...",
    },
    {
      id: 7,
      title: "Tips for Aspiring Software Engineers",
      date: "December 5, 2025",
      type: "post",
      content: "Lessons learned and advice for students trying to break into tech, based on my journey at Grambling...",
      image: null,
    },
    {
      id: 8,
      title: "From Research to Production",
      date: "December 10, 2025",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
      description: "My experience transitioning research concepts into production systems at Grambling State University...",
    },
  ]);

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Blog & Pitches</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Welcome to my corner of the internet! Here I share my journey, projects, and pitch videos to showcase my work.
          As a student at Grambling State University, I'm passionate about building impactful software and constantly learning.
        </p>
      </div>

      <div className='mt-12 flex flex-col gap-12'>
        <div className='flex justify-center mb-8'>
          <button
            onClick={() => setShowHireCard(!showHireCard)}
            className='px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105'
          >
            {showHireCard ? '✕ Hide Hiring Info' : '💼 Show Hiring Info'}
          </button>
        </div>

        {showHireCard && (
          <div className='p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200 animate-in fade-in'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              📢 Looking to Hire?
            </h2>
            <p className='text-gray-700 mb-6 leading-relaxed'>
              I'm an aspiring software engineer with hands-on experience in full-stack development, 
              microservices architecture, and machine learning research. I've built production systems 
              processing 400K+ events/day and created impactful projects from scratch. 
              <strong> I'm actively seeking internship and full-time opportunities for Summer 2026.</strong>
            </p>
            <div className='flex gap-4 flex-wrap'>
              <a
                href='/contact'
                className='px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors'
              >
                Get in Touch
              </a>
              <a
                href='https://linkedin.com/in/emmanuel-oppong-acheampong'
                target='_blank'
                rel='noopener noreferrer'
                className='px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors'
              >
                View LinkedIn
              </a>
            </div>
          </div>
        )}
        {posts.map((post) => (
          <article
            key={post.id}
            className='bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300'
          >
            {post.type === 'video' && post.videoUrl ? (
              <div className='aspect-video w-full'>
                <iframe
                  className='w-full h-full'
                  src={post.videoUrl}
                  title={post.title}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
            ) : post.image ? (
              <img
                src={post.image}
                alt={post.title}
                className='w-full h-64 object-cover'
              />
            ) : null}

            <div className='p-6'>
              <div className='flex items-center gap-3 mb-3'>
                <span className='px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium'>
                  {post.type === 'video' ? '📹 Video' : '📝 Post'}
                </span>
                <span className='text-gray-500 text-sm'>{post.date}</span>
              </div>

              <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                {post.title}
              </h2>

              <p className='text-gray-600 leading-relaxed'>
                {post.type === 'video' ? post.description : post.content}
              </p>

              {post.type === 'post' && (
                <button className='mt-4 text-blue-600 hover:text-blue-800 font-semibold transition-colors'>
                  Read More →
                </button>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className='mt-16 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded'>
        <p className='text-sm text-gray-700'>
          <strong>💡 Note:</strong> This is a starter template. Edit <code className='bg-gray-200 px-2 py-1 rounded'>src/pages/Blog.jsx</code> to add your own posts and videos. 
          Replace the sample YouTube embed URLs with your actual video links.
        </p>
      </div>
    </section>
  );
};

export default Blog;
