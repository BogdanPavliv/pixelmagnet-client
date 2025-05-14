"use client"
import {useLenis} from "../hooks/useLenis";
import AboutPage from "../components/templates/AboutPage/AboutPage"

const About = () => {
  // Smooth scrolling
  useLenis();
  
  return <AboutPage />
}

export default About;