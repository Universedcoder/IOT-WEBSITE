import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Users, MapPin, X, Clock, ChevronRight, Award, BookOpen, Zap } from 'lucide-react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

interface EventDetail {
  title: string;
  date: string;
  image: string;
  highlights: string[];
  description: string;
  venue: string;
  gallery: string[];
  schedule?: {
    day: string;
    topics: string[];
  }[];
}

// This would typically come from an API or database
const eventDetails: Record<string, EventDetail> = {
  'innovate-iot-workshop': {
    title: "Innovate IoT Workshop 2024",
    date: "March 19-22, 2024",
    image: "/IoT CoE Events and Workshop/5. ARDUINO CRAFT 17 Oct to 19 Oct 2023/Workshop Creative/382409326_708299877365337_8886238343735456849_n.jpg",
    highlights: [
      "Advanced IoT Development",
      "Real-world Project Implementation",
      "Industry Standard Practices",
      "Hands-on Training",
      "Innovation Challenges",
      "Expert Mentoring"
    ],
    description: `A cutting-edge four-day intensive workshop focused on innovative IoT solutions and real-world applications. This workshop was designed to bridge the gap between theoretical knowledge and practical implementation in the IoT domain.

Participants gained hands-on experience with industry-standard tools and practices, working on real-world projects under expert guidance. The workshop emphasized practical learning through project-based approaches, ensuring participants could implement IoT solutions independently.

Key Focus Areas:
• Modern IoT Architecture and Implementation
• Sensor Integration and Data Collection
• Cloud Platform Integration
• Security Best Practices
• Project Development and Deployment`,
    venue: "IoT CoE Lab, SISTec, Bhopal",
    gallery: [
      "/IoT CoE Events and Workshop/5. ARDUINO CRAFT 17 Oct to 19 Oct 2023/Workshop Creative/382409326_708299877365337_8886238343735456849_n.jpg"
    ],
    schedule: [
      {
        day: "Day 1 - March 19",
        topics: [
          "Introduction to IoT Innovation",
          "Modern IoT Architecture",
          "Sensor Integration",
          "Data Collection Techniques",
          "Hands-on Session: Basic Setup"
        ]
      },
      {
        day: "Day 2 - March 20",
        topics: [
          "Advanced Sensor Applications",
          "Cloud Integration",
          "Real-time Data Processing",
          "IoT Security Fundamentals",
          "Workshop: Cloud Platform Integration"
        ]
      },
      {
        day: "Day 3 - March 21",
        topics: [
          "Project Development",
          "Implementation Strategies",
          "Testing and Debugging",
          "Performance Optimization",
          "Hands-on: Project Work"
        ]
      },
      {
        day: "Day 4 - March 22",
        topics: [
          "Project Finalization",
          "Documentation",
          "Presentation Skills",
          "Future Scope Discussion",
          "Project Showcase"
        ]
      }
    ]
  },
  'arduino-craft-workshop': {
    title: "Arduino Craft Workshop",
    date: "October 17-19, 2023",
    image: "/IoT CoE Events and Workshop/5. ARDUINO CRAFT 17 Oct to 19 Oct 2023/Workshop Creative/382409326_708299877365337_8886238343735456849_n.jpg",
    highlights: [
      "Arduino Programming",
      "Hardware Integration",
      "Project Development",
      "Hands-on Experience",
      "IoT Applications",
      "Take-home Projects"
    ],
    description: `A comprehensive three-day hands-on training program that transformed beginners into confident Arduino developers. This workshop was carefully designed to provide both theoretical knowledge and practical experience in Arduino programming and hardware integration.

Each participant worked with their own Arduino kit, learning through hands-on experience. The workshop covered everything from basic programming concepts to advanced sensor integration and IoT applications.

Workshop Highlights:
• Personal Arduino Kit for Each Participant
• Interactive Learning Sessions
• Real-world Project Development
• Expert Mentoring
• Take-home Projects
• Post-workshop Support`,
    venue: "IoT CoE Lab, SISTec, Bhopal",
    gallery: [
      "/IoT CoE Events and Workshop/5. ARDUINO CRAFT 17 Oct to 19 Oct 2023/Workshop Creative/382409326_708299877365337_8886238343735456849_n.jpg"
    ],
    schedule: [
      {
        day: "Day 1 - October 17",
        topics: [
          "Introduction to Arduino Platform",
          "Arduino IDE Setup",
          "Basic Programming Concepts",
          "Digital I/O Operations",
          "LED Projects"
        ]
      },
      {
        day: "Day 2 - October 18",
        topics: [
          "Sensor Integration",
          "Analog Input/Output",
          "Serial Communication",
          "Basic Project Development",
          "Temperature Monitoring System"
        ]
      },
      {
        day: "Day 3 - October 19",
        topics: [
          "Advanced Sensor Applications",
          "IoT Integration",
          "Project Implementation",
          "Final Project Showcase",
          "Future Learning Path"
        ]
      }
    ]
  },
  'kicad-eda-workshop': {
    title: "KiCaD EDA Workshop",
    date: "2023",
    image: "/IoT CoE Events and Workshop/4. KiCaD EDA Workshop - PCB Designing and Fabrication/KiCad creative .jpg",
    highlights: [
      "PCB Design Fundamentals",
      "EDA Tool Mastery",
      "Hardware Design",
      "Practical PCB Layout",
      "Component Selection",
      "Design Rules & DFM"
    ],
    description: `An intensive workshop on professional PCB design using KiCaD EDA software. Participants learned industry-standard PCB design techniques, from component selection to final production preparation.

The workshop provided hands-on experience with real PCB design projects, teaching professional techniques for component placement, routing strategies, and manufacturing considerations.

Key Learning Outcomes:
• Professional PCB Design Workflow
• Component Library Management
• Design Rule Implementation
• Manufacturing Considerations
• Quality Assurance Techniques
• Industry Best Practices`,
    venue: "IoT CoE Lab, SISTec, Bhopal",
    gallery: [
      "/IoT CoE Events and Workshop/4. KiCaD EDA Workshop - PCB Designing and Fabrication/KiCad creative .jpg",
      "/IoT CoE Events and Workshop/4. KiCaD EDA Workshop - PCB Designing and Fabrication/Photographs/IMG_20230921_101522.jpg",
      "/IoT CoE Events and Workshop/4. KiCaD EDA Workshop - PCB Designing and Fabrication/Photographs/IMG_20230921_102105.jpg",
      "/IoT CoE Events and Workshop/4. KiCaD EDA Workshop - PCB Designing and Fabrication/Photographs/IMG_20230926_155301.jpg",
      "/IoT CoE Events and Workshop/4. KiCaD EDA Workshop - PCB Designing and Fabrication/Photographs/IMG_20230926_155322.jpg"
    ],
    schedule: [
      {
        day: "Day 1",
        topics: [
          "Introduction to KiCaD",
          "Schematic Design Basics",
          "Component Libraries",
          "Circuit Design Principles",
          "Schematic Best Practices"
        ]
      },
      {
        day: "Day 2",
        topics: [
          "PCB Layout Fundamentals",
          "Design Rules and Constraints",
          "Routing Techniques",
          "Layer Management",
          "Manufacturing Preparation"
        ]
      }
    ]
  },
  'mandsaur-university-workshop': {
    title: "IoT Workshop at Mandsaur University",
    date: "September 2023",
    image: "/IoT CoE Events and Workshop/3. IoT Workshop at Mandsaur University, Mandsaur/Photographs/Group ph.jpg",
    highlights: [
      "IoT Fundamentals",
      "ESP8266 Programming",
      "MicroPython",
      "Practical Sessions",
      "Industry Applications",
      "Live Demonstrations"
    ],
    description: `A comprehensive IoT workshop conducted at Mandsaur University, bringing advanced IoT education to aspiring engineers. This workshop focused on practical IoT development using ESP8266 and MicroPython, providing hands-on experience with real-world applications.

The workshop covered both theoretical foundations and practical implementations, with students working directly with ESP8266 boards and various sensors. The curriculum was designed to provide a strong foundation in IoT development while emphasizing practical, industry-relevant skills.

Key Learning Areas:
• ESP8266 NodeMCU Programming
• MicroPython Implementation
• Sensor Integration
• IoT Protocol Implementation
• Cloud Platform Integration
• Real-time Data Processing

The workshop included hands-on sessions with:
• ESP8266 Hardware Setup
• MicroPython Programming
• Sensor Data Collection
• WiFi Configuration
• Cloud Connectivity
• Project Development`,
    venue: "Mandsaur University, Mandsaur",
    gallery: [
      "/IoT CoE Events and Workshop/3. IoT Workshop at Mandsaur University, Mandsaur/Photographs/Group ph.jpg",
      "/IoT CoE Events and Workshop/3. IoT Workshop at Mandsaur University, Mandsaur/Photographs/IMG20230916130246.jpg",
      "/IoT CoE Events and Workshop/3. IoT Workshop at Mandsaur University, Mandsaur/Photographs/IMG20230916130247.jpg",
      "/IoT CoE Events and Workshop/3. IoT Workshop at Mandsaur University, Mandsaur/Photographs/IMG20230916130326.jpg",
      "/IoT CoE Events and Workshop/3. IoT Workshop at Mandsaur University, Mandsaur/Photographs/IMG-20230912-WA0002.jpg",
      "/IoT CoE Events and Workshop/3. IoT Workshop at Mandsaur University, Mandsaur/Photographs/IMG-20230912-WA0013.jpg",
      "/IoT CoE Events and Workshop/3. IoT Workshop at Mandsaur University, Mandsaur/Photographs/IMG-20230912-WA0015.jpg",
      "/IoT CoE Events and Workshop/3. IoT Workshop at Mandsaur University, Mandsaur/Photographs/WhatsApp Image 2023-09-16 at 13.10.48.jpg"
    ],
    schedule: [
      {
        day: "Day 1",
        topics: [
          "Introduction to IoT Architecture",
          "ESP8266 Hardware Overview",
          "MicroPython Basics",
          "Development Environment Setup",
          "First IoT Project Implementation"
        ]
      },
      {
        day: "Day 2",
        topics: [
          "Advanced Sensor Integration",
          "WiFi Programming & Protocols",
          "Cloud Platform Integration",
          "Data Collection & Processing",
          "Real-time Monitoring Systems"
        ]
      },
      {
        day: "Day 3",
        topics: [
          "Project Development",
          "Advanced IoT Applications",
          "Troubleshooting Techniques",
          "Best Practices & Standards",
          "Project Presentations"
        ]
      }
    ]
  },
  'ex-v-semester-iot-training': {
    title: "EX V Semester IoT Training",
    date: "2023",
    image: "/IoT CoE Events and Workshop/2. EX V Semester IoT Training/Photographs/creative alter.jpg",
    highlights: [
      "Advanced IoT Curriculum",
      "Semester-Long Training",
      "Practical Skill Development",
      "Industry-Relevant Projects",
      "Comprehensive IoT Learning",
      "Hands-on Workshops"
    ],
    description: `A comprehensive IoT training program designed for V Semester students, providing an in-depth exploration of Internet of Things technologies and applications. This intensive training program was crafted to bridge the gap between academic knowledge and real-world IoT implementation.

The program covered a wide range of IoT concepts, from foundational principles to advanced implementation strategies. Students were exposed to cutting-edge technologies, practical development techniques, and industry-standard practices.

Key Learning Objectives:
• Advanced IoT Architecture
• Sensor Integration
• Microcontroller Programming
• Cloud Platform Connectivity
• Data Analytics
• IoT Security Fundamentals

Training Highlights:
• Comprehensive Theoretical Sessions
• Practical Coding Workshops
• Real-world Project Development
• Industry Expert Mentorship
• Advanced Technology Exposure
• Career Preparation in IoT Domain`,
    venue: "IoT CoE Lab, SISTec, Bhopal",
    gallery: [
      "/IoT CoE Events and Workshop/2. EX V Semester IoT Training/Photographs/creative alter.jpg",
      "/IoT CoE Events and Workshop/2. EX V Semester IoT Training/Photographs/IMG_20231107_121456.jpg",
      "/IoT CoE Events and Workshop/2. EX V Semester IoT Training/Photographs/IMG_20231107_121504.jpg"
    ],
    schedule: [
      {
        day: "Week 1-2",
        topics: [
          "IoT Fundamentals",
          "Microcontroller Basics",
          "Sensor Technology Introduction",
          "Programming Foundations",
          "Development Environment Setup"
        ]
      },
      {
        day: "Week 3-4",
        topics: [
          "Advanced Sensor Integration",
          "Cloud Platform Connectivity",
          "Data Collection & Processing",
          "IoT Protocols",
          "Practical Implementation"
        ]
      },
      {
        day: "Week 5-6",
        topics: [
          "Project Development",
          "Advanced IoT Applications",
          "Industry Use Cases",
          "Career Guidance",
          "Final Project Presentations"
        ]
      }
    ]
  },
  'team-formation-of-iot-coe': {
    title: "Team Formation of IoT CoE",
    date: "2023",
    image: "/IoT CoE Events and Workshop/1. Team Formation of IoT CoE/Photographs/Team Formation.jpg",
    highlights: [
      "Team Building",
      "Leadership Development",
      "Role Allocation",
      "Vision Alignment",
      "Skill Assessment",
      "Strategic Planning"
    ],
    description: `A strategic initiative to form and align the core team of the Internet of Things Centre of Excellence (IoT CoE). This comprehensive team formation process was designed to create a cohesive, high-performing unit dedicated to advancing IoT education and innovation.

The event focused on identifying individual strengths, aligning team members with complementary skills, and establishing a shared vision for the IoT CoE. Through a series of carefully designed activities, participants underwent thorough assessment and strategic positioning.

Key Focus Areas:
• Individual Skill Mapping
• Team Dynamics Analysis
• Leadership Potential Identification
• Role Compatibility
• Strategic Alignment
• Innovation Potential

Team Formation Process:
• Comprehensive Skill Assessment
• Personality Profiling
• Team Compatibility Workshops
• Strategic Role Allocation
• Vision and Mission Alignment
• Future Planning and Goal Setting`,
    venue: "IoT CoE Lab, SISTec, Bhopal",
    gallery: [
      "/IoT CoE Events and Workshop/1. Team Formation of IoT CoE/Photographs/Team Formation.jpg",
      "/IoT CoE Events and Workshop/1. Team Formation of IoT CoE/Photographs/Team Formation (1).jpg",
      "/IoT CoE Events and Workshop/1. Team Formation of IoT CoE/Photographs/Team Formation (2).jpg"
    ],
    schedule: [
      {
        day: "Session 1",
        topics: [
          "Individual Skill Assessment",
          "Personality Profiling",
          "Strengths and Weaknesses Analysis",
          "Initial Team Interaction",
          "Vision Exploration"
        ]
      },
      {
        day: "Session 2",
        topics: [
          "Team Dynamics Workshop",
          "Role Compatibility Analysis",
          "Leadership Potential Identification",
          "Strategic Alignment Discussion",
          "Team Building Exercises"
        ]
      },
      {
        day: "Session 3",
        topics: [
          "Final Team Configuration",
          "Role Allocation",
          "Future Strategy Planning",
          "Goal Setting",
          "Commitment and Vision Alignment"
        ]
      }
    ]
  },
  'ex-v-semester-training': {
    title: "EX V Semester IoT Training",
    date: "2023",
    image: "/IoT CoE Events and Workshop/2. EX V Semester IoT Training/Training Images/training-1.jpg",
    highlights: [
      "Semester-long Training",
      "Project Development",
      "Industry Skills",
      "Hands-on Learning",
      "Assessment Based",
      "Career Guidance"
    ],
    description: `A comprehensive semester-long IoT training program designed specifically for EX V semester students. This intensive program combined theoretical knowledge with practical implementation, preparing students for industry demands.

The training followed a structured approach with regular assessments and project work, ensuring students developed both technical skills and professional competencies.

Program Features:
• Structured Learning Path
• Regular Assessments
• Industry-relevant Projects
• Expert Mentoring
• Hands-on Labs
• Career Development Focus`,
    venue: "IoT CoE Lab, SISTec, Bhopal",
    gallery: [
      "/IoT CoE Events and Workshop/2. EX V Semester IoT Training/Training Images/training-1.jpg",
      "/IoT CoE Events and Workshop/2. EX V Semester IoT Training/Training Images/training-2.jpg",
      "/IoT CoE Events and Workshop/2. EX V Semester IoT Training/Training Images/training-3.jpg",
      "/IoT CoE Events and Workshop/2. EX V Semester IoT Training/Training Images/training-4.jpg"
    ],
    schedule: [
      {
        day: "Module 1: Foundations",
        topics: [
          "IoT Fundamentals",
          "Sensor Basics",
          "Programming Concepts",
          "Hardware Introduction",
          "Basic Projects"
        ]
      },
      {
        day: "Module 2: Advanced Concepts",
        topics: [
          "Advanced Sensors",
          "Data Processing",
          "Cloud Integration",
          "Project Development",
          "Industry Applications"
        ]
      },
      {
        day: "Module 3: Project Phase",
        topics: [
          "Project Planning",
          "Implementation",
          "Testing & Debugging",
          "Documentation",
          "Final Presentation"
        ]
      }
    ]
  },
  'team-formation': {
    title: "Team Formation of IoT CoE",
    date: "2023",
    image: "/IoT CoE Events and Workshop/1. Team Formation of IoT CoE/Creative - Join IoT CoE.jpg",
    highlights: [
      "Team Building",
      "Skill Assessment",
      "Role Assignment",
      "Project Planning",
      "Vision Setting",
      "Leadership Development"
    ],
    description: `The inaugural event marking the formation of the IoT Centre of Excellence team. Through a carefully designed selection process, talented students were chosen and appointed to various roles within the CoE.

The event focused on building a strong foundation for the IoT CoE, identifying student leaders, and creating a collaborative environment for innovation and learning.

Selection Process:
• Rigorous Screening
• Technical Assessment
• Leadership Evaluation
• Team Compatibility
• Vision Alignment
• Role-specific Tasks`,
    venue: "IoT CoE Lab, SISTec, Bhopal",
    gallery: [
      "/IoT CoE Events and Workshop/1. Team Formation of IoT CoE/Creative - Join IoT CoE.jpg",
      "/IoT CoE Events and Workshop/1. Team Formation of IoT CoE/Team Photos/team-1.jpg",
      "/IoT CoE Events and Workshop/1. Team Formation of IoT CoE/Team Photos/team-2.jpg",
      "/IoT CoE Events and Workshop/1. Team Formation of IoT CoE/Team Photos/team-3.jpg"
    ],
    schedule: [
      {
        day: "Phase 1: Selection",
        topics: [
          "Screening Examination",
          "Skill Assessment",
          "Interview Process",
          "Team Role Discussion",
          "Technical Evaluation"
        ]
      },
      {
        day: "Phase 2: Formation",
        topics: [
          "Team Formation",
          "Role Assignment",
          "Vision and Goals",
          "Project Planning",
          "Leadership Training"
        ]
      },
      {
        day: "Phase 3: Initiation",
        topics: [
          "Team Building Activities",
          "Project Kickoff",
          "Process Setup",
          "Responsibility Assignment",
          "Future Planning"
        ]
      }
    ]
  }
};

export default function EventDetails() {
  const { eventId } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const event = eventDetails[eventId as string];

  if (!event) {
    return <div>Event not found</div>;
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-[60vh] overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
            >
              {event.title}
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 text-lg"
            >
              <div className="flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-blue-400" />
                {event.date}
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-red-400" />
                {event.venue}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-4 py-16"
      >
        {/* Description */}
        <motion.div variants={item} className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About the Event</h2>
          <p className="text-gray-600 text-lg leading-relaxed">{event.description}</p>
        </motion.div>

        {/* Highlights */}
        <motion.div variants={item} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Event Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-500 rounded-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">{highlight}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Schedule */}
        {event.schedule && (
          <motion.div variants={item} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Event Schedule</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {event.schedule.map((day, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
                    <h3 className="text-xl font-bold text-white">{day.day}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {day.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start space-x-3">
                          <ChevronRight className="w-5 h-5 text-blue-500 mt-0.5" />
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Gallery */}
        <motion.div variants={item} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Event Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {event.gallery.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
