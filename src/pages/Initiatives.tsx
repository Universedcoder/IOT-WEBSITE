import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Initiatives() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Initiatives
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Exploring the frontiers of IoT technology through innovative projects
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-12"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-white rounded-2xl overflow-hidden shadow-xl ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex`}
              >
                <div className="lg:w-1/2">
                  <div className="relative h-64 lg:h-full">
                    {project.videos ? (
                      <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        className="h-full"
                      >
                        {project.videos.map((video, videoIndex) => (
                          <SwiperSlide key={videoIndex} className="!flex items-center justify-center bg-gray-100">
                            <div className="relative w-full h-full">
                              <video
                                controls
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-full object-contain max-w-none min-h-[300px] max-h-[600px]"
                              >
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    ) : project.images ? (
                      <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                        className="h-full"
                      >
                        {project.images.map((img, imgIndex) => (
                          <SwiperSlide key={imgIndex} className="!flex items-center justify-center bg-gray-100">
                            <div className="relative w-full h-full">
                              <img 
                                src={img} 
                                alt={`${project.title} - Image ${imgIndex + 1}`}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-full object-contain max-w-none min-h-[300px] max-h-[600px]"
                                loading="lazy"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = 'https://via.placeholder.com/800x600?text=Project+Image';
                                }}
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    ) : (
                      <div className="relative w-full h-full bg-gray-100">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-full object-contain max-w-none"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://via.placeholder.com/800x600?text=Project+Image';
                          }}
                        />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                  </div>
                </div>

                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-600 mb-8">
                    {project.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-500 mb-3">
                      KEY FEATURES
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.highlights.map((highlight, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center space-x-2"
                        >
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-3">
                      TECHNOLOGIES USED
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
