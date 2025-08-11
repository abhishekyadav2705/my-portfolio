import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Head from "./components/Head";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AnimatedIntroSection from "./components/AnimatedIntroSection";
import InteractiveTimeline from "./components/InteractiveTimeline";
import ClosedMessage from "./components/ClosedMessage";
import SkillsSection from "./components/SkillsSection";
import ProgressBar from "./components/ProgressBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [override, setOverride] = useState(false);
  const sectionsRef = useRef({});

  const openingHour = 8; // Easily adjustable opening hour (24-hour format)
  const closingHour = 24; // Easily adjustable closing hour (24-hour format)

  useEffect(() => {
    const checkTime = () => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
      if (currentHour >= openingHour && currentHour < closingHour) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkTime();
    const interval = setInterval(checkTime, 60000);

    return () => clearInterval(interval);
  }, [openingHour, closingHour]);

  const handleToggle = () => {
    setOverride(!override);
  };

  // useEffect(() => {
  //   let currentToastId = null;

  //   const handleScroll = () => {
  //     const sectionIds = [
  //       "about",
  //       "experience",
  //       "skills",
  //       "projects",
  //       "contact",
  //     ];
  //     const currentScrollPosition = window.scrollY + window.innerHeight / 2;

  //     sectionIds.forEach((id) => {
  //       const section = document.getElementById(id);
  //       if (
  //         section &&
  //         section.offsetTop <= currentScrollPosition &&
  //         section.offsetTop + section.offsetHeight > currentScrollPosition
  //       ) {
  //         const newToastId = `section-toast-${id}`;
  //         if (currentToastId !== newToastId) {
  //           toast.dismiss(currentToastId); // Dismiss existing toast
  //           toast.info(
  //             `You are now viewing the ${
  //               id.charAt(0).toUpperCase() + id.slice(1)
  //             } section!`,
  //             {
  //               toastId: newToastId,
  //             }
  //           );
  //           currentToastId = newToastId;
  //         }
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     toast.dismiss(); // Dismiss all toasts on component unmount
  //   };
  // }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <ProgressBar />
        {/* {isOpen || override ? ( */}
        <>
          <Head />
          <AnimatedIntroSection />
          <AboutSection id="about" />
          <SkillsSection id="skills" />
          <ProjectsSection id="projects" />
          <ExperienceSection id="experience" />
          <InteractiveTimeline />
          <ContactSection id="contact" />
          <Footer id="contact" />
        </>
        {/* ) : (
          <ClosedMessage onToggle={handleToggle} openingHour={openingHour} />
        )} */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
