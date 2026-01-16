import React from 'react';
import { Link } from 'react-router-dom';
import {
    TrendingUp, Users, BarChart, Layers, Zap,
    Mail, Phone, Instagram, Twitter, Linkedin,
    CheckCircle2, Target, Rocket, Search,
    MessageSquare, Send, ChevronRight
} from 'lucide-react';

const Services: React.FC = () => {
    const services = [
        {
            title: "Social Media Management",
            desc: "Build an engaged community and grow your brand presence across all major social platforms. We handle strategy, content creation, community management, and analytics.",
            features: [
                { title: "Strategic Planning", desc: "Customized social media strategies aligned with your business goals and target audience." },
                { title: "Content Creation", desc: "Engaging, on-brand content that resonates with your audience and drives meaningful interactions." },
                { title: "Community Management", desc: "Active engagement, prompt responses, and relationship building with your followers." },
                { title: "Analytics & Reporting", desc: "Detailed performance tracking and insights to optimize your social media ROI." }
            ],
            icon: <Users className="w-12 h-12" />,
            color: "blue",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80"
        },
        {
            title: "Digital Marketing",
            desc: "Drive measurable growth with data-driven digital marketing campaigns. From SEO to paid advertising, we optimize every channel for maximum ROI.",
            features: [
                { title: "SEO Optimization", desc: "Improve your search rankings and organic visibility with proven SEO strategies and best practices." },
                { title: "Paid Advertising", desc: "Strategic campaigns on Google, Facebook, Instagram, and other platforms to reach your ideal customers." },
                { title: "Email Marketing", desc: "Targeted email campaigns that nurture leads and convert subscribers into loyal customers." },
                { title: "Conversion Optimization", desc: "A/B testing and optimization to maximize conversions and improve your marketing ROI." }
            ],
            icon: <BarChart className="w-12 h-12" />,
            color: "blue",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
        },
        {
            title: "Videography",
            desc: "Professional video production that captures your brand story and engages your audience. From concept to final delivery, we handle it all.",
            features: [
                { title: "Commercial Videos", desc: "Compelling promotional videos that showcase your products, services, and brand values." },
                { title: "Testimonial Videos", desc: "Authentic customer testimonials that build trust and credibility with potential clients." },
                { title: "Event Coverage", desc: "Professional videography for conferences, launches, and corporate events." },
                { title: "Social Media Videos", desc: "Short-form, engaging videos optimized for social platforms to boost engagement." }
            ],
            icon: <Zap className="w-12 h-12" />,
            color: "blue",
            image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80"
        },
        {
            title: "Video Editing",
            desc: "Transform raw footage into polished, compelling video content. We handle color grading, sound design, effects, and more.",
            features: [
                { title: "Professional Editing", desc: "Expert editing that tells your story and keeps viewers engaged from start to finish." },
                { title: "Color Grading", desc: "Professional color correction and grading to achieve the perfect look and mood." },
                { title: "Sound Design", desc: "High-quality audio mixing, music selection, and sound effects that enhance your video." },
                { title: "Motion Graphics", desc: "Animated titles, transitions, and graphics that add visual interest and professionalism." }
            ],
            icon: <Layers className="w-12 h-12" />,
            color: "blue",
            image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80"
        }
    ];

    const processSteps = [
        { number: "01", title: "Discovery & Strategy", desc: "We learn about your business, goals, and target audience to develop a tailored strategy." },
        { number: "02", title: "Planning & Execution", desc: "We create detailed plans and execute with precision, keeping you informed every step." },
        { number: "03", title: "Optimization & Testing", desc: "We continuously test, measure, and optimize to improve performance and results." },
        { number: "04", title: "Reporting & Growth", desc: "We provide transparent reporting and scale what works to maximize your ROI." }
    ];

    return (
        <div className="min-h-screen bg-white text-[#111111]">
            {/* Navigation */}
            <header className="fixed top-0 left-0 right-0 z-[60] py-6 bg-white/80 backdrop-blur-md border-b border-black/5">
                <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center gap-2 font-pp text-xl font-bold tracking-tight">
                            <div className="flex -space-x-2">
                                <div className="w-5 h-5 rounded-full bg-black"></div>
                                <div className="w-5 h-5 rounded-full bg-black/20 backdrop-blur-sm"></div>
                            </div>
                            <span className="ml-2 uppercase tracking-tighter">Next Level Media</span>
                        </Link>
                        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
                            {['Home', 'About', 'Services', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    className="hover:text-black transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 bg-white border border-black rounded-full text-sm font-bold transition-all hover:bg-black hover:text-white">Get Started</button>
                    </div>
                </div>
            </header>

            <main className="pt-32">
                {/* Enhanced Hero Section */}
                <section className="relative max-w-7xl mx-auto px-8 mb-32 overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl -z-10"></div>

                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <div className="inline-block mb-6">
                            <span className="px-6 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-bold uppercase tracking-wider">
                                Our Services
                            </span>
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-pp font-black mb-8 tracking-tight leading-[0.9]">
                            Elevate Your <br />
                            <span className="text-blue-600">Digital Presence</span>
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-12">
                            Comprehensive media solutions designed to transform your business from invisible to unforgettable online.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                            <button className="px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-lg transition-all hover:bg-blue-700 hover:scale-105 shadow-xl shadow-blue-500/20">
                                Get Started Today
                            </button>
                            <button className="px-10 py-5 bg-white border-2 border-black text-black rounded-full font-bold text-lg transition-all hover:bg-black hover:text-white">
                                View Our Work
                            </button>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {[
                            { value: "500+", label: "Projects Completed" },
                            { value: "200+", label: "Happy Clients" },
                            { value: "94%", label: "Success Rate" },
                            { value: "24/7", label: "Support Available" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                                <div className="text-4xl font-pp font-black text-blue-600 mb-2">{stat.value}</div>
                                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Services Detail Sections */}
                {services.map((service, idx) => (
                    <section key={idx} className={`py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                        <div className="max-w-7xl mx-auto px-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                                {/* Text Content */}
                                <div className={idx % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                                    <div className="w-20 h-20 rounded-3xl bg-blue-100 flex items-center justify-center mb-8">
                                        <span className="text-blue-600">{service.icon}</span>
                                    </div>
                                    <h2 className="text-4xl lg:text-5xl font-pp font-bold mb-6">{service.title}</h2>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-8">{service.desc}</p>
                                    <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-sm tracking-wide transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 flex items-center gap-2">
                                        Learn More <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Image */}
                                <div className={idx % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
                                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-blue-600/10"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}

                {/* Process Section */}
                <section className="py-32 bg-slate-900 text-white">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl font-pp font-bold mb-4">Our Process</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">A proven methodology that delivers results</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {processSteps.map((step, i) => (
                                <div key={i} className="relative">
                                    <div className="text-6xl font-pp font-black text-blue-600 mb-4">{step.number}</div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32">
                    <div className="max-w-4xl mx-auto px-8 text-center">
                        <h2 className="text-5xl lg:text-6xl font-pp font-bold mb-8">Ready to Get Started?</h2>
                        <p className="text-xl text-slate-500 mb-12">Let's discuss which services are right for your business and create a plan for success.</p>
                        <button className="px-12 py-5 bg-black text-white rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-2xl">
                            Schedule a Consultation
                        </button>
                    </div>
                </section>
            </main>

            {/* Footer */}
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
                            <li><Link to="/" className="hover:text-black transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-black transition-colors">About</Link></li>
                            <li><Link to="/services" className="hover:text-black transition-colors">Services</Link></li>
                            <li><Link to="/contact" className="hover:text-black transition-colors">Contact</Link></li>
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
                </div>
            </footer>
        </div>
    );
};

export default Services;
