import { BrowserRouter } from "react-router-dom"
import Navbar from "./Components/Navbar"
import HomeSectionTwo from "./Components/HomeAppointment"
import HomeSectionThree from "./Components/HomeSectionThree"
import Footer from "./Components/Footer"
import HomeSectionFour from "./Components/HomeTeam"
import HomeSectionFive from "./Components/HomePracticeSection"
import Header from "./Components/Header"
import HomeServices from "./Components/HomeServices"
import ContactSection from "./Components/ContactSection"



function App() {


  return (
    <BrowserRouter>
      <Header/>
      <Navbar/>
      <HomeSectionTwo/>
      <HomeSectionThree/>
      <HomeSectionFour/>
      <HomeSectionFive/>
      <HomeServices/>
      <ContactSection/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
