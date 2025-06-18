import React from 'react';

interface MemberProps {
    name: string;
    role: string;
    organization: string;
    quote: string;
    imageUrl: string;
}

const MemberCard: React.FC<MemberProps> = ({ name, role, organization, quote, imageUrl }) => {
    return (
        <div className="bg-white rounded-2xl p-8 w-[300px] text-center shadow-md hover:-translate-y-1 transition-transform duration-300">
            <div className="w-[120px] h-[120px] mx-auto mb-5 rounded-full overflow-hidden border-3 border-gray-100">
                <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-1">{name}</h3>
            <div className="text-lg text-gray-700 mb-1">{organization}</div>
            <div className="text-base text-gray-600 mb-5">{role}</div>
            <p className="italic text-gray-600 leading-relaxed">
                "{quote}"
            </p>
        </div>
    );
};

const Members: React.FC = () => {
    const members = [
        {
            name: "John Doe",
            role: "Technical Lead",
            organization: "IoT Club",
            quote: "Working with the IoT Club has been an amazing experience. We've created innovative solutions and learned so much together.",
            imageUrl: "/images/default-avatar.jpg"
        },
        {
            name: "Jane Smith",
            role: "Project Manager",
            organization: "IoT Club",
            quote: "Leading projects in the IoT Club has helped me develop both technical and leadership skills.",
            imageUrl: "/images/default-avatar.jpg"
        },
        {
            name: "Mike Johnson",
            role: "Hardware Specialist",
            organization: "IoT Club",
            quote: "The IoT Club provides an excellent platform for experimenting with cutting-edge technologies.",
            imageUrl: "/images/default-avatar.jpg"
        }
    ];

    return (
        <div className="flex justify-center items-center flex-wrap gap-8 py-10 px-5">
            {members.map((member, index) => (
                <MemberCard key={index} {...member} />
            ))}
        </div>
    );
};

export default Members;
