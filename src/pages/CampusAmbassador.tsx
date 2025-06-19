import React from 'react';
import Footer from '../components/Footer';
import { Award, Users, Zap, TrendingUp, Briefcase, Volume2, Link2, Edit3, MessageCircle, Gift, Star, Shield, Speaker, Edit, Share2, Mic, Cpu } from 'lucide-react';

interface CampusAmbassadorProps {
  openAmbassadorModal: () => void;
}

const CampusAmbassador: React.FC<CampusAmbassadorProps> = ({ openAmbassadorModal }) => {

  const studentBenefits = [
    {
      category: 'Skill Development',
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      points: [
        'Gain hands-on experience in leadership, communication, and event management.',
        'Enhance your knowledge of IoT technologies and applications through workshops and training.',
      ],
    },
    {
      category: 'Networking Opportunities',
      icon: <Users className="w-6 h-6 text-blue-600" />,
      points: [
        'Connect with industry experts, mentors, and peers passionate about IoT.',
        'Build relationships that can lead to internships, projects, or job opportunities.',
      ],
    },
    {
      category: 'Recognition and Certification',
      icon: <Award className="w-6 h-6 text-blue-600" />,
      points: [
        'Earn a certificate of appreciation or experience, adding weight to your resume.',
        'Stand out as a proactive and tech-savvy student on campus.',
        'Your name of Website of IoT CoE.', // As per OCR, might need clarification
      ],
    },
    {
      category: 'Exclusive Access',
      icon: <Gift className="w-6 h-6 text-blue-600" />,
      points: [
        'Get early access to IoT CoE events, resources, and tools.',
        'Opportunity to test and work with IoT hardware and software.',
      ],
    },
    {
      category: 'Career Advancement',
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      points: [
        'Develop a strong personal brand and showcase your enthusiasm for IoT.',
        'Potential to secure internships through IoT CoE\'s industry collaborations.',
      ],
    },
  ];

  const studentRoles = [
    {
      category: 'Promoter',
      icon: <Volume2 className="w-6 h-6 text-purple-600" />,
      points: [
        'Promote IoT CoE activities, workshops, and events across campus.',
        'Use social media, posters, and word-of-mouth to ensure maximum participation.',
      ],
    },
    {
      category: 'Liaison',
      icon: <Link2 className="w-6 h-6 text-purple-600" />,
      points: [
        'Act as a bridge between the IoT CoE and the student community.',
        'Share feedback and suggestions from students to improve CoE initiatives.',
      ],
    },
    {
      category: 'Coordinator',
      icon: <Edit3 className="w-6 h-6 text-purple-600" />,
      points: [
        'Assist in organizing IoT-related events like hackathons, webinars, and training sessions.',
        'Ensure smooth event execution by managing logistics and communication.',
      ],
    },
    {
      category: 'Advocate',
      icon: <MessageCircle className="w-6 h-6 text-purple-600" />,
      points: [
        'Create awareness about IoT\'s potential and its applications in solving real-world problems.',
        'Inspire fellow students to explore career paths in IoT and related fields.',
      ],
    },
    {
      category: 'Learner and Contributor',
      icon: <Cpu className="w-6 h-6 text-purple-600" />,
      points: [
        'Stay updated on the latest IoT trends and share insights with the student body.',
        'Contribute innovative ideas for projects or improvements in CoE activities.',
      ],
    },
  ];

  const juniorBenefits = [
    {
      category: 'Skill Development',
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      points: [
        'Develop leadership, communication, and event organization skills.',
        'Gain foundational knowledge of IoT technologies and their real-world applications.',
      ],
    },
    {
      category: 'Early Exposure to Technology',
      icon: <Star className="w-6 h-6 text-blue-600" />,
      points: [
        'Access beginner-friendly training on IoT concepts and devices.',
        'Work with cutting-edge technologies and tools to enhance your understanding of the digital world.',
      ],
    },
    {
      category: 'Networking Opportunities',
      icon: <Users className="w-6 h-6 text-blue-600" />,
      points: [
        'Connect with mentors, experts, and like-minded peers passionate about technology.',
        'Opportunities to interact with students from other schools and institutions.',
      ],
    },
    {
      category: 'Recognition and Rewards',
      icon: <Award className="w-6 h-6 text-blue-600" />,
      points: ['Earn certificates, badges, and awards for your contributions and achievements.'],
    },
    {
      category: 'Career Preparation',
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      points: [
        'Explore potential career paths in technology and engineering.',
        'Develop problem-solving and teamwork skills crucial for future success.',
      ],
    },
  ];

  const juniorRoles = [
    {
      category: 'Technology Advocate',
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      points: [
        'Spread awareness about IoT and its exciting potential among your peers.',
        'Encourage students to explore how IoT can solve everyday problems.',
      ],
    },
    {
      category: 'Event Promoter',
      icon: <Speaker className="w-6 h-6 text-purple-600" />,
      points: [
        'Publicize IoT CoE workshops, competitions, and activities through posters, announcements, and social media.',
        'Motivate fellow students to participate in IoT-related events.',
      ],
    },
    {
      category: 'Coordinator',
      icon: <Edit className="w-6 h-6 text-purple-600" />,
      points: [
        'Assist in planning and executing events like webinars, coding contests, or maker challenges.',
        'Act as the go-to person for students interested in IoT events and activities.',
      ],
    },
    {
      category: 'Student Liaison',
      icon: <Share2 className="w-6 h-6 text-purple-600" />,
      points: [
        'Represent student interests and share their feedback with IoT CoE coordinators.',
        'Act as a bridge to ensure smooth communication between IoT CoE and the school community.',
      ],
    },
    {
      category: 'Innovator',
      icon: <Mic className="w-6 h-6 text-purple-600" />,
      points: [
        'Propose creative ideas for projects or events that align with IoT CoE objectives.',
        'Work on small-scale IoT projects to inspire others and showcase practical applications.',
      ],
    },
  ];

  const renderSection = (title: string, items: Array<{ category: string; icon: JSX.Element; points: string[] }>) => (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center relative inline-block after:content-[''] after:block after:w-1/2 after:h-1 after:bg-blue-600 after:mx-auto after:mt-2 after:rounded-full">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-5 rounded-lg shadow-md border-l-4 border-l-blue-500 hover:border-l-purple-500 border-t border-r border-b border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-3">
              <div className="p-2 rounded-full bg-blue-50 mr-3 transform transition-transform duration-300 group-hover:rotate-12">
                {React.cloneElement(item.icon, { className: "w-5 h-5 text-blue-600" })}
              </div>
              <h4 className="text-lg font-semibold text-gray-700">{item.category}</h4>
            </div>
            <ul className="text-gray-600 space-y-1.5 pl-4 text-sm">
              {item.points.map((point, pIndex) => (
                <li key={pIndex} className="relative pl-2 before:content-[''] before:absolute before:left-[-8px] before:top-[10px] before:h-1.5 before:w-1.5 before:bg-blue-400 before:rounded-full">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-blue-700 py-16 md:py-24 text-white relative overflow-hidden" // Reduced padding, added overflow-hidden
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div> {/* Background image overlay */}
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 tracking-tight animate-fadeIn">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">Campus Ambassador</span>
          </h1>
          <p className="text-base md:text-xl mb-6 max-w-2xl mx-auto text-blue-100">
            Be the voice of our brand on your campus and lead the change!
          </p>
          <button 
            onClick={openAmbassadorModal}
            className="bg-white text-blue-600 px-6 py-2.5 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 text-base shadow-md hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2"
          >
            Register Now
          </button>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <p className="text-gray-600 italic mb-4 text-sm">"Become a leader, innovator, and change-maker with the IoT CoE Campus Ambassador Program"</p>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Student Ambassador Section */}
        <section className="mb-12 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
            <span className="bg-blue-100 text-blue-700 p-1.5 rounded-lg mr-2">
              <Users className="w-6 h-6 inline-block" />
            </span>
            IoT CoE Student Campus Ambassador
            <span className="ml-2 text-sm bg-blue-600 text-white px-2 py-0.5 rounded-full">UG Students</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {renderSection('Benefits', studentBenefits)}
            {renderSection('Roles & Responsibilities', studentRoles)}
          </div>
        </section>

        {/* Junior Ambassador Section */}
        <section className="mb-12 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
            <span className="bg-purple-100 text-purple-700 p-1.5 rounded-lg mr-2">
              <Star className="w-6 h-6 inline-block" />
            </span>
            IoT CoE Junior Campus Ambassador
            <span className="ml-2 text-sm bg-purple-600 text-white px-2 py-0.5 rounded-full">School Students</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {renderSection('Benefits', juniorBenefits)}
            {renderSection('Roles & Responsibilities', juniorRoles)}
          </div>
        </section>

        {/* Bottom CTA Button */}
        <div className="text-center py-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 shadow-inner">
          <h3 className="text-xl font-bold mb-3 text-gray-800">Ready to make an impact?</h3>
          <p className="text-gray-600 mb-4 max-w-lg mx-auto">Join our network of campus ambassadors and develop valuable skills while representing IoT CoE.</p>
          <button 
            onClick={openAmbassadorModal}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2"
          >
            Apply Now
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CampusAmbassador;
