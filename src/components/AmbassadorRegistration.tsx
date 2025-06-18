import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, BookOpen, GraduationCap, MessageSquare, Target, Heart, Award } from 'lucide-react';

const AmbassadorRegistration = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    enrollmentNumber: '',
    contactNumber: '',
    collegeName: '',
    branch: '',
    aboutYourself: '',
    workshopInterest: '',
    workshopPreferences: '',
    leadershipExperience: '',
    motivation: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modal = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999]">
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        />
        
        <div className="fixed inset-0 flex items-center justify-center p-3">
          <motion.div
            className="relative w-full max-w-2xl bg-white rounded-xl shadow-xl overflow-hidden"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={e => e.stopPropagation()}
          >
            {/* Header - Fixed at top */}
            <div className="bg-white z-10 px-4 py-3 border-b">
              <button
                onClick={onClose}
                className="absolute top-2 right-2 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="h-4 w-4 text-gray-500" />
              </button>

              <div className="mb-1">
                <div className="inline-block p-1.5 px-3 bg-blue-100 rounded-full text-blue-700 text-xs font-medium">
                  Join Our Team
                </div>
                <h3 className="text-lg font-bold text-gray-900 mt-2">
                  Campus Ambassador Registration
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Become a part of SISTec's IoT Centre of Excellence as a Campus Ambassador
                </p>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[calc(85vh-100px)] px-4 py-3">
              <form onSubmit={handleSubmit} id="ambassador-form" className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                        <User className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                        <Mail className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Enrollment Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                        <GraduationCap className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="enrollmentNumber"
                        required
                        value={formData.enrollmentNumber}
                        onChange={handleChange}
                        className="block w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Enter your enrollment number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                        <Phone className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        name="contactNumber"
                        required
                        value={formData.contactNumber}
                        onChange={handleChange}
                        className="block w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Enter your contact number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      College Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                        <BookOpen className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="collegeName"
                        required
                        value={formData.collegeName}
                        onChange={handleChange}
                        className="block w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Enter your college name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Branch
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                        <Award className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="branch"
                        required
                        value={formData.branch}
                        onChange={handleChange}
                        className="block w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Enter your branch"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    About Yourself
                  </label>
                  <div className="relative">
                    <div className="absolute top-2 left-2 pointer-events-none">
                      <MessageSquare className="h-4 w-4 text-gray-400" />
                    </div>
                    <textarea
                      name="aboutYourself"
                      required
                      value={formData.aboutYourself}
                      onChange={handleChange}
                      className="block w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent min-h-[60px] sm:min-h-[80px]"
                      placeholder="Tell us about yourself"
                      rows={3}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Why do you want to be a Campus Ambassador?
                  </label>
                  <div className="relative">
                    <div className="absolute top-2 left-2 pointer-events-none">
                      <Heart className="h-4 w-4 text-gray-400" />
                    </div>
                    <textarea
                      name="motivation"
                      required
                      value={formData.motivation}
                      onChange={handleChange}
                      className="block w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent min-h-[60px] sm:min-h-[80px]"
                      placeholder="Share your motivation"
                      rows={3}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Leadership Experience
                  </label>
                  <div className="relative">
                    <div className="absolute top-2 left-2 pointer-events-none">
                      <Target className="h-4 w-4 text-gray-400" />
                    </div>
                    <textarea
                      name="leadershipExperience"
                      required
                      value={formData.leadershipExperience}
                      onChange={handleChange}
                      className="block w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent min-h-[60px] sm:min-h-[80px]"
                      placeholder="Share your leadership experience"
                      rows={3}
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Footer - Fixed at bottom */}
            <div className="sticky bottom-0 bg-white px-4 py-3 border-t">
              <button
                type="submit"
                form="ambassador-form"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-medium"
              >
                Submit Application
              </button>
            </div>

          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default AmbassadorRegistration;
