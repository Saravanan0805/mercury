import React from 'react'
import NaVBar from '../components/HomeNav'
import { Footer } from '../components/HomeFooter'
import { BannerContainer } from '../components/menu/BannerContainer'
import { MenuSection } from '../components/menu/MenuSection'
import { ReservationSection } from '../components/landing-page/ReservationSection'
import { CategoryMenuSection } from '../components/menu/CategoryMenuSection'

const MenuPage = () => {
  return (
    <div className="content bg-[#333333] text-white">
    <NaVBar />
    <BannerContainer />
    <MenuSection />
    <CategoryMenuSection title="Food" />
    <ReservationSection />
    <Footer />
  </div>
  )
}

export default MenuPage