import Main from "./Components/Main";
import './assets/css/all.min.css';
import './assets/css/tailwind.css';
import './assets/css/main.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useEffect, useState } from "react";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <ParallaxProvider>
      <Main scrolled  ={scrolled}/>
    </ParallaxProvider>
  );
}

export default App;
