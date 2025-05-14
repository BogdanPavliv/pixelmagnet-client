"use client"
import {useLenis} from "./hooks/useLenis";
import MainPage from "./components/templates/MainPage/MainPage";

const Home = () => {
  // Smooth scrolling
  useLenis();

  return <MainPage />
}

export default Home;
