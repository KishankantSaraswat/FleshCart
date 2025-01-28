import React from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Verified Customer",
    image: "https://avatar.iran.liara.run/public",
    rating: 5,
    comment:
      "The quality of fresh produce is amazing! Always delivered on time and the packaging is eco-friendly. Couldn't be happier with the service.",
    date: "2 days ago",
  },
  {
    name: "Michael Roberts",
    role: "Verified Customer",
    image: "https://avatar.iran.liara.run/public",
    rating: 4.5,
    comment:
      "Great selection of organic products and the delivery is always prompt. The staff is very professional and helpful.",
    date: "1 week ago",
  },
  {
    name: "Emily Chen",
    role: "Verified Customer",
    image: "https://avatar.iran.liara.run/public",
    rating: 5,
    comment:
      "The weekly subscription has made my life so much easier. Fresh, quality products delivered right to my door. Highly recommend!",
    date: "3 days ago",
  },
]

const stats = [
  { value: "98%", label: "Satisfied Customers" },
  { value: "10k+", label: "Weekly Deliveries" },
  { value: "4.9", label: "Average Rating" },
  { value: "24/7", label: "Customer Support" },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our happy customers about their experience with our service
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-emerald-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star ${i < Math.floor(testimonial.rating) ? "" : "text-gray-300"}`}
                    ></i>
                  ))}
                  {testimonial.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
              <p className="text-emerald-600 text-sm">{testimonial.date}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.value}</div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Write a Review
            <i className="fas fa-pen ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

