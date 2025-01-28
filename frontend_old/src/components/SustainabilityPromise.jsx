import React from "react"
import { Link } from "react-router-dom"

const promises = [
  {
    title: "Eco-Friendly Packaging",
    icon: "fa-box",
    description: "All our packaging is made from recycled materials and is 100% biodegradable or reusable.",
  },
  {
    title: "Zero Food Waste",
    icon: "fa-recycle",
    description: "We partner with local food banks and composting facilities to ensure nothing goes to waste.",
  },
  {
    title: "Local Sourcing",
    icon: "fa-map-marker-alt",
    description:
      "We source from local farmers and producers to reduce transportation emissions and support local communities.",
  },
]

const stats = [
  { value: "75%", description: "Reduction in Carbon Footprint" },
  { value: "100%", description: "Recyclable Packaging" },
  { value: "50+", description: "Local Farm Partners" },
]

const SustainabilityPromise = () => {
  return (
    <section id="sustainability-promise" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Sustainability Promise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Committed to delivering fresh, organic products while protecting our planet for future generations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <div key={index} className="bg-emerald-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                <i className={`fas ${promise.icon} text-3xl text-emerald-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{promise.title}</h3>
              <p className="text-gray-600">{promise.description}</p>
              <div className="mt-6">
                <span className="inline-flex items-center text-emerald-600 font-medium">
                  Learn More
                  <i className="fas fa-arrow-right ml-2"></i>
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-emerald-600 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <p className="text-emerald-100">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Link
            to="/about"
            className="bg-emerald-600 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Read Our Full Impact Report
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SustainabilityPromise

