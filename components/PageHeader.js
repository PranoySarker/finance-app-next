import Link from "next/link";
import useServerDarkMode from "@/hooks/useServerDarkMode";
import DarkModeToggle from "./DarkModeToggle";

const PageHeader = ({ className }) => {
  const theme = useServerDarkMode();
  return (
    <header className={`flex justify-between items-center ${className}`}>
      <Link
        href="/dashboard"
        className="text-xl hover:underline underline-offset-8 decoration-2"
      >
        Finance App
      </Link>

      <div className="flex items-center space-x-4">
        <DarkModeToggle defaultMode={theme} />
        <div>User Dropdown</div>
      </div>
    </header>
  );
};

export default PageHeader;
