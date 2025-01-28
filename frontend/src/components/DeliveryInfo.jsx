import React from "react"
import { Link } from "react-router-dom"
import { HiTruck, HiClock, HiMapPin, HiCheckCircle, HiArrowRight } from "react-icons/hi2"

const features = [
  {
    title: "Express Delivery",
    icon: HiTruck,
    description: "Order before 4 PM for same-day delivery within your city",
    highlight: "Free delivery on orders above ₹499",
  },
  {
    title: "Flexible Time Slots",
    icon: HiClock,
    description: "Choose your preferred delivery slot that fits your schedule",
    highlight: "Morning, Afternoon & Evening slots",
  },
  {
    title: "Live Order Tracking",
    icon: HiMapPin,
    description: "Track your order in real-time with our delivery partners",
    highlight: "Updates via WhatsApp & SMS",
  },
]

const deliveryZones = [
  "Delhi NCR",
  "Mumbai Metropolitan",
  "Bangalore Urban",
  "Hyderabad City",
  "Chennai Metropolitan"
]

const DeliveryInfo = () => {
  return (
    <section id="delivery-info" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Swift & Fresh Delivery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get fresh groceries delivered to your doorstep with our reliable delivery network across major Indian cities
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-emerald-50 rounded-2xl p-8 text-center group hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md transition-all duration-300">
                <feature.icon className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <span className="text-emerald-600 font-semibold">{feature.highlight}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-emerald-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Delivery Zones</h3>
              <p className="text-gray-600">We currently deliver to the following areas:</p>
              <ul className="space-y-4">
                {deliveryZones.map((zone, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <HiCheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">{zone}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="aspect-video bg-emerald-100 rounded-lg flex items-center justify-center">
                <HiMapPin className="w-16 h-16 text-emerald-600" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link
            to="/delivery"
            className="bg-emerald-600 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Check Delivery in Your Area
            <HiArrowRight className="inline ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DeliveryInfo

