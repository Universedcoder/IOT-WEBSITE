import React from 'react';
import { X, Calendar, MapPin } from 'lucide-react';

interface Coordinator {
  name: string;
  title: string;
  contact: string;
}

interface EventDetails {
  title: string;
  date: string;
  venue: string;
  registrationLink: string;
  imageUrl: string;
}

interface EventPopupProps {
  onClose: () => void;
}

const eventData: EventDetails = {
  title: "PCB Designing Workshop",
  date: "12-14 Dec 2024",
  venue: "IoT CoE Lab, SISTec",
  registrationLink: "https://forms.gle/Nqs4vxxK8yvfqVz69",
  imageUrl: "/images/EVENTpopupimage/invite 2 .jpg"
};

const EventPopup: React.FC<EventPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-xl shadow-2xl relative overflow-hidden" style={{ width: 'fit-content', maxWidth: '95vw' }}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 z-10 bg-white rounded-full p-1"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Event Image */}
        <div className="flex justify-center items-center bg-white">
          <img 
            src={eventData.imageUrl} 
            alt={eventData.title}
            className="w-auto max-h-[70vh] object-contain"
          />
        </div>

        {/* Content Container */}
        <div className="p-3 bg-white">
          <h2 className="text-lg font-bold mb-2">{eventData.title}</h2>
          
          {/* Event Details */}
          <div className="space-y-1.5">
            <div className="flex items-center text-gray-600 text-sm">
              <Calendar className="h-4 w-4 mr-1.5" />
              <span>{eventData.date}</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin className="h-4 w-4 mr-1.5" />
              <span>{eventData.venue}</span>
            </div>
          </div>

          {/* Registration Button */}
          <a
            href={eventData.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block w-full bg-blue-600 text-white text-center py-1.5 px-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-sm"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventPopup;