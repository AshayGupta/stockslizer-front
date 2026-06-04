import { Icons } from "@/common/icons";
import { useTheme } from "@/contexts/ThemeContext";
import styled from "styled-components";

const ThemeToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  background: var(--bg-card);
  color: var(--text-primary);
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    border-color: var(--primary);
    color: var(--primary);
  }
`;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeToggleButton
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Icons.MoonIcon size={18} /> : <Icons.SunIcon size={18} />}
    </ThemeToggleButton>
  );
}

