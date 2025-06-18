import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Award, BookOpen, ArrowRight, CheckCircle2, Send } from 'lucide-react';
import Footer from '../components/Footer';
import RegistrationForm from '../components/RegistrationForm';
import { useNavigate } from 'react-router-dom';

const Events: React.FC = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<string>('');
  const navigate = useNavigate();

  const upcomingEvents = [
    {
      title: "PCB Designing Workshop!",
      date: "12, 13, 14 December 2024",
      time: "10:00 AM - 4:00 PM",
      location: "IoT CoE Lab, SISTec, Bhopal",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
      category: "Workshop",
      seats: "30 seats",
      price: "₹300"
    },
    {
      title: "Smart City Hackathon",
      date: "April 10, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "IoT Lab, SISTec",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
      category: "Hackathon",
      seats: "100 seats",
      price: "₹500"
    },
    {
      title: "IoT Security Conference",
      date: "May 5, 2024",
      time: "11:00 AM - 5:00 PM",
      location: "Virtual Event",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      category: "Conference",
      seats: "200 seats",
      price: "₹1000"
    }
  ];

  const pastEvents = [
    {
      title: "Innovate IoT Workshop",
      date: "March 19-22, 2024",
      image: "/IoT CoE Events and Workshop/6. Inovate IoT 19 march 2024 to 22 march 2024/creative alter.jpg",
      highlights: ["IoT Development", "Hands-on Training", "Project Building"]
    },
    {
      title: "Arduino Craft Workshop",
      date: "October 17-19, 2023",
      image: "/IoT CoE Events and Workshop/5. ARDUINO CRAFT 17 Oct to 19 Oct 2023/Workshop Creative/382409326_708299877365337_8886238343735456849_n.jpg",
      highlights: ["Arduino Programming", "Hardware Integration", "Project Development"]
    },
    {
      title: "KiCaD EDA Workshop",
      date: "2023",
      image: "/IoT CoE Events and Workshop/4. KiCaD EDA Workshop - PCB Designing and Fabrication/KiCad creative .jpg",
      highlights: ["PCB Designing", "EDA Tools", "Hardware Design"]
    },
    {
      title: "IoT Workshop at Mandsaur University",
      date: "September 2023",
      image: "/IoT CoE Events and Workshop/3. IoT Workshop at Mandsaur University, Mandsaur/Photographs/Group ph.jpg",
      highlights: [
        "ESP8266 Programming",
        "MicroPython",
        "Practical Sessions"
      ]
    },
    {
      title: "EX V Semester IoT Training",
      date: "2023",
      image: "/IoT CoE Events and Workshop/2. EX V Semester IoT Training/Photographs/creative alter.jpg",
      highlights: [
        "Advanced IoT Curriculum",
        "Practical Skill Development",
        "Industry Projects"
      ]
    },
    {
      title: "Team Formation of IoT CoE",
      date: "2023",
      image: "/IoT CoE Events and Workshop/1. Team Formation of IoT CoE/Creative - Join IoT CoE.jpg",
      highlights: [
        "Team Building",
        "Leadership Development",
        "Role Allocation"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Networking",
      description: "Connect with industry experts and like-minded individuals"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certification",
      description: "Earn certificates for workshop participation"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Learning",
      description: "Gain practical knowledge and hands-on experience"
    }
  ];

  const handleRegisterClick = (eventTitle: string) => {
    console.log('Register clicked for:', eventTitle);
    setSelectedEvent(eventTitle);
    setIsRegistrationOpen(true);
  };

  const handlePastEventClick = (title: string) => {
    // Special handling for specific events
    const eventRouteMap: { [key: string]: string } = {
      "IoT Workshop at Mandsaur University": "mandsaur-university-workshop",
      "EX V Semester IoT Training": "ex-v-semester-iot-training",
      "Team Formation of IoT CoE": "team-formation-of-iot-coe"
    };

    // Check if the event has a specific route
    if (eventRouteMap[title]) {
      navigate(`/event/${eventRouteMap[title]}`);
      return;
    }
    
    // Fallback to kebab-case conversion for other events
    const eventId = title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/event/${eventId}`);
  };

  return (
    <>
      <div className="events-page">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 opacity-90"></div>
          <div className="absolute inset-0 overflow-hidden">
            <video 
              className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="/background video/Hero section event.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Upcoming Events & Workshops
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Join our innovative events and workshops to enhance your IoT skills
            </p>
            <button 
              onClick={() => handleRegisterClick('Upcoming Events')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300 text-lg"
            >
              Register Now
            </button>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Discover our upcoming workshops, hackathons, and conferences
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                  <div className="relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                      {event.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-5 w-5 mr-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-5 w-5 mr-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-5 w-5 mr-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-gray-600">{event.seats}</span>
                      <span className="font-semibold text-blue-600">{event.price}</span>
                    </div>
                    <button 
                      onClick={() => handleRegisterClick(event.title)}
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
                    >
                      Register Now <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Past Events</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Explore our previous events and their highlights
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastEvents.map((event, index) => (
                <div 
                  key={index}
                  onClick={() => handlePastEventClick(event.title)}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="relative h-96">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                        <div className="flex items-center text-gray-200 mb-4">
                          <Calendar className="h-5 w-5 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {event.highlights.map((highlight, hIndex) => (
                            <span key={hIndex} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Attend Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Attend Our Events?</h2>
              <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              <p className="text-gray-200 max-w-3xl mx-auto text-lg">
                Experience the benefits of participating in our events
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center hover:transform hover:scale-105 transition duration-300">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-gray-200">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
                <p className="text-gray-200 mb-8">
                  Subscribe to our newsletter for the latest event updates and announcements
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
      <RegistrationForm 
        isOpen={isRegistrationOpen}
        onClose={() => {
          console.log('Closing registration form');
          setIsRegistrationOpen(false);
        }}
        eventTitle={selectedEvent}
      />
    </>
  );
};

export default Events;
