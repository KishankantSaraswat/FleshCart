import React from "react";
import { FaLeaf, FaHandshake, FaHeart, FaUserFriends } from "react-icons/fa";

const About = () => {
  const TEAM_MEMBERS = [
    { name: "Gaurav", role: "Founder & CEO", image: "/team/gaurav.jpg" },
    { name: "Bhuvnesh Sharma", role: "Head of Procurement", image: "/team/bhuvnesh.jpg" },
    { name: "Krishnakant Kumar", role: "Customer Service Manager", image: "/team/krishnakant.jpg" },
    { name: "Pushpendra Upadhyay", role: "Head of Sustainability", image: "/team/pushpendra.jpg" },
  ];

  const VALUES = [
    {
      title: "Authenticity",
      description: "We ensure every product reflects the true essence of Indian cuisine, sourcing ingredients from their authentic regions of origin.",
      icon: <FaLeaf className="text-4xl text-emerald-600 mb-4" />,
    },
    {
      title: "Sustainability",
      description: "We support traditional Indian farming practices while embracing modern eco-friendly solutions to preserve our environment.",
      icon: <FaHandshake className="text-4xl text-emerald-600 mb-4" />,
    },
    {
      title: "Community",
      description: "We actively participate in local festivals and community initiatives, supporting small-scale farmers and traditional businesses.",
      icon: <FaHeart className="text-4xl text-emerald-600 mb-4" />,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">About FreshCart</h1>
          <p className="text-xl text-gray-600">Bringing fresh, authentic Indian groceries to your doorstep since 2010</p>
        </div>

        {/* Our Story */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              FreshCart began in 2010 as a small family-owned business in the heart of Mumbai, 
              driven by our passion to bring the finest Indian groceries and fresh produce to 
              your doorstep.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We take pride in sourcing authentic Indian ingredients, from farm-fresh vegetables 
              to premium spices from Kerala, working directly with local farmers and artisanal 
              producers across the country.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-200 rounded-3xl transform rotate-3"></div>
            <img
              src="/about-store.jpg"
              alt="FreshCart store front"
              className="relative rounded-3xl shadow-xl transform transition-transform hover:-translate-y-2"
            />
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value, index) => (
              <div 
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center">
                  {value.icon}
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">The passionate people behind FreshCart</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div 
                key={member.name}
                className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full bg-emerald-100 mx-auto overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=34D399&color=fff`;
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

