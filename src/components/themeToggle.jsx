import { useTheme } from "@/contexts/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(theme === "light" ? "dark" : "light")
      }
      className="p-2 rounded-lg border border-theme cursor-pointer"
    >
      {theme === "light" ? <FiMoon /> : <FiSun />}
    </button>
  );
}