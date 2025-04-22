"use client";

import useDarkMode from "@/hooks/useDarkMode";
import Button from "./Button";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = ({ defaultMode = "dark" }) => {
  const { theme, toggleTheme } = useDarkMode(defaultMode);
  return (
    <Button variants="ghost" sizes="sm" onClick={() => toggleTheme()}>
      {theme === "dark" && <Sun className="w-4 h-4" />}
      {theme === "light" && <Moon className="w-4 h-4" />}
    </Button>
  );
};

export default DarkModeToggle;
