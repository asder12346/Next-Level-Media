
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MetaballBackground from './components/MetaballBackground';
import {
  TrendingUp, Sparkles, Users, Layers, BarChart,
  Mail, Phone, Instagram, Twitter, Linkedin,
  CheckCircle2, Target, Rocket, Briefcase,
  ShieldCheck, Zap, MessageSquare, Send, ChevronDown, ChevronLeft, ChevronRight, Quote
} from 'lucide-react';

const Home: React.FC = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Next Level Media transformed our digital presence. Our engagement increased by 200% in just two months! Their team understands the nuances of modern social media unlike anyone else.",
      author: "Sarah Jenkins",
      role: "CEO of TechFlow",
      image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      text: "The videography team is top-notch. They captured our brand story perfectly and the final edits were polished beyond our expectations. A true competitive advantage for any business.",
      author: "David Chen",
      role: "Founder of Artisan Brews",
      image: "https://i.pravatar.cc/150?u=david"
    },
    {
      text: "Professional, creative, and data-driven. Highly recommend for any startup looking to scale. They don't just provide services; they provide measurable results that actually move the needle.",
      author: "Maria Rodriguez",
      role: "Marketing Director at GrowthScale",
      image: "https://i.pravatar.cc/150?u=maria"
    }
  ];

  const processSteps = [
    {
      title: "Discovery",
      desc: "We dive deep into your brand, goals, and audience to uncover unique opportunities.",
      icon: <Target className="w-8 h-8" />,
      color: "blue",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
    },
    {
      title: "Strategy",
      desc: "Creating a bespoke roadmap tailored to your specific market and growth targets.",
      icon: <Layers className="w-8 h-8" />,
      color: "blue",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
    },
    {
      title: "Execution",
      desc: "Our creative team brings the strategy to life with high-impact content and precision.",
      icon: <Rocket className="w-8 h-8" />,
      color: "blue",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80"
    },
    {
      title: "Results",
      desc: "Continuous monitoring, scaling, and reporting to ensure sustainable long-term growth.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "blue",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setCoords({
        x: Math.round((e.clientX / window.innerWidth) * 100),
        y: Math.round((e.clientY / window.innerHeight) * 100)
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-blue-100 scroll-smooth relative">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-[60] py-6 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 font-pp text-xl font-bold tracking-tight">
              <div className="flex -space-x-2">
                <div className="w-5 h-5 rounded-full bg-black"></div>
                <div className="w-5 h-5 rounded-full bg-black/20 backdrop-blur-sm"></div>
              </div>
              <span className="ml-2 uppercase tracking-tighter">Next Level Media</span>
            </div>
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#home" className="hover:text-black transition-colors">Home</a>
              <a href="#about" className="hover:text-black transition-colors">About</a>
              <Link to="/services" className="hover:text-black transition-colors">Services</Link>
              <a href="#process" className="hover:text-black transition-colors">Process</a>
              <a href="#contact" className="hover:text-black transition-colors">Contact</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-6 py-2 bg-white border border-black rounded-full text-sm font-bold transition-all hover:bg-black hover:text-white">work with us</button>
          </div>
        </div>
      </header>

      <main className="relative pt-32">
        {/* Hero Section */}
        <section id="home" className="max-w-7xl mx-auto px-8 mb-20">
          <div className="bg-slate-50 rounded-[4rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[800px] border border-black/5 shadow-2xl shadow-black/5">
            {/* Left Content */}
            <div className="p-12 lg:p-24 flex flex-col justify-center relative">
              {/* Badge */}
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-sm tracking-tight">20k+ Happy Clients</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Read Our <span className="underline decoration-slate-300">Success Stories</span></div>
                </div>
              </div>

              <h1 className="text-7xl lg:text-[8.0rem] font-serif font-black leading-[0.85] tracking-tight mb-12">
                From <br />
                Invisible <br />
                <span className="italic font-light text-slate-300 block mt-2 text-5xl lg:text-[7rem]">to <br className="hidden lg:block" /> Unforget-</span>
                <span className="italic font-light text-slate-300 block mt-2 text-5xl lg:text-[7rem]">table.</span>
              </h1>

              <div className="w-full h-px bg-slate-200 mb-12"></div>

              <p className="text-lg text-slate-500 mb-12 max-w-md leading-relaxed">
                Transform your business with expert social media management, digital marketing, videography, and video editing. We help small businesses, startups, and professionals build an unstoppable online presence.
              </p>

              {/* Rating Strip */}
              <div className="flex items-center gap-4 mb-12 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-white max-w-fit">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                    </div>
                  ))}
                </div>
                <div className="h-8 w-px bg-slate-200"></div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Sparkles key={i} className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                    <span className="text-xs font-bold ml-1">4.9 / 5.0</span>
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Loved the performance</p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <button className="px-10 py-5 bg-black text-white rounded-full font-bold transition-all hover:scale-105 hover:bg-slate-900 shadow-xl shadow-black/10">Start Transformation</button>
                <a href="#services" className="flex items-center gap-2 font-bold text-sm group">
                  Explore Services
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                </a>
              </div>
            </div>

            {/* Right Visuals */}
            <div className="relative bg-slate-100 flex items-center justify-center p-12 lg:p-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-black/5"></div>

              <div className="relative w-full max-w-[500px] aspect-[4/5]">
                {/* Main Image Container */}
                <div className="absolute inset-0 bg-black rounded-[4rem] overflow-hidden shadow-2xl">
                  <img src="/hero-image.png" className="w-full h-full object-cover" alt="Hero" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
                    </button>
                  </div>
                </div>

                {/* Floating Message Bubbles */}
                <div className="absolute top-[20%] -left-16 space-y-4">
                  <div className="bg-white px-6 py-4 rounded-3xl shadow-2xl flex items-center gap-4 animate-bounce [animation-delay:-0.5s]">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-sm font-bold">How is the fit?</span>
                  </div>
                  <div className="bg-white px-6 py-4 rounded-3xl shadow-2xl flex items-center gap-4 ml-12 animate-bounce">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-sm font-bold">Do you like the design?</span>
                  </div>
                </div>

                {/* Stats Card */}
                <div className="absolute top-10 -right-12 enhanced-glass p-8 rounded-[2.5rem] w-56 transform rotate-3 hover:rotate-0 transition-transform">
                  <div className="text-[10px] uppercase font-bold text-slate-500 mb-2 tracking-widest">— GROWTH</div>
                  <div className="text-5xl font-black font-serif mb-2">94%</div>
                  <div className="text-xs font-medium text-slate-500 leading-tight">Increase in engagement for our clients</div>
                </div>

                {/* Product Card */}
                <div className="absolute bottom-10 -right-16 enhanced-glass p-5 rounded-[2.5rem] w-64 flex items-center gap-5 transform -rotate-2 hover:rotate-0 transition-transform">
                  <div className="w-20 h-20 bg-white rounded-2xl overflow-hidden shadow-inner border border-black/5">
                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" className="w-full h-full object-cover" alt="product" />
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-tight mb-1">Impact Analysis</div>
                    <div className="text-xl font-black font-serif">$12k+</div>
                    <div className="flex items-center gap-1 mt-1">
                      <Sparkles className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
                      <span className="text-[10px] font-bold">Monthly ROI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Cloud - Carousel */}
        <section className="py-20 border-b border-black/5 overflow-hidden">
          <div className="flex whitespace-nowrap animate-scroll-left hover:pause">
            <div className="flex items-center gap-20 px-10">
              {[
                { name: 'Rakuten', slug: 'rakuten', color: '#BF0000' },
                { name: 'Dropbox', slug: 'dropbox', color: '#0061FF' },
                { name: 'Apple', slug: 'apple', color: '#000000' },
                { name: 'Google', slug: 'google', color: '#4285F4' },
                { name: 'Meta', slug: 'meta', color: '#0668E1' },
                { name: 'Netflix', slug: 'netflix', color: '#E50914' }
              ].map(logo => (
                <div key={logo.name} className="flex items-center gap-4 group cursor-default">
                  <img
                    src={`https://cdn.simpleicons.org/${logo.slug}/${logo.color.replace('#', '')}`}
                    alt={logo.name}
                    className="w-10 h-10 opacity-90 group-hover:opacity-100 transition-all"
                  />
                  <div
                    className="text-3xl font-black font-pp tracking-tighter opacity-80 group-hover:opacity-100 transition-all"
                    style={{ color: logo.color }}
                  >
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center gap-20 px-10">
              {[
                { name: 'Rakuten', slug: 'rakuten', color: '#BF0000' },
                { name: 'Dropbox', slug: 'dropbox', color: '#0061FF' },
                { name: 'Apple', slug: 'apple', color: '#000000' },
                { name: 'Google', slug: 'google', color: '#4285F4' },
                { name: 'Meta', slug: 'meta', color: '#0668E1' },
                { name: 'Netflix', slug: 'netflix', color: '#E50914' }
              ].map(logo => (
                <div key={logo.name + '-dup'} className="flex items-center gap-4 group cursor-default">
                  <img
                    src={`https://cdn.simpleicons.org/${logo.slug}/${logo.color.replace('#', '')}`}
                    alt={logo.name}
                    className="w-10 h-10 opacity-90 group-hover:opacity-100 transition-all"
                  />
                  <div
                    className="text-3xl font-black font-pp tracking-tighter opacity-80 group-hover:opacity-100 transition-all"
                    style={{ color: logo.color }}
                  >
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section - Redesigned */}
        <section id="services" className="max-w-7xl mx-auto px-8 py-40 scroll-mt-20">
          <div className="text-center mb-32">
            <h2 className="text-5xl lg:text-7xl font-pp font-bold tracking-tight mb-6">How We Help You</h2>
            <p className="text-slate-500 max-w-lg mx-auto">Our team of experts is dedicated to helping you achieve your landscape goals.</p>
          </div>

          <div className="space-y-32">
            {[
              { title: "Social Media Management", desc: "Our expert team provides detailed property solutions and market analysis to help you accurately price your property and understand the local real estate market. Our in-depth research and analysis take into account a variety of factors, including market trends, comparable sales, and property condition.", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80" },
              { title: "Digital Marketing Strategy", desc: "We use our extensive network and marketing expertise to list and advertise your property to a wide audience. From professional photography and virtual tours to targeted online and offline advertising, we use a variety of strategies to attract potential buyers and showcase your property in the best possible light.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" },
              { title: "Videography & Content Creation", desc: "Our team is available to schedule and conduct property showings for interested buyers. We understand that your time is valuable, so we work with your schedule to ensure that showings are convenient for you while still providing potential buyers with the best possible experience.", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80" }
            ].map((service, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20 group`}>
                {/* Image Pill Container */}
                <div className="relative w-full lg:w-1/2 overflow-visible">
                  {/* Background Pill */}
                  <div className={`absolute inset-0 bg-blue-50/50 -z-10 rounded-[10rem] scale-110 transform ${i % 2 === 0 ? '-rotate-3 translate-x-4' : 'rotate-3 -translate-x-4'} opacity-0 group-hover:opacity-100 transition-all duration-700`}></div>

                  <div className={`relative aspect-[4/3] overflow-hidden rounded-[10rem] shadow-2xl shadow-blue-500/5 ${i % 2 === 0 ? 'rounded-tl-none' : 'rounded-tr-none'} transition-transform duration-700 group-hover:scale-[1.02]`}>
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl lg:text-4xl font-pp font-bold leading-tight">{service.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-lg">{service.desc}</p>
                  </div>
                  <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm tracking-wide transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95">
                    LEARN MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Next Level Media */}
        <section id="about" className="max-w-7xl mx-auto px-8 py-32 scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto mb-32">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#D4AF37] mb-6">— About Next Level Media</h2>
            <h3 className="text-5xl lg:text-7xl font-pp font-bold leading-tight mb-8">We're a team of creative professionals dedicated to transforming businesses.</h3>
            <p className="text-xl text-slate-500 leading-relaxed italic">"From invisible to unforgettable online."</p>
          </div>

          {/* Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Our Team" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-bottom p-12">
                <p className="text-white font-pp font-bold text-2xl self-end">Founded with a simple mission: <br /> to help businesses of all sizes.</p>
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-4xl font-pp font-bold">Our Story</h3>
              <div className="w-20 h-1 bg-[#D4AF37]"></div>
              <p className="text-slate-600 leading-relaxed">
                Next Level Media was founded with a simple mission: to help businesses of all sizes build powerful, authentic online presences that drive real results.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We recognized a gap in the market. Small business owners and startup founders were struggling to navigate the complex world of social media, digital marketing, and video content. They needed partners who understood their challenges and could deliver measurable results without breaking the bank.
              </p>
              <p className="text-slate-600 leading-relaxed">
                That's where we come in. Our team combines years of experience in social media management, digital marketing, videography, and video editing to create comprehensive solutions tailored to your specific needs.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today, we're proud to work with small businesses, growing startups, and professionals who are ready to take their online presence to the next level.
              </p>
            </div>
          </div>

          {/* Mission & Vision - Arrow Design */}
          <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision - Black Arrow */}
            <div className="relative bg-black text-white rounded-3xl overflow-hidden group">
              {/* Arrow Shape */}
              <div className="relative p-12 lg:p-16">
                {/* Content */}
                <div className="flex items-start gap-8 mb-8">
                  <div className="w-20 h-20 rounded-full bg-black border-4 border-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <Target className="w-10 h-10 text-[#D4AF37]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-pp font-black uppercase mb-4 tracking-tight">Vision</h2>
                    <p className="text-white/80 leading-relaxed">
                      We never compromise on quality. Every project, every video, every campaign is executed with precision and creativity to exceed expectations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow Point */}
              <div className="absolute right-0 top-0 bottom-0 w-0 h-0 border-t-[100px] border-t-transparent border-l-[60px] border-l-black border-b-[100px] border-b-transparent hidden lg:block" style={{ right: '-60px', top: '50%', transform: 'translateY(-50%)' }}></div>
            </div>

            {/* Mission - Light Blue */}
            <div className="relative bg-slate-100 rounded-3xl overflow-hidden p-12 lg:p-16">
              <div className="flex items-start gap-8">
                <div className="w-20 h-20 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Rocket className="w-10 h-10 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-pp font-black uppercase mb-4 tracking-tight text-blue-900">Mission</h2>
                  <p className="text-slate-600 leading-relaxed">
                    To empower small businesses, startups, and professionals with world-class media services that transform their online visibility and drive sustainable growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why We're Different */}
          <div className="bg-slate-900 text-white rounded-[4rem] p-12 lg:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-5xl font-pp font-bold mb-8">Why We're Different</h2>
                  <p className="text-slate-400 text-lg mb-12">We don't just provide services; we provide a competitive advantage through expertise, data, and transparency.</p>
                </div>
                {/* Visual Chart/Infographic for Large Screens */}
                <div className="hidden lg:block">
                  <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Competitive Performance</span>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                        <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {[
                        { label: "Our Growth", value: "94%", color: "bg-blue-600" },
                        { label: "Industry Avg.", value: "42%", color: "bg-slate-700" }
                      ].map((item, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-xs font-bold mb-2 uppercase">
                            <span>{item.label}</span>
                            <span>{item.value}</span>
                          </div>
                          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                            <div className={`h-full ${item.color} rounded-full`} style={{ width: item.value }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="mt-8 text-xs text-slate-500 italic">Based on 2024 performance analytics across client portfolios.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-12">
                {[
                  { title: "Specialized Expertise", desc: "Our team specializes in the exact services your business needs. From social media strategy to professional videography, we bring deep expertise and proven methodologies to every project." },
                  { title: "Data-Driven Approach", desc: "We don't guess. Every strategy is backed by data and analytics. We track, measure, and optimize continuously to ensure your campaigns deliver maximum ROI." },
                  { title: "Transparent Communication", desc: "You'll always know what we're doing and how it's performing. Regular updates, clear reporting, and open dialogue are core to our partnership approach." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="text-blue-500 font-pp font-bold text-2xl opacity-50 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                    <div>
                      <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="max-w-7xl mx-auto px-8 py-32 border-t border-black/5">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-pp font-bold">Who We Serve</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Small Business Owners",
                desc: "We help established small businesses build stronger online presence and reach new customers through strategic social media and digital marketing.",
                items: ["Social media strategy & management", "Local SEO optimization", "Content creation & promotion", "Customer engagement campaigns"]
              },
              {
                title: "Growing Startups",
                desc: "We accelerate startup growth with comprehensive media services that build brand awareness and drive user acquisition.",
                items: ["Brand storytelling & positioning", "Growth-focused social media", "Video marketing campaigns", "Influencer collaboration"],
                highlight: true
              },
              {
                title: "Professionals & Personal Brands",
                desc: "We help coaches, consultants, and personal brands establish authority and attract ideal clients through strategic content.",
                items: ["Personal brand development", "Thought leadership content", "Professional video testimonials", "Audience building strategies"]
              }
            ].map((pkg, i) => (
              <div key={i} className={`p-12 rounded-[3.5rem] border-2 flex flex-col transition-all duration-300 hover:shadow-2xl ${pkg.highlight ? 'bg-black text-white border-black' : 'glass-card border-black/10'}`}>
                <h3 className="text-2xl font-pp font-bold mb-6">{pkg.title}</h3>
                <p className={`text-sm mb-8 leading-relaxed ${pkg.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{pkg.desc}</p>
                <div className="w-full h-px bg-current opacity-10 mb-8"></div>
                <ul className="space-y-4 mb-12 flex-grow">
                  {pkg.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm font-medium">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${pkg.highlight ? 'text-blue-500' : 'text-blue-600'}`} />
                      <span className="opacity-80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-8 mb-32 scroll-mt-20">
          <div className="bg-black text-white p-12 lg:p-32 rounded-[4rem] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -ml-48 -mb-48"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-5xl lg:text-7xl font-pp font-bold mb-12">Ready to Work With Us?</h2>
              <p className="text-xl text-slate-400 mb-12">Let's discuss how we can help your business reach the next level.</p>
              <a href="#contact" className="inline-block px-12 py-5 bg-white text-black rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-2xl">Get In Touch</a>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#D4AF37] mb-6">— Testimonials</h2>
            <h3 className="text-5xl font-pp font-bold">What Our Clients Say</h3>
          </div>

          <div className="relative group/carousel">
            <div className="relative rounded-[4rem] p-12 lg:p-24 overflow-hidden bg-slate-900 text-white shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <Quote className="w-64 h-64 text-[#D4AF37]" />
              </div>

              <div className="relative z-10">
                <div className="max-w-4xl mx-auto">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full border-4 border-slate-800 shadow-2xl overflow-hidden mb-12">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].author}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>

                    <p className="text-2xl lg:text-3xl font-serif font-medium leading-relaxed italic text-slate-200 mb-12">
                      "{testimonials[currentTestimonial].text}"
                    </p>

                    <div className="space-y-1">
                      <h4 className="text-xl font-bold">{testimonials[currentTestimonial].author}</h4>
                      <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-3 mt-16">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentTestimonial(i)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentTestimonial ? 'bg-[#D4AF37] w-8' : 'bg-slate-700 hover:bg-slate-600'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation - Extreme Edges */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 -right-4 lg:-left-7 lg:-right-7 flex justify-between pointer-events-none z-20">
              <button
                onClick={prevTestimonial}
                className="w-14 h-14 rounded-full bg-white text-black shadow-2xl flex items-center justify-center pointer-events-auto hover:bg-[#D4AF37] hover:text-white transition-all transform hover:scale-110 active:scale-95 border border-black/5"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-14 h-14 rounded-full bg-white text-black shadow-2xl flex items-center justify-center pointer-events-auto hover:bg-[#D4AF37] hover:text-white transition-all transform hover:scale-110 active:scale-95 border border-black/5"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Process Section - Vertical Timeline */}
        <section id="process" className="max-w-5xl mx-auto px-8 mb-32 scroll-mt-20">
          <div className="text-center mb-24">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 mb-6">— OUR PROCESS</h2>
            <h3 className="text-5xl font-pp font-bold mb-4">Get Started in Four<br />Simple Steps</h3>
            <p className="text-slate-500 max-w-lg mx-auto">Follow our streamlined process to transform your online presence and achieve measurable results.</p>
          </div>

          <div className="relative">
            {/* Central Vertical Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>

            <div className="space-y-24">
              {processSteps.map((step, i) => (
                <div key={i} className={`relative flex flex-col lg:flex-row items-center gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Card */}
                  <div className={`w-full lg:w-[calc(50%-3rem)] ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-black/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                      {/* Step Number Badge */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg mb-6 ${i % 2 === 0 ? 'lg:float-right lg:ml-4' : 'lg:float-left lg:mr-4'}`}>
                        {i + 1}
                      </div>

                      <div className="clear-both">
                        <h4 className="text-2xl font-pp font-bold mb-3">{step.title}</h4>
                        <p className="text-slate-500 leading-relaxed mb-6">{step.desc}</p>
                        {/* Image Preview */}
                        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-4 border border-blue-100/50 overflow-hidden">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-48 object-cover rounded-xl shadow-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* High Impact CTA Section */}
        <section className="py-32 bg-black text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#333_0%,_#000_100%)] opacity-20"></div>
          <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
            <h2 className="text-6xl lg:text-8xl font-pp font-black mb-12 leading-none">
              READY TO <br />
              <span className="text-[#D4AF37]">DOMINATE?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed">
              Stop blending in. It's time to build a brand that commands attention and drives real results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-12 py-6 bg-[#D4AF37] text-black rounded-full font-bold text-xl transition-all hover:bg-white hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                Start Your Project
              </button>
              <button className="px-12 py-6 bg-transparent border border-white/20 text-white rounded-full font-bold text-xl transition-all hover:border-white hover:bg-white/5">
                View Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="max-w-7xl mx-auto px-8 mb-32 scroll-mt-20">
          <div className="relative overflow-hidden rounded-[4rem] bg-slate-50 p-12 lg:p-24">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -ml-64 -mt-64"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-black/5 rounded-full blur-[120px] -mr-64 -mb-64"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#D4AF37]">— Contact Us</h2>
                  <h3 className="text-6xl font-pp font-bold leading-tight">Have a Project? <br /> Let's Talk.</h3>
                  <p className="text-slate-500 max-w-sm text-lg">Fill out the form and our team will get back to you within 24 hours.</p>
                </div>

                <div className="space-y-8">
                  <div className="space-y-6">
                    <a href="mailto:themasterdesigner01@gmail.com" className="flex items-center gap-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-3 border border-black/5">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Email us at</p>
                        <p className="font-bold text-lg">themasterdesigner01@gmail.com</p>
                      </div>
                    </a>
                    <a href="tel:+2349063992391" className="flex items-center gap-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center transition-all group-hover:scale-110 group-hover:-rotate-3 border border-black/5">
                        <Phone className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Call us at</p>
                        <p className="font-bold text-lg">+234 906 399 2391</p>
                      </div>
                    </a>
                  </div>

                  <div className="pt-8 border-t border-black/5">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Follow Our Journey</h4>
                    <div className="flex gap-4">
                      {[
                        { icon: <Instagram />, label: "Instagram" },
                        { icon: <Twitter />, label: "Twitter" },
                        { icon: <Linkedin />, label: "LinkedIn" }
                      ].map((social, i) => (
                        <div key={i} className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition-all hover:scale-110 border border-black/5">
                          {social.icon}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-xl border border-black/5">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                      <input type="text" className="w-full bg-slate-50 border border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                      <input type="email" className="w-full bg-slate-50 border border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-4">Service Needed</label>
                    <select className="w-full bg-slate-50 border border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all appearance-none cursor-pointer">
                      <option>Social Media Management</option>
                      <option>Digital Marketing</option>
                      <option>Videography</option>
                      <option>Video Editing</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-4">Your Message</label>
                    <textarea className="w-full bg-slate-50 border border-transparent rounded-2xl px-6 py-4 h-40 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-black text-white py-5 rounded-2xl font-bold text-lg hover:bg-slate-900 transition-all flex items-center justify-center gap-3 group">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 px-8 border-t border-black/5 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 items-start">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="text-blue-600" />
              <span className="font-pp font-black text-xl uppercase">Next Level Media</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-8">Transforming businesses from invisible to unforgettable online.</p>
            <div className="flex gap-6">
              <Instagram className="w-5 h-5 text-slate-400 hover:text-black cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-slate-400 hover:text-black cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-black cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#home" className="hover:text-black transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-black transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-8">Services</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>Social Media Management</li>
              <li>Digital Marketing</li>
              <li>Videography</li>
              <li>Video Editing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-8">Contact</h4>
            <ul className="space-y-6 text-sm text-slate-500">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>themasterdesigner01@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+234 906 399 2391</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase font-mono-supply text-slate-400">© 2025 Next Level Media. All rights reserved.</p>
          <div className="flex gap-12 text-[10px] uppercase font-mono-supply text-slate-400">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
