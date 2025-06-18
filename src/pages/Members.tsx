import React from 'react';
import Footer from '../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import '../styles/members.css';

export default function Members() {
  const members = [
    {
      name: "Mohnish Singh",
      role: "Student Member",
      expertise: "IoT Development, Project Management",
      image: "/images/IOT_Members_Photos/Mohnish Singh.jpeg",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Aavi Agrawal",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Aavi Agrawal.jpg",
      linkedin: "https://www.linkedin.com/in/aavi-agrawal-7a8a20249",
      github: "#"
    },
    {
      name: "Aditya Kumar",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Aditya Kumar.jpg",
      linkedin: "https://www.linkedin.com/in/aditya-kumar-7a8a20249",
      github: "#"
    },
    {
      name: "Aditya Rai",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Aditya Rai.jpg",
      linkedin: "https://www.linkedin.com/in/aditya-rai-247236250",
      github: "#"
    },
    {
      name: "Akhilesh Choudhary",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Akhilesh choudhary.JPG",
      linkedin: "https://www.linkedin.com/in/akhilesh-choudhary-774400265",
      github: "#"
    },
    {
      name: "Anjali Choupariya",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Anjali Choupariya.jpg",
      linkedin: "https://www.linkedin.com/in/anjali-choupariya-7a8a20249",
      github: "#"
    },
    {
      name: "Aryan Sen",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Aryan Sen.jpg",
      linkedin: "https://www.linkedin.com/in/aryan-sen-7a8a20249",
      github: "#"
    },
    {
      name: "Deepesh Sujane",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Deepesh Sujane.jpg",
      linkedin: "https://www.linkedin.com/in/deepesh-sujane-b3745b244",
      github: "#"
    },
    {
      name: "Divya Dhanwani",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Divya Dhanwani.jpg",
      linkedin: "https://www.linkedin.com/in/divya-dhanwani-7a8a20249",
      github: "#"
    },
    {
      name: "Gaurav Sahita",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Gaurav Sahita.jpg",
      linkedin: "https://www.linkedin.com/in/gaurav-sahita-82592b244",
      github: "#"
    },
    {
      name: "Gaurav Singh",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Gourav Singh.jpg",
      linkedin: "https://www.linkedin.com/in/gourav-singh-040089238",
      github: "#"
    },
    {
      name: "Kamna Dwivedi",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Kamna Dwivedi.jpg",
      linkedin: "https://www.linkedin.com/in/kamna-dwivedi-7a8a20249",
      github: "#"
    },
    {
      name: "Lavina Pahuja",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Laveena Pahuja.JPG",
      linkedin: "https://www.linkedin.com/in/laveena-pahuja-581789243",
      github: "#"
    },
    {
      name: "Mayank Mankar",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Mayank Mankar.jpg",
      linkedin: "https://www.linkedin.com/in/mayank-mankar-7a8a20249",
      github: "#"
    },
    {
      name: "Mohnish Singh Richariya",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Mohnish Singh Richariya.jpg",
      linkedin: "https://www.linkedin.com/in/mohnishsr/",
      github: "#"
    },
    {
      name: "Pankaj Kushwaha",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Pankaj Kushwaha.jpg",
      linkedin: "https://www.linkedin.com/in/pankaj-kushwah-515b99285",
      github: "#"
    },
    {
      name: "Pratham Makoriya",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Pratham Makoriya.jpg",
      linkedin: "https://www.linkedin.com/in/pratham-makoriya-7a8a20249",
      github: "#"
    },
    {
      name: "Rachit Shrivastava",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Rachit Shrivastava.JPG",
      linkedin: "https://www.linkedin.com/in/rachit-shrivastava-276611232",
      github: "#"
    },
    {
      name: "Rahul Soni",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Rahul Soni.jpg",
      linkedin: "https://www.linkedin.com/in/rahul-soni-64aab3233",
      github: "#"
    },
    {
      name: "Raj Shrivastava",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Raj Shrivastava.jpg",
      linkedin: "https://www.linkedin.com/in/raj-shrivastava-4a0a7a254",
      github: "#"
    },
    {
      name: "Rajeev Kushwaha",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Rajeev kushwaha.jpg",
      linkedin: "https://www.linkedin.com/in/rajeev-kushwah-65350426b",
      github: "#"
    },
    {
      name: "Rashmi Gour",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Rashmi Gour.jpg",
      linkedin: "https://www.linkedin.com/in/rashmi-gour-4b150a273",
      github: "#"
    },
    {
      name: "Ravindra Baghel",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Ravindra Baghel.jpg",
      linkedin: "https://www.linkedin.com/in/ravindra-baghel-7a8a20249",
      github: "#"
    },
    {
      name: "Rishabh Pawani",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Rishabh Pawani.jpg",
      linkedin: "https://www.linkedin.com/in/rishabh-pawani-7a8a20249",
      github: "#"
    },
    {
      name: "Rohit Rai",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Rohit Rai.jpg",
      linkedin: "https://www.linkedin.com/in/rohit-rai-7a8a20249",
      github: "#"
    },
    {
      name: "Shivpratap Singh Mewada",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/ShivPratap Mewada.jpg",
      linkedin: "https://www.linkedin.com/in/shiv-pratap-mewada-05117623b",
      github: "#"
    },
    {
      name: "Shubham Kushwaha",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Shubham Kushwaha.jpg",
      linkedin: "https://www.linkedin.com/in/shubham-kushwaha-7a8a20249",
      github: "#"
    },
    {
      name: "Vishwas Pallival",
      role: "Student Member",
      expertise: "IoT Development",
      image: "/images/IOT_Members_Photos/Vishwas Pallival.jpg",
      linkedin: "https://www.linkedin.com/in/vishwas-pallival-7a8a20249",
      github: "#"
    }
  ];

  const leaders = [
    {
      name: "Dr. Dinesh Kumar Rajoriya",
      role: "Principal",
      image: "https://www.sistecgn.ac.in/assets/admin/upload/faculties//639562image.jpg",
      linkedin: "#",
      github: "#",
      expertise: ["Strategic Planning", "AI/ML", "Academic Leadership"],
      description: " "
    },
    {
      name: "Dr. Ravishankar Mishra",
      role: "Professor",
      image: "https://www.sistec.ac.in/assets/upload/faculties/faculty-951400119.JPG",
      linkedin: "#",
      github: "#",
      expertise: ["IoT", "Academic Leadership", "Research Guidance"],
      description: " "
    },
    {
      name: "Mr. Rahul Shrivastava",
      role: "Assistant Professor",
      image: "https://www.sistecgn.ac.in/assets/admin/upload/faculties//361529image.JPG",
      linkedin: "#",
      github: "#",
      expertise: ["Technology", "Innovation", "Academic Mentoring"],
      description: " "
    },
    {
      name: "Dr. Komal Tahiliani",
      role: "Associate Professor",
      image: "https://www.sistecgn.ac.in/assets/admin/upload/faculties//178423image.jpg",
      linkedin: "#",
      github: "#",
      expertise: ["Research", "Project Management", "Academic Excellence"],
      description: " "
    },
    {
      name: "Dr. Ruchin Kacker",
      role: "Associate Professor",
      image: "https://www.sistecgn.ac.in/assets/admin/upload/faculties//368733image.JPG",
      linkedin: "#",
      github: "#",
      expertise: ["Mechanical Engineering", "Research", "Technical Innovation"],
      description: " "
    },
    {
      name: "Mr. Ankit Chourasiya",
      role: "Assistant Professor",
      image: "https://www.sistecgn.ac.in/assets/admin/upload/faculties//403431image.JPG",
      linkedin: "#",
      github: "#",
      expertise: ["IoT", "Drone Technology", "Academic Guidance"],
      description: " "
    }
  ];

  const MemberCard = ({ member }: { member: typeof members[0] }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 mx-4 my-8">
      <div className="p-8">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold text-center text-gray-900">{member.name}</h3>
        <p className="text-gray-600 text-center mt-2">{member.role}</p>
        <p className="text-gray-500 text-center mt-4 text-sm">Skills: {member.expertise}</p>
        <div className="mt-6 flex justify-center space-x-4">
          <a href={member.linkedin} className="text-blue-600 hover:text-blue-800 transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href={member.github} className="text-gray-600 hover:text-gray-800 transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );

  const LeaderCard = ({ leader }: { leader: typeof leaders[0] }) => (
    <motion.div 
      className="leader-card bg-white rounded-xl overflow-hidden"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative">
        {/* Image Container with Gradient Overlay */}
        <div className="relative h-64 overflow-hidden">
          <motion.img 
            src={leader.image} 
            alt={leader.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <motion.h3 
            className="text-2xl font-bold mb-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {leader.name}
          </motion.h3>
          <motion.p 
            className="text-blue-200 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {leader.role}
          </motion.p>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 bg-white">
        {/* Expertise Tags */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">EXPERTISE</h4>
          <div className="flex flex-wrap gap-2">
            {leader.expertise.map((skill, index) => (
              <motion.span
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Description */}
        <motion.p 
          className="text-gray-600 mb-6 line-clamp-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {leader.description}
        </motion.p>

        {/* Achievements */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">ACHIEVEMENTS</h4>
          <motion.div 
            className="p-4 bg-gray-50 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-700 text-sm">{leader.achievements}</p>
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="flex justify-end space-x-4">
          <motion.a
            href={leader.linkedin}
            className="text-gray-400 hover:text-blue-500 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </motion.a>
          <motion.a
            href={leader.github}
            className="text-gray-400 hover:text-gray-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-90"></div>
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat opacity-20"></div>
        </div>
        <div className="relative py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">IoT CoE Members</h1>
          <p className="mt-6 text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Meet our passionate community members who drive innovation in IoT technology
          </p>
        </div>
      </section>

      {/* Club Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Mentors</h1>
            <p className="text-xl text-gray-600">With combined expertise in IoT and innovation, we're leading the future of technology.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-white shadow-md"
                    />
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                    <p className="text-lg text-gray-600 mb-3">{leader.role}</p>
                    
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {leader.expertise.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-6">
                      {leader.description || `Distinguished professional contributing to academic and research excellence in ${leader.expertise.join(', ')}.`}
                    </p>

                    <div className="flex space-x-4">
                      <motion.a
                        href={leader.linkedin}
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </motion.a>
                      <motion.a
                        href={leader.github}
                        className="text-gray-400 hover:text-gray-800 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Members Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Club Members
          </motion.h2>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={12}
            slidesPerView={3}
            navigation
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            className="members-slider"
            breakpoints={{
              320: { 
                slidesPerView: 3,
                spaceBetween: 8
              },
              640: { 
                slidesPerView: 3,
                spaceBetween: 12
              },
              768: { 
                slidesPerView: 4,
                spaceBetween: 16
              },
              1024: { 
                slidesPerView: 5,
                spaceBetween: 20
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 24
              }
            }}
          >
            {members.map((member, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="member-card bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-200"
                >
                  <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 sm:p-6">
                    <h3 className="text-sm sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2 truncate">{member.name}</h3>
                    <p className="text-xs sm:text-base text-blue-600 font-medium mb-1 sm:mb-2 truncate">{member.role}</p>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-4 line-clamp-2">{member.expertise}</p>
                    <div className="flex space-x-3">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                      >
                        <i className="fab fa-linkedin text-sm sm:text-xl"></i>
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                      >
                        <i className="fab fa-github text-sm sm:text-xl"></i>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
}
