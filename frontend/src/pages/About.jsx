import React from "react"

const About = () => {
<<<<<<< HEAD
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p>This is the about page. Add your about content here.</p>
=======
  const TEAM_MEMBERS = [
    { name: "Gaurav", role: "Founder & CEO" },
    { name: "Bhuvnesh Sharma", role: "Head of Procurement" },
    { name: "Krishnakant Kumar", role: "Customer Service Manager" },
    { name: "Pushpendra Upadhyay", role: "Head of Sustainability" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">About FreshCart</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            FreshCart began in 2010 as a small family-owned business in the heart of Mumbai, 
            driven by our passion to bring the finest Indian groceries and fresh produce to 
            your doorstep. What started as a modest shop in a local bazaar has blossomed into 
            a trusted online marketplace serving communities across India.
          </p>
          <p className="text-gray-600">
            We take pride in sourcing authentic Indian ingredients, from farm-fresh vegetables 
            to premium spices from Kerala, working directly with local farmers and artisanal 
            producers across the country to maintain the authenticity of Indian cuisine.
          </p>
        </div>
        <div className="bg-emerald-100 rounded-lg p-8 flex items-center justify-center">
          <img
            src="/placeholder.svg?height=300&width=400"
            alt="FreshMart store front"
            className="rounded-lg shadow-md"
            width={400}
            height={300}
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Authenticity</h3>
            <p className="text-gray-600">
              We ensure every product reflects the true essence of Indian cuisine, 
              sourcing ingredients from their authentic regions of origin.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-gray-600">
              We support traditional Indian farming practices while embracing modern 
              eco-friendly solutions to preserve our environment for future generations.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">
              We actively participate in local festivals and community initiatives, 
              supporting small-scale farmers and traditional Indian businesses.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <div 
              key={member.name} 
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <div 
                className="w-24 h-24 rounded-full bg-emerald-200 mx-auto mb-4"
                role="img"
                aria-label={`${member.name}'s profile`}
              ></div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
>>>>>>> 8519ed70ba3ccf12fee61313212a530bab640ddd
    </div>
  )
}

export default About

