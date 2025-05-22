'use client'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
     <Header/>
      {children}
     <Footer/>
    </>
  )
}

export default Layout