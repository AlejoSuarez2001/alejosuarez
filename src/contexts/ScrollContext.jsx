import { useContext, useState, createContext, useEffect } from "react";

const ScrollContext = createContext();

export function useScroll() {
  return useContext(ScrollContext);
}

export function ScrollContextProvider({ children }) {
  const [home, setHome] = useState(0);
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [certifications, setCertifications] = useState(0);
  const [stack, setStack] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function scrollToElement(ref) {
    if (ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 120;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

  function handleScrollY() {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        screenWidth,
        scrollY,
        scrollToElement,
        home,
        setHome,
        experience,
        setExperience,
        projects,
        setProjects,
        certifications,
        setCertifications,
        stack,
        setStack,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
