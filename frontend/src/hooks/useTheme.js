import { useState, useEffect } from "react";

// export default function useTheme() {
//   const [theme, setTheme] = useState(() => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("theme") || "light";
//     }
//     return "light";
//   });

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   return { theme, toggleTheme };
// }

export default function useTheme () {

  const [theme, setTheme] = useState('')
  useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme : dark)').matches){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  } , [])
  return theme
}