"use client"
import Empower from "../../../components/modules/ServicePage/Empower";
import Branding from "../../../components/modules/ServicePage/Branding";
import AppSection from "../../../components/modules/ServicePage/AppSection";
import Digital from "../../../components/modules/ServicePage/Digital";
import Advancement from "../../../components/modules/ServicePage/Advancement";
import Magnetize from "../../../components/modules/MainPage/Magnetize";

const ServicePage = () => {
  return (
    <div className='main'>
      <Empower />
      <Branding />
      <AppSection />
      <Digital />
      <Advancement />
      <Magnetize />
    </div>
  )
}

export default ServicePage