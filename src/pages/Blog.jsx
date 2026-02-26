import { useState } from "react";
import { Link } from "react-router-dom";
import { CTA, PostModal, DescriptionTooltip } from "../components";
import OpenSourceSection from "../components/OpenSourceSection";
import resumePdf from "../assets/EMMANUEL_OPPONG_RESUME.pdf";
import useOpenSourcePRs from "../hooks/useOpenSourcePRs";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { prs, loading, error } = useOpenSourcePRs();
  
  const [posts] = useState([
    {
      id: 1,
      title: "Multi-Tenant SaaS Platform with Ruby on Rails 7",
      date: "Coming Soon",
      type: "post",
      content: "Building a production-grade multi-tenant SaaS dashboard using Ruby on Rails 7, PostgreSQL, and Stripe for subscription billing. The platform will support tenant-scoped data isolation, role-based access control, Hotwire/Turbo for real-time UI updates without a heavy frontend framework, and background job processing with Sidekiq and Redis. Deployed on Heroku with CI/CD via GitHub Actions. Rails powers Shopify, GitHub, and HubSpot — this project targets exactly that stack.",
      image: null,
    },
    {
      id: 2,
      title: "Multi-Tenant SaaS Platform — Architecture Walkthrough",
      date: "Coming Soon",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
      description: "Video walkthrough of the multi-tenant Rails SaaS app — covering tenant isolation strategy, Stripe billing integration, Hotwire live updates, and Sidekiq background jobs.",
    },
    {
      id: 3,
      title: "Real-Time Payment Processing Pipeline with Spring Boot & Apache Kafka",
      date: "Coming Soon",
      type: "post",
      content: "Building an event-driven, distributed payment processing system using Java Spring Boot and Apache Kafka. The system will handle high-throughput transaction ingestion across multiple Kafka topics, implement idempotent consumers for exactly-once processing, persist validated transactions via Spring Data JPA to PostgreSQL, and expose REST endpoints for balance queries and transaction history. Containerized with Docker and orchestrated on Kubernetes — mirroring the architecture used at JPMorgan, LinkedIn, and Uber.",
      image: null,
    },
    {
      id: 4,
      title: "Spring Boot + Kafka Payment Pipeline — Live Demo",
      date: "Coming Soon",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
      description: "Live demo of the event-driven payment processing pipeline — showing Kafka topic configuration, consumer group behavior, transaction validation, and real-time balance updates under load.",
    },
    {
      id: 5,
      title: "Cloud-Native Full-Stack App with Next.js, AWS EC2 & S3",
      date: "Coming Soon",
      type: "post",
      content: "Building and deploying a full-stack cloud-native application using Next.js 14 (App Router), TypeScript, and AWS infrastructure. Features include server-side rendering, file uploads directly to S3 via presigned URLs, static assets served through CloudFront CDN, a PostgreSQL database on AWS RDS, and the Next.js app hosted on EC2 behind an Application Load Balancer. Auth handled with NextAuth.js and JWT. This mirrors the deployment stack at companies like Vercel, Airbnb, and most modern AWS-native startups.",
      image: null,
    },
    {
      id: 6,
      title: "Next.js + AWS Deployment — Full Walkthrough",
      date: "Coming Soon",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
      description: "End-to-end walkthrough of deploying a Next.js app on AWS — covering EC2 setup, S3 presigned uploads, CloudFront CDN config, RDS connection, and ALB routing.",
    },
    {
      id: 7,
      title: "Android Fitness Tracker with Kotlin & Jetpack Compose",
      date: "Coming Soon",
      type: "post",
      content: "Building a native Android fitness tracking app using Kotlin and Jetpack Compose for a fully declarative UI. The app will track workouts, log daily activity using the Health Connect API, store data locally with Room database, sync to Firebase Firestore for cross-device access, and send push notifications via FCM. Follows MVVM architecture with Hilt for dependency injection and Kotlin Coroutines for async operations. Android development is core at Google, Meta, TikTok, and every consumer-facing company.",
      image: null,
    },
    {
      id: 8,
      title: "Android Fitness App — Feature Demo",
      date: "Coming Soon",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
      description: "Demo of the Kotlin Jetpack Compose fitness tracker — showing workout logging, Health Connect integration, Firebase sync, and push notification flows.",
    },
    {
      id: 9,
      title: "Distributed Key-Value Store in Go with gRPC & Raft Consensus",
      date: "Coming Soon",
      type: "post",
      content: "Building a fault-tolerant distributed key-value store in Go using gRPC for inter-node communication and a simplified Raft consensus algorithm for leader election and log replication. The system will support consistent reads, linearizable writes, automatic failover, and a CLI client built with Cobra. Protocol Buffers for efficient serialization. This is exactly the class of systems that powers etcd, Consul, and CockroachDB — and demonstrates deep distributed systems knowledge valued at Google, Cloudflare, and Uber.",
      image: null,
    },
    {
      id: 10,
      title: "Distributed Key-Value Store — Architecture Deep Dive",
      date: "Coming Soon",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
      description: "Deep dive into the Go distributed KV store — covering Raft leader election, log replication, gRPC service definitions, and fault tolerance under node failure.",
    },
    {
      id: 11,
      title: "Cross-Platform Mobile App with Flutter & Firebase",
      date: "Coming Soon",
      type: "post",
      content: "Building a cross-platform productivity app using Flutter and Dart that runs on both iOS and Android from a single codebase. Features include Firebase Auth for sign-in, Firestore for real-time data sync, Firebase Storage for file attachments, local notifications, and offline support with local caching. State management with Riverpod and clean architecture separating UI, domain, and data layers. Flutter is used in production at Google, Alibaba, BMW, and eBay.",
      image: null,
    },
    {
      id: 12,
      title: "Flutter Productivity App — Live Demo",
      date: "Coming Soon",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
      description: "Live demo of the Flutter cross-platform app running on Android and iOS — showing real-time Firestore sync, offline mode, Firebase Auth flows, and local notifications.",
    },
    {
      id: 13,
      title: "High-Performance HTTP Load Balancer in Rust",
      date: "Coming Soon",
      type: "post",
      content: "Building a high-performance, async HTTP/1.1 load balancer in Rust using the Tokio async runtime and Hyper HTTP library. The load balancer will support round-robin and least-connections algorithms, health checks with automatic backend removal, connection pooling, and request/response logging. Zero-cost abstractions and Rust's ownership model make this a natural fit for latency-sensitive infrastructure. Rust is used in production at Cloudflare, Discord, AWS, and Meta for exactly this kind of systems work.",
      image: null,
    },
    {
      id: 14,
      title: "Rust HTTP Load Balancer — Benchmarks & Walkthrough",
      date: "Coming Soon",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
      description: "Walkthrough and benchmarks of the Rust async load balancer — covering Tokio task spawning, Hyper reverse proxy setup, health check logic, and performance comparisons against NGINX.",
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

      <OpenSourceSection prs={prs} loading={loading} error={error} />

      <div className='mt-12 flex flex-col gap-12'>
        <div className='p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200 animate-in fade-in flex flex-col gap-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-2'>
            Why Emmanuel?
          </h2>

          <p className='text-gray-700 leading-relaxed'>
            Most CS students can talk about data structures. Emmanuel ships production systems.
          </p>

          <p className='text-gray-700 leading-relaxed'>
            As a junior at Grambling State University (GPA 3.93, Dean&apos;s List &apos;24 &amp; &apos;25), he has already done two software engineering internships — at{' '}
            <strong>Ericsson</strong> and <strong>Noon</strong> — where he engineered Kafka microservices processing{' '}
            <strong>400K+ events/day</strong>, built React dashboards that cut incident resolution time from 60 minutes to 10,
            and deployed IoT pipelines that reduced downtime detection by 40%. These aren&apos;t side projects —
            they ran in production environments serving real engineering teams.
          </p>

          <p className='text-gray-700 leading-relaxed'>
            Outside of internships, Emmanuel builds systems that go deep. He implemented a container runtime in Go
            using Linux namespaces and cgroups, wrote a SQLite-clone database engine in C with B-tree indexing
            from scratch, and co-built a Kubernetes orchestration tool with a Java K8s client — not because a
            class required it, but because he wanted to understand how these things actually work.
          </p>

          <p className='text-gray-700 leading-relaxed'>
            He won the <strong>ColorStack 2024 Winter Hackathon</strong> out of 1,000 participants worldwide,
            is the <strong>Assistant Vice-President of NSBE</strong> at Grambling where he built a 300+ member
            community, and is currently conducting ML research under faculty supervision — exploring adaptive
            OTP security systems powered by Redis and anomaly detection models.
          </p>

          <p className='text-gray-700 leading-relaxed'>
            What makes Emmanuel different is the range. He can reason about distributed systems architecture,
            write performant low-level C, build polished full-stack UIs, train ML models, and lead people —
            all before his senior year. He picks up new stacks fast, takes ownership seriously, and consistently
            delivers work that goes beyond the minimum.
          </p>

          <p className='text-gray-800 font-semibold'>
            He is actively seeking internship and new grad opportunities for Summer 2026 and beyond.
            If you&apos;re building something that matters, he wants to be part of it.
          </p>

          <div className='flex gap-4 flex-wrap'>
            <Link
              to='/contact'
              className='px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors'
            >
              Get in Touch
            </Link>
            <a
              href='https://linkedin.com/in/emmanuel-oppong-acheampong'
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors'
            >
              View LinkedIn
            </a>
          </div>

          <div className='mt-6 bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden'>
            <div className='px-4 py-3 flex items-center justify-between bg-slate-50 border-b border-slate-200'>
              <span className='font-semibold text-slate-700'>Resume (view-only)</span>
              <span className='text-xs text-slate-500'>Toolbar hidden; downloads disabled</span>
            </div>
            <div className='h-[75vh] sm:h-[85vh] lg:h-[92vh] overflow-y-auto'>
              <iframe
                title='Emmanuel Oppong resume preview'
                src={`${resumePdf}#toolbar=0&navpanes=0&scrollbar=0`}
                className='w-full h-full min-h-[75vh] sm:min-h-[85vh] lg:min-h-[92vh]'
                loading='lazy'
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
        {posts.map((post) => (
          <article
            key={post.id}
            className={`bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300 ${
              post.type === 'video' ? 'flex flex-col' : ''
            }`}
          >
            {post.type === 'video' && post.videoUrl ? (
              <div className='flex-1 w-full min-h-0'>
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

            <div 
              className={`${post.type === 'video' ? 'p-4 flex-shrink-0' : 'p-6'} relative`}
            >
              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-2'>
                  <span className='px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium'>
                    {post.type === 'video' ? '📹 Video' : '📝 Post'}
                  </span>
                  <span className='text-gray-500 text-sm'>{post.date}</span>
                </div>

                <h2 className={`font-bold text-gray-900 mb-2 ${post.type === 'video' ? 'text-lg' : 'text-2xl'}`}>
                  {post.title}
                </h2>

                {post.type === 'video' ? (
                  <DescriptionTooltip description={post.description} />
                ) : (
                  <p className='text-gray-600 leading-relaxed'>
                    {post.content}
                  </p>
                )}

                {post.type === 'post' && (
                  <button 
                    onClick={() => {
                      setSelectedPost(post);
                      setIsModalOpen(true);
                    }}
                    className='mt-4 text-blue-600 hover:text-blue-800 font-semibold transition-colors'
                  >
                    Read More →
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />

      <PostModal 
        post={selectedPost} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Blog;
