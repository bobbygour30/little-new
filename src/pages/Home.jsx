import React from 'react'
import GalleryOfClasses from '../components/GalleryOfClasses'
import AboutPrograms from '../components/AboutPrograms'
import ValuesAndMotto from '../components/ValuesAndMotto'
import KinedoInfoSection from '../components/KinedoInfoSection'
import ChildCareSlider from '../components/ChildCareSlider'
import SixStagesOfMastery from '../components/SixStagesOfMastery'
import WhyChooseLittleCanvas from '../components/WhyChooseLittleCanvas'

const Home = () => {
  return (
    <div>
      <ChildCareSlider />
      <AboutPrograms />
      <GalleryOfClasses />
      <ValuesAndMotto />
      <SixStagesOfMastery />
      <WhyChooseLittleCanvas />
      <KinedoInfoSection />
    </div>
  )
}

export default Home