import Hero from "../components/hero/hero";
import About1 from "../components/About/about1";
import React from 'react';
import RecentProjbar from "../components/recent project bar/recentprojbar";
import Getintouch from "../components/getintouch/getintouch";
import HomeGrid from "../components/homegrid/homegrid";
const Home = () => {
  return (
  <>
  <Hero/>
  <About1/>
  <RecentProjbar/>
  <HomeGrid/>
  <Getintouch/>
  </>
  );
};

export default Home;