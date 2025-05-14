"use client";
import {useLenis} from "../hooks/useLenis";
import ServicePage from "../components/templates/ServicePage/ServicePage"

const Service = () => {
  // Smooth scrolling
  useLenis();

  return <ServicePage />
};

export default Service;