import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GraduationCap, Users, Lightbulb, Send, ArrowRight, Code, Cpu, Database, Globe, CheckCircle2, Trophy, Target } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EventCard from './components/EventCard';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Members from './pages/Members';
import Initiatives from './pages/Initiatives';
import EventPopup from './components/EventPopup';
import AmbassadorRegistration from './components/AmbassadorRegistration';
import EventDetails from './pages/EventDetails';
import ChatBot from './components/ChatBot';
import ScrollToTop from './components/ScrollToTop';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function App() {
  const [showEventPopup, setShowEventPopup] = useState(false);
  const [isAmbassadorModalOpen, setIsAmbassadorModalOpen] = useState(false);

  // Debug log for environment variable
  console.log('API Key available:', !!import.meta.env.VITE_GEMINI_API_KEY);

  const achievements = [
    {
      number: "1000+",
      label: "Students Trained",
      description: "Successfully trained students in IoT and robotics"
    },
    {
      number: "50+",
      label: "Projects Completed",
      description: "Real-world projects implemented by our students"
    },
    {
      number: "100%",
      label: "Placement Rate",
      description: "Successful placement rate for our certified students"
    },
    {
      number: "20+",
      label: "Industry Partners",
      description: "Leading companies collaborating with us"
    }
  ];

  const features = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Hands-on Learning",
      description: "Practical experience with latest IoT devices and robotics"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Mentorship",
      description: "Guidance from industry professionals and academics"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Certification",
      description: "certifications of participation on merit basis"
    },

  ];

  const courses = [
    {
      title: "IoT Fundamentals",
      duration: "3 months",
      level: "Beginner",
      features: [
        "Basic electronics and programming",
        "Sensor integration",
        "Cloud connectivity",
        "Project development"
      ]
    },
    {
      title: "Advanced IoT",
      duration: "4 months",
      level: "Intermediate",
      features: [
        "Complex sensor networks",
        "Data analytics",
        "Industrial IoT applications",
        "Advanced project work"
      ]
    },
    {
      title: "IoT Security",
      duration: "2 months",
      level: "Advanced",
      features: [
        "Security protocols",
        "Encryption methods",
        "Vulnerability assessment",
        "Security best practices"
      ]
    }
  ];

  const projects = [
    {
      title: "RFID-Based Attendance System",
      subtitle: "with Google Spreadsheet Integration and LCD Display",
      description: "An RFID-based attendance system combined with Google Sheets integration allows for automated attendance tracking and real-time data storage in the cloud. The system utilizes the ESP32 microcontroller, an RFID module, and an LCD display for seamless operation.",
      images: [
        "/images/RFID-Based Attendance System/1.jpg",
        "/images/RFID-Based Attendance System/2.jpg",
        "/images/RFID-Based Attendance System/3.jpg",
        "/images/RFID-Based Attendance System/4.jpg"
      ],
      technologies: ["ESP32", "RFID", "Google Sheets API", "LCD Display", "IoT"],
      highlights: [
        "Real-time attendance tracking",
        "Cloud data storage",
        "LCD feedback display",
        "Automated reporting"
      ]
    },
    {
      title: "Text-to-Speech System",
      subtitle: "Using ESP32, I2S Module, Speaker, and Telegram Bot",
      description: "This project allows a device to convert text messages into speech using an ESP32 microcontroller, an I2S audio module, and a speaker. The text is sent to the system via a Telegram bot, providing a user-friendly interface for remote communication.",
      images: [
        "/images/text-to-speech/1.jpg"
      ],
      technologies: ["ESP32", "I2S Module", "Telegram Bot API", "Text-to-Speech", "IoT"],
      highlights: [
        "Remote text input via Telegram",
        "Real-time speech synthesis",
        "Wireless communication",
        "User-friendly interface"
      ]
    },
    {
      title: "Home Automation System",
      subtitle: "Controlled via Alexa",
      description: "This project demonstrates a voice-controlled home automation system using Alexa. It allows users to control appliances, adjust their speed or intensity, and monitor settings in real-time. Key components include the ESP32, ATmega328P, TRIAC for voltage regulation, relays, and a 7-segment display.",
      images: [
        "/images/Home Automation System/1.jpg",
        "/images/Home Automation System/2.jpg"
      ],
      technologies: ["ESP32", "ATmega328P", "Alexa Skills Kit", "TRIAC", "Relays"],
      highlights: [
        "Voice control via Alexa",
        "Real-time monitoring",
        "Appliance speed control",
        "Digital display feedback"
      ]
    },
    {
      title: "Gyanendriya",
      subtitle: "A Bluetooth-Controlled Voice-Responsive Bot",
      description: "Gyanendriya is a multifunctional robotic system that receives voice commands via a mobile device, communicates through Bluetooth, and can perform tasks such as answering queries and executing physical movements like saluting and walking. This setup combines mobile device accessibility with robotic automation for seamless interaction.",
      videos: [
        "/images/Gyanendriya/1.mp4",
        "/images/Gyanendriya/2.mp4"
      ],
      technologies: ["Bluetooth Module", "Voice Recognition", "Robotics", "Mobile App", "IoT"],
      highlights: [
        "Voice command recognition",
        "Physical movement execution",
        "Mobile device control",
        "Interactive responses"
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEventPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {showEventPopup && <EventPopup onClose={() => setShowEventPopup(false)} />}
        {isAmbassadorModalOpen && (
          <AmbassadorRegistration onClose={() => setIsAmbassadorModalOpen(false)} />
        )}
        <Routes>
          <Route path="/" element={
            <main>
              {/* Hero Section */}
              <section className="relative min-h-screen flex items-center overflow-hidden">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/background video/hero section bg.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-black to-black/70 opacity-50"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Transform Your Future with IoT Excellence
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
                    Join SISTec's IoT Centre of Excellence and master the technologies shaping tomorrow
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button 
                      onClick={() => window.location.href = '/events'}
                      className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300 text-lg">
                      Explore Events
                    </button>
                    <button 
                      className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300 text-lg"
                      onClick={() => setIsAmbassadorModalOpen(true)}>
                      Campus Ambassador
                    </button>
                  </div>
                </div>
              </section>

              {/* Features Section */}
              <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                      Experience world-class training with state-of-the-art facilities and expert guidance
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
                      {features.map((feature, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300 text-center flex flex-col items-center">
                          <div className="inline-block p-4 bg-blue-100 rounded-full text-blue-600 mb-4">
                            {feature.icon}
                          </div>
                          <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                          <p className="text-gray-600 max-w-xs">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Our Mission Section */}
              <section className="py-20 relative overflow-hidden">
               
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900/90 to-blue-600/90"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
                    <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center hover:transform hover:scale-105 transition duration-300">
                      <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <GraduationCap className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-white">Educate</h3>
                      <p className="text-white">
                        Empowering students with cutting-edge IoT knowledge and practical skills through comprehensive education programs.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center hover:transform hover:scale-105 transition duration-300">
                      <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Lightbulb className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-white">Innovate</h3>
                      <p className="text-white">
                        Fostering innovation by providing state-of-the-art facilities and encouraging creative problem-solving in IoT.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center hover:transform hover:scale-105 transition duration-300">
                      <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-white">Transform</h3>
                      <p className="text-white">
                        Creating future-ready professionals who can lead the technological transformation in the IoT industry.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Our Purpose Section */}
              <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Purpose</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                      Bridging the gap between education and industry requirements in IoT technology
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                      <div className="aspect-w-16 aspect-h-9">
                        <img 
                          src="https://www.sistec.ac.in/assets/upload/events-images/2-prerana-igniting-professional-minds.jpg" 
                          alt="IoT Lab" 
                          className="rounded-xl object-cover shadow-lg"
                        />
                      </div>
                      <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl">
                        <p className="text-2xl font-bold">IoT Centre</p>
                        <p className="text-sm">of Excellence</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition duration-300">
                        <h3 className="text-xl font-semibold mb-3">Industry Integration</h3>
                        <p className="text-gray-600">
                          Collaborating with leading tech companies to provide real-world project experience and industry exposure.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition duration-300">
                        <h3 className="text-xl font-semibold mb-3">Skill Development</h3>
                        <p className="text-gray-600">
                          Focusing on practical skills and hands-on experience with the latest IoT technologies and tools.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition duration-300">
                        <h3 className="text-xl font-semibold mb-3">Research & Innovation</h3>
                        <p className="text-gray-600">
                          Supporting research initiatives and innovative projects in emerging IoT technologies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Our Work Section */}
              <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                      Transforming ideas into reality through innovative IoT solutions
                    </p>
                  </div>
                  <div className="relative">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={30}
                      slidesPerView={1}
                      navigation={true}
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 5000, disableOnInteraction: false }}
                      breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                      }}
                      className="pb-12"
                    >
                      {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                          <div className="group relative overflow-hidden rounded-xl">
                            {project.images && project.images.length > 0 ? (
                              <img 
                                src={project.images[0]}
                                alt={project.title}
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                              />
                            ) : project.videos && project.videos.length > 0 ? (
                              <video
                                src={project.videos[0]}
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                                muted
                                loop
                                autoPlay
                                playsInline
                              />
                            ) : null}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                              <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-200 text-sm">{project.subtitle}</p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="text-center mt-8">
                    <a
                      href="/initiatives"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </section>

              {/* Achievements Section */}
              <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
                    <p className="text-gray-200 max-w-3xl mx-auto text-lg">
                      Making a difference in technology education
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-8">
                        <h3 className="text-4xl font-bold mb-2">{achievement.number}</h3>
                        <p className="text-xl mb-2">{achievement.label}</p>
                        <p className="text-gray-300 text-sm">{achievement.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                      Join our next batch and transform your career with cutting-edge IoT skills
                    </p>
                    <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300 text-lg">
                      Apply Now
                    </button>
                  </div>
                </div>
              </section>

              {/* Contact Form Section */}
              <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                      <p className="text-gray-600 max-w-2xl mx-auto">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                      </p>
                    </div>
                    <form className="max-w-2xl mx-auto">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <input
                          type="text"
                          placeholder="Name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                        />
                      </div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 mb-6"
                      />
                      <textarea
                        placeholder="Message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 mb-6"
                      ></textarea>
                      <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center text-lg">
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </section>

              <Footer />
            </main>
          } />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:eventId" element={<EventDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/members" element={<Members />} />
          <Route path="/initiatives" element={<Initiatives />} />
        </Routes>
        <ChatBot />
      </div>
      <ScrollToTop />
    </Router>
  );
}

export default App;