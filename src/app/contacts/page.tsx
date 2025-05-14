"use client"
import {useLenis} from "../hooks/useLenis";
import ContactsPage from "../components/templates/ContactsPage/ContactsPage"

const Contacts = () => {
  // Smooth scrolling
  useLenis();
  
  return <ContactsPage />
}

export default Contacts;