import React from "react"
import Hero from "../components/hero"
import FeaturedCategories from "../components/FeaturedCategories"
import Bestsellers from "../components/Bestsellers"
import SustainabilityPromise from "../components/SustainabilityPromise"
import SeasonalDeals from "../components/SeasonalDeals"
import DeliveryInfo from "../components/DeliveryInfo"
import Testimonials from "../components/Testimonials"
import Newsletter from "../components/Newsletter"
const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <Bestsellers />
      <SustainabilityPromise />
      <SeasonalDeals/>
      <DeliveryInfo />
      <Testimonials />
      <Newsletter />
    </>
  )
}

export default Home

